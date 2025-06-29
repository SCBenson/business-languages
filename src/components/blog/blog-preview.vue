<template>
  <v-sheet class="header-section" :style="coverImageStyle">
    <v-container class="mx-2">
      <v-row class="align-start">
        <v-col class="">
          <div class="">
            <h1 class="text-start text-white">{{ blogData.title }}</h1>
            <h2 class="text-white">{{ blogData.formattedDate }}</h2>
            <v-avatar v-if="blogData.avatarPath" size="80"
              ><v-img  :src="blogData.avatarPath"></v-img>
            </v-avatar>
            <p class="text-white">By: {{ blogData.author }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-card class="overlapping-card ma-6" color="#f4b754">
    <div class="ma-4">
      <h2>{{ blogData.initialHeader }}</h2>
      <p>
        {{ blogData.initialParagraph }}
      </p>
      <div v-for="(item, index) in blogData.contentItems" :key="index">
        <h2 v-if="item.type === 'header'">{{ item.content }}</h2>
        <p v-if="item.type === 'paragraph'">{{ item.content }}</p>
      </div>
    </div>
    <v-btn @click="goBackToEdit" color="blue">Edit Content</v-btn>
    <v-btn @click="publishBlog" color="green" :loading="isPublishing">Publish</v-btn>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { DB, storage } from "@/firebase/config.js";
import { collection, addDoc, updateDoc, Timestamp } from "firebase/firestore";
const basePublicPath = import.meta.env.BASE_URL || "/";
const router = useRouter();
const isPublishing = ref(false);

const snackbar = ref({
  show: false,
  text: '',
  color: 'info'
});

const blogData = ref({
  avatarPath: "",
  author: "",
  id: "",
  title: "",
  date: "",
  initialHeader: "",
  initialParagraph: "",
  coverImageUrl: "",
  contentItems: [],
});



const generateSlug = (title) => {
  
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').substring(0,60);

};

// Compute the background style based on image URL
const coverImageStyle = computed(() => {
  const defaultImage = "url('@/assets/hero-background.png')";
  const imageUrl = blogData.value.coverImageUrl;

  if (imageUrl) {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageUrl}')`,
    };
  } else {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ${defaultImage}`,
    };
  }
});

onMounted(() => {
  // Access blog data from history.state
  if (history.state && history.state.blogData) {
    blogData.value = history.state.blogData;
    console.log("Blog data loaded from history:", blogData.value);
  } else {
    console.error("No blog data found in history state");
  }
});

const goBackToEdit = () => {
  try{
    sessionStorage.setItem('blogEditData', JSON.stringify(blogData.value));
    console.log("Stored blog data in sessionStorage");
  }catch (error){
    console.error('Error storing edit data:', error);
  }
  router.push('/blog-post-creator?edit=true');
};

const publishBlog = async () => {
  isPublishing.value = true;
  // Create a reference to the "blog-posts" collection
  const blogPostsCollection = collection(DB, "blog-posts");
  const slug = generateSlug(blogData.value.title);

  try {
      let dateObj = new Date();
        // Try to create a valid date object
      if (blogData.value.formattedDate) {
        // Parse the formatted date (e.g., "March 25th, 2025") into a valid date object
        // Remove any ordinal suffixes (st, nd, rd, th) which cause parsing issues
        const cleanDateStr = blogData.value.formattedDate
          .replace(/(\d+)(st|nd|rd|th)/, '$1');
        const parsedDate = new Date(cleanDateStr);
        
        // Check if the date is valid
        if (isNaN(dateObj.getTime())) {
          // If date is invalid, use current date as fallback
          console.warn("Invalid date format, using current date instead");
          dateObj = parsedDate;
        }
      } else {
        console.warn("Could not parse date string, using current date instead.")
      }
      // Upload image if it exists
      let imageUrl = "";
      if(blogData.value.coverImageUrl && blogData.value.coverImageUrl.startsWith('blob:')){
        try{
          const response = await fetch(blogData.value.coverImageUrl);
          const blob = await response.blob();
          const imageRef = storageRef(storage, `blog-images/${slug}-${Date.now()}`);
          await uploadBytes(imageRef, blob);
          imageUrl = await getDownloadURL(imageRef);
          console.log("Image uploaded, URL:", imageUrl);
        } catch (error){
          console.error("Error uploading image:", error);
          imageUrl = blogData.value.coverImageUrl;
        }
      } else {
          imageUrl = blogData.value.coverImageUrl || '';
      }


    const docRef = await addDoc(blogPostsCollection, {
      avatar: blogData.value.avatarPath,
      author: blogData.value.author,
      formattedDate: blogData.value.formattedDate || '',
      date: Timestamp.fromDate(dateObj),
      title: blogData.value.title,
      initialHeader: blogData.value.initialHeader,
      initialParagraph: blogData.value.initialParagraph,
      contentItems: blogData.value.contentItems,
      coverImageUrl: imageUrl,
      slug: slug
    });
    await updateDoc(docRef, {
      id: docRef.id
    });

    blogData.value.id = docRef.id;

    console.log("Blog post created with ID:", docRef.id);
    console.log("Blog post slug:", slug);

    snackbar.value = {
      show: true,
      text: 'Blog post published successfully!',
      color: 'success'
    };

    setTimeout(() => {
      router.push(`/blog/${slug}`);
    }, 1500);

    setTimeout(() => {
        router.replace(`/blog/${slug}`).catch((err) => {
          console.error("Navigation failed:", err);
        });
      }, 3000);

  } catch (error) {
    console.error("Error publishing blog post:", error);
    snackbar.value = {
      show: true,
      text: `Publishing failed: ${error.messages}`,
      color: 'error'
    };
    // Handle the error appropriately (e.g., show a notification to the user)
  } finally {
    isPublishing.value = false;
  }
  //Create a new document for the blog post in the database
};


// TODO: Create a document in the blog-posts database and initialize minimum required fields.

// TODO: Upload relevant data into the fields from blogData object
// TODO: Update the router to create a new path to the newly created blog post.
// TODO: Read the document from firestore and populate the new blog component with the data.
</script>

<style scoped>
.header-section {
  background-size: cover;
  background-position: center;
  height: 30vh;
}
.overlapping-card {
  margin-top: -15vh;
  z-index: 1;
  position: relative;
}
</style>
