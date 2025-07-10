<template>
  <v-sheet class="header-section" :style="coverImageStyle">
    <v-container>
      <v-row class="align-start">
        <v-col cols="12" md="8" lg="6" class="mx-auto">
          <div class="text-center text-md-start">
            <h1 class="text-white blog-title mb-4">{{ blogData.title }}</h1>
            <h2 class="text-white blog-date mb-2">{{ blogData.formattedDate }}</h2>
            <div class="d-flex align-center justify-center justify-md-start mb-2">
              <v-avatar v-if="blogData.avatarPath" size="60" class="me-3">
                <v-img :src="blogData.avatarPath"></v-img>
              </v-avatar>
              <p class="text-white blog-author ma-0">By: {{ blogData.author }}</p>
            </div>
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
            <v-divider class="my-6"></v-divider>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-center">
              <v-btn @click="goBackToEdit" color="blue" variant="outlined" size="large">
                <v-icon start>mdi-pencil</v-icon>
                Edit Content
              </v-btn>
              <v-btn @click="publishBlog" color="green" :loading="isPublishing" size="large">
                <v-icon start>mdi-publish</v-icon>
                Publish
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
  <v-snackbar v-model="snackbar.show" :color="snackbar.color" location="top">
    {{ snackbar.text }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { DB, storage } from "@/firebase/config.js";
import { collection, addDoc, updateDoc, Timestamp } from "firebase/firestore";

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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageUrl}')`,
    };
  } else {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${defaultImage}`,
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
      text: `Publishing failed: ${error.message}`,
      color: 'error'
    };
  } finally {
    isPublishing.value = false;
  }
};
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