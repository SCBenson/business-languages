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
      <v-container>
        <v-row class="align-start">
          <v-col cols="12" md="8" lg="6" class="mx-auto">
            <div class="text-center text-md-start">
              <h1 class="text-white blog-title mb-4">{{ blogData.title }}</h1>
              <h2 class="text-white blog-date mb-2">{{ blogData.formattedDate }}</h2>
              <p class="text-white blog-author">By: {{ blogData.author }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container class="blog-content-container">
      <v-row class="justify-center">
        <v-col cols="12" md="10" lg="8" xl="6">
          <v-card class="overlapping-card" color="#f4b754" elevation="8">
            <v-card-text class="pa-6 pa-md-8">
              <div class="blog-content">
                <h2 class="blog-header mb-4">{{ blogData.initialHeader }}</h2>
                <p class="blog-paragraph mb-6">
                  {{ blogData.initialParagraph }}
                </p>
                <div v-for="(item, index) in blogData.contentItems" :key="index" class="content-item">
                  <h2 v-if="item.type === 'header'" class="blog-header mb-4">{{ item.content }}</h2>
                  <p v-if="item.type === 'paragraph'" class="blog-paragraph mb-6">{{ item.content }}</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
  formattedDate: "",
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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageUrl}')`,
    };
  } else {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${defaultImage}`,
    };
  }
});

const fetchBlogData = async () => {
  loading.value = true;
  error.value = null;
  try {
    // get the reference to the blog posts collection..
    const blogsCollection = collection(DB, "blog-posts");
    //Query the blog-posts collection for a document with the matching slug.
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
  height: 40vh;
  min-height: 300px;
  display: flex;
  align-items: center;
}

.blog-content-container {
  margin-top: -10vh;
  position: relative;
  z-index: 1;
}

.overlapping-card {
  position: relative;
  border-radius: 16px !important;
}

.blog-content {
  line-height: 1.6;
}

/* Typography scaling */
.blog-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

.blog-date {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
}

.blog-author {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
}

.blog-header {
  font-size: 1.5rem;
  font-weight: 600;
  color: #151619;
  line-height: 1.3;
}

.blog-paragraph {
  font-size: 1rem;
  color: #151619;
  line-height: 1.7;
}

.content-item {
  margin-bottom: 1.5rem;
}

/* Mobile responsiveness */
@media (max-width: 599px) {
  .header-section {
    height: 35vh;
    min-height: 250px;
  }
  
  .blog-content-container {
    margin-top: -8vh;
  }
  
  .blog-title {
    font-size: 1.5rem;
  }
  
  .blog-date {
    font-size: 1rem;
  }
  
  .blog-author {
    font-size: 0.9rem;
  }
  
  .blog-header {
    font-size: 1.3rem;
  }
  
  .blog-paragraph {
    font-size: 0.95rem;
  }
}

/* Tablet responsiveness */
@media (min-width: 600px) and (max-width: 959px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-date {
    font-size: 1.2rem;
  }
  
  .blog-header {
    font-size: 1.6rem;
  }
  
  .blog-paragraph {
    font-size: 1.05rem;
  }
}

/* Desktop responsiveness */
@media (min-width: 960px) {
  .blog-title {
    font-size: 2.5rem;
  }
  
  .blog-date {
    font-size: 1.3rem;
  }
  
  .blog-author {
    font-size: 1.1rem;
  }
  
  .blog-header {
    font-size: 1.8rem;
  }
  
  .blog-paragraph {
    font-size: 1.1rem;
  }
}

/* Large desktop */
@media (min-width: 1264px) {
  .blog-title {
    font-size: 3rem;
  }
  
  .blog-date {
    font-size: 1.4rem;
  }
  
  .blog-header {
    font-size: 2rem;
  }
  
  .blog-paragraph {
    font-size: 1.15rem;
  }
}
</style>