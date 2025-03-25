<template>
  <v-container v-if="loading">
    <v-row class="justify-center">
      <v-col cols="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="mt-4">Loading blog post...</p>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-if="error">
    <v-row class="justify-center">
      <v-col cols="12" class="text-center">
        <v-alert type="error">{{ error }}</v-alert>
        <v-btn @click="router.push('/blog')" color="primary" class="mt-4"
          >Go Back</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <div v-else>
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
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DB } from "@/firebase/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const loading = ref(true);
const error = ref(null);

const blogData = ref({
  id: "",
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

const fetchBlogData = async () => {
  loading.value = true;
  error.value = null;
  try {
    //Query the blog-posts collection for a document with the matching slug.
    const blogsCollection = collection(DB, "blog-posts");
    //where(field, conditional, ref(defined above))
    const q = query(blogsCollection, where("slug", "==", slug));
    // q returns a reference to the document, so now we can use getDoc() and point to it.
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      error.value = "Blog post not found";
      loading.value = false;
      return;
    }
    //get the first document that matches
    const docData = querySnapshot.docs[0].data();
    //Store the document ID in the blogData for future reference. [I thought this was already stored from preview?]
    docData.id = querySnapshot.docs[0].id;

    blogData.value = docData;
    console.log("Loaded blog post with ID:", docData.id);
  } catch (err) {
    console.error("Error fetching blog post:", err);
    error.value = "Error loading blog post: " + err.message;
  } finally {
    loading.value = false;
  }
};

//The moment the page initiates, get the relevant data before rendering the page.
onMounted(() => {
  fetchBlogData();
});
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
