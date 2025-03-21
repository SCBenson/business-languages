<template>
  <v-sheet class="header-section" :style="coverImageStyle">
    <v-container class="mx-2">
      <v-row class="align-start">
        <v-col class="">
          <div class="">
            <h1 class="text-start text-white">{{ blogData.title }}</h1>
            <h2 class="text-white">{{ blogData.date }}</h2>
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
    <v-btn @click="goBack" color="blue">Edit Content</v-btn>
    <v-btn @click="publishBlog" color="green">Publish</v-btn>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";

import { ref, onMounted, computed } from "vue";

import { DB as db } from "@/firebase/config.js";
import { collection, addDoc, setDoc } from "firebase/firestore";

const router = useRouter();

const blogData = ref({
  title: "",
  date: "",
  initialHeader: "",
  initialParagraph: "",
  coverImageUrl: "",
  contentItems: [],
});

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

const goBack = () => {
  router.back();
};

const publishBlog = () => {
  // Create a reference to the "blog-posts" collection
  const blogPostsCollection = collection(db, "blog-posts");
  try {
    addDoc(blogPostsCollection, {
      author: "blogData.value.author",
      date: "blogData.value.date",
      title: "blogData.value.title",
      initialHeader: "blogData.value.initialHeader",
      initialParagraph: "blogData.value.initialParagraph",
    });
  } catch (error) {
    console.error("Error publishing blog post:", error);
    // Handle the error appropriately (e.g., show a notification to the user)
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
