<template>
  <v-container v-if="!errorFlag">
    <v-row>
      <v-col>
        <h1>Blog Posts</h1>
        <v-card
          color="#f4b754"
          v-for="(member, index) in blogPosts"
          :key="index"
          class="mb-4"
        >
          <v-row>
            <v-col
              ><v-card-text class="pb-0">{{ member.date }}</v-card-text></v-col
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
                class="pt-0 custom-text-color"
                v-if="member.initialParagraph && member.initialParagraph.length > 500"
              >
                {{ member.initialParagraph.slice(0, 500) + "..." }}
              </v-card-text>
              <v-card-text class="pt-0 custom-text-color" v-else>{{
                member.initialParagraph
              }}</v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-btn class="ml-4 mb-4" color="purple">Explore ➝</v-btn></v-col
            >
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { data } from "@/assets/scripts/blogdata.js";
import { DB } from "@/firebase/config.js";
import { collection, getDocs, query } from "firebase/firestore";

const loading = ref(false);
const error = ref(null);
const errorFlag = ref(false);
const blogPosts = ref([]);
//Fetch all of the documents inside the 'blog-posts collection'
const fetchBlogPosts = async () => {
  loading.value = true;
  errorFlag.value = false;
  error.value = null;
  try {
    const blogsCollection = collection(DB, "blog-posts");
    const q = query(blogsCollection);
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
        author: blogData.author || "",
        date: blogData.date || "",
        title: blogData.initialHeader || "",
        initialParagraph: blogData.initialParagraph || ""
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
</style>
