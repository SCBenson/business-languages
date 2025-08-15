<template>
  <v-container v-if="!errorFlag">
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
        <h1 >Blog Posts</h1>
      </div>
        <v-card
          color="#f4b754"
          v-for="(member, index) in blogPosts"
          :key="index"
          class="pa-4 mx-auto mt-4" :max-width="$vuetify.display.mdAndUp ? '1200px' : '100%'"
        >
        <v-row>
          <v-col>
            <v-avatar>
              <v-img size="32" :src="member.avatar">
                
              </v-img></v-avatar><span class="ml-2 font-weight-medium responsive-text">{{member.author}}</span></v-col>
        
        </v-row>
          <v-row>
            <v-col
              ><v-card-text class="pb-0 pt-0">{{ member.formattedDate }}</v-card-text></v-col
            >
          </v-row>
          <v-row
            ><v-col
              ><v-card-title class="no-truncate pb-0 pt-0">{{
                member.title
              }}</v-card-title></v-col
            ></v-row
          >
          <v-row>
            <v-col>
              <!-- Shortening the description to a max character limit. -->
              <v-card-text
                class="pt-0 custom-text-color responsive-text"
                v-if="member.initialParagraph && member.initialParagraph.length > 500"
              >
                {{ member.initialParagraph.slice(0, 500) + "..." }}
              </v-card-text>
              <v-card-text class="pt-0 custom-text-color responsive-text" v-else>{{
                member.initialParagraph
              }}</v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-btn @click="goToBlog(member.slug)" class="ml-4 mb-4" color="purple">Explore ➝</v-btn></v-col
            >
          </v-row>
          <v-row>
            <v-col><v-btn @click="editBlogPost(member)" class="ml-4 mb-4" color="blue">Edit</v-btn><v-btn @click="deleteBlogPost(member)" class="ml-4 mb-4" color="red">Delete</v-btn></v-col>
            <!-- <v-col><v-btn>Delete</v-btn></v-col> -->
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- Render an error message, outlining that there is a problem fetching the data from the cloud -->
  <v-container v-else>
    <v-row class="justify-center">
      <v-col><v-card><v-card-text>{{ error }}</v-card-text></v-card></v-col>
    </v-row>
  </v-container>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    location="top"
    >
    {{ snackbar.text }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"
import { DB } from "@/firebase/config.js";
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore";

const router = useRouter();
const loading = ref(false);
const error = ref(null);
const errorFlag = ref(false);
const blogPosts = ref([]);
const snackbar= ref({
  show: false,
  message: "",
  color: "info",
});
//Fetch all of the documents inside the 'blog-posts collection'
const fetchBlogPosts = async () => {
  loading.value = true;
  errorFlag.value = false;
  error.value = null;
  try {
    const blogsCollection = collection(DB, "blog-posts");
    const q = query(blogsCollection, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      errorFlag.value = true;
      error.value = "There seems to be a problem fetching the blog data from the cloud. Contact an Administrator."
      console.log("No documents found.")
    }
    const posts = [];
    //loop through each document and get the avatarUrl, author, date, intialHeader and initial Paragraph.
    querySnapshot.forEach((doc) =>{
      const blogData = doc.data();
      posts.push({
        id: doc.id,
        avatar: blogData.avatar,
        author: blogData.author || "",
        formattedDate: blogData.formattedDate || "",
        date: blogData.date,
        title: blogData.title || "",
        initialHeader: blogData.initialHeader || "",
        initialParagraph: blogData.initialParagraph || "",
        coverImageUrl: blogData.coverImageUrl || "",
        contentItems: blogData.contentItems || [],
        slug: blogData.slug
      });
    });
    blogPosts.value = posts;

  } catch (err) {
    errorFlag.value = true;
    error.value = err; 
    console.log("Error fetching the blog posts: "  + error.value) 
  } finally{
    loading.value = false;
  }
};

const goToBlog = (slug) => {
  router.push(`/blog/${slug}`);
}

const editBlogPost = async (blogPost) => {
  try {
    // Transform the blog post data to match the expected format
    const editData = {
      avatarPath: blogPost.avatar || "",
      author: blogPost.author,
      id: blogPost.id,
      title: blogPost.title,
      date: blogPost.date,
      formattedDate: blogPost.formattedDate,
      initialHeader: blogPost.initialHeader,
      initialParagraph: blogPost.initialParagraph,
      coverImageUrl: blogPost.coverImageUrl || "",
      contentItems: blogPost.contentItems || [],
    };
    
    // Store in sessionStorage (same key as blog-preview.vue uses)
    sessionStorage.setItem('blogEditData', JSON.stringify(editData));
    
    // Navigate to creator with edit flag
    router.push('/blog-post-creator?edit=true');
    
  } catch (error) {
    console.error('Error preparing edit data:', error);
    // Show error notification
  }
};

const deleteBlogPost = async (blogPost) => {
  try {
    // Show confirmation dialog first
    const confirmed = await showConfirmDialog('Delete Blog Post', 
      'Are you sure you want to delete this blog post? This action cannot be undone.');
    
    if (confirmed) {
      // Delete from Firestore
      await deleteDoc(doc(DB, 'blog-posts', blogPost.id));
      
      // Remove from local list
      blogPosts.value = blogPosts.value.filter(post => post.id !== blogPost.id);
      
      // Show success notification
      showNotification('Blog post deleted successfully', 'success');
    }
  } catch (error) {
    console.error('Error deleting blog post:', error);
    showNotification('Failed to delete blog post', 'error');
  }
};

const showNotification = (text, color = 'info') => {
  snackbar.value = {
    show: true,
    message: text,
    color: color,
  };
};

const showConfirmDialog = (title, message) => {
  return new Promise((resolve) => {
    const confirm = window.confirm(`${title}\n\n${message}`);
    resolve(confirm);
  });
};

onMounted(() => {
  fetchBlogPosts();
});
</script>

<style scoped>
.custom-text-color {
  color: #151619 !important;
}

.no-truncate {
  overflow: visible;
  text-overflow: clip !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
  white-space: normal !important;
}
.responsive-title {
  font-size: 1.1rem;
}

.responsive-text {
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .responsive-title {
    font-size: 1.4rem;
  }
  
  .responsive-text {
    font-size: 1.1rem;
  }
}
</style>