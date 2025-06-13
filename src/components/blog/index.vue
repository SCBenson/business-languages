<template>
  <div class="blog-preview-container">
    <!-- Hero Section with Optimized Background -->
    <v-sheet 
      class="header-section" 
      :style="coverImageStyle"
      role="banner"
    >
      <v-container class="mx-2">
        <v-row class="align-start">
          <v-col>
            <div class="header-content">
              <h1 class="text-start text-white blog-title">{{ blogData.title }}</h1>
              <h2 class="text-white blog-date">{{ blogData.formattedDate }}</h2>
              <div class="author-section">
                <v-avatar 
                  v-if="blogData.avatarPath" 
                  size="80"
                  class="author-avatar"
                >
                  <v-img 
                    :src="blogData.avatarPath"
                    :alt="`Avatar of ${blogData.author}`"
                    loading="lazy"
                  />
                </v-avatar>
                <p class="text-white author-name">By: {{ blogData.author }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Content Card -->
    <v-card class="overlapping-card ma-6" color="#f4b754" elevation="8">
      <div class="ma-4 blog-content">
        <h2 class="content-header">{{ blogData.initialHeader }}</h2>
        <p class="content-paragraph">{{ blogData.initialParagraph }}</p>
        
        <!-- Dynamic Content -->
        <div 
          v-for="(item, index) in blogData.contentItems" 
          :key="`content-${index}`"
          class="content-item"
        >
          <h2 v-if="item.type === 'header'" class="dynamic-header">
            {{ item.content }}
          </h2>
          <p v-if="item.type === 'paragraph'" class="dynamic-paragraph">
            {{ item.content }}
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <v-card-actions class="action-buttons">
        <v-btn 
          @click="goBackToEdit" 
          color="blue" 
          variant="elevated"
          :disabled="isPublishing"
          prepend-icon="mdi-pencil"
        >
          Edit Content
        </v-btn>
        
        <v-btn 
          @click="publishBlog" 
          color="green" 
          variant="elevated"
          :loading="isPublishing"
          :disabled="!canPublish"
          prepend-icon="mdi-publish"
        >
          {{ isPublishing ? 'Publishing...' : 'Publish' }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Enhanced Snackbar -->
    <v-snackbar 
      v-model="snackbar.show" 
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      location="top"
      multi-line
    >
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn 
          variant="text" 
          @click="snackbar.show = false"
          color="white"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Error Dialog for Better UX -->
    <v-dialog v-model="errorDialog.show" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          <v-icon color="error" class="mr-2">mdi-alert-circle</v-icon>
          Publishing Error
        </v-card-title>
        <v-card-text>
          <p>{{ errorDialog.message }}</p>
          <v-alert 
            v-if="errorDialog.isAdBlocker" 
            type="warning" 
            variant="tonal"
            class="mt-3"
          >
            <strong>Possible Ad Blocker Issue:</strong><br>
            Please disable your ad blocker for this site and try again.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="errorDialog.show = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
  color: 'info',
  timeout: 4000
});

const errorDialog = ref({
  show: false,
  message: '',
  isAdBlocker: false
});

const blogData = ref({
  avatarPath: "",
  author: "",
  id: "",
  title: "",
  date: "",
  formattedDate: "",
  initialHeader: "",
  initialParagraph: "",
  coverImageUrl: "",
  contentItems: [],
});

// Computed properties
const canPublish = computed(() => {
  return blogData.value.title && 
         blogData.value.author && 
         blogData.value.initialHeader && 
         blogData.value.initialParagraph &&
         !isPublishing.value;
});

const coverImageStyle = computed(() => {
  const defaultImage = "/assets/hero-background.webp";
  const imageUrl = blogData.value.coverImageUrl;

  const backgroundImage = imageUrl 
    ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageUrl}')`
    : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${defaultImage}')`;

  return {
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
});

// Utility functions
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60)
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

const showNotification = (text, color = 'info', timeout = 4000) => {
  snackbar.value = { show: true, text, color, timeout };
};

const showError = (message, isAdBlocker = false) => {
  errorDialog.value = {
    show: true,
    message,
    isAdBlocker
  };
};

const detectAdBlockerError = (error) => {
  const adBlockerIndicators = [
    'ERR_BLOCKED_BY_CLIENT',
    'ERR_NETWORK_CHANGED',
    'blocked by the client',
    'network error'
  ];
  
  const errorMessage = error.message?.toLowerCase() || error.toString().toLowerCase();
  return adBlockerIndicators.some(indicator => errorMessage.includes(indicator));
};

// Firebase operations with enhanced error handling
const uploadCoverImage = async (imageUrl, slug) => {
  if (!imageUrl || !imageUrl.startsWith('blob:')) {
    return imageUrl || '';
  }

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }
    
    const blob = await response.blob();
    const imageRef = storageRef(storage, `blog-images/${slug}-${Date.now()}`);
    
    await uploadBytes(imageRef, blob);
    const downloadURL = await getDownloadURL(imageRef);
    
    console.log("Image uploaded successfully:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    if (detectAdBlockerError(error)) {
      throw new Error("Image upload blocked. Please disable ad blocker and try again.");
    }
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

const createBlogPost = async (blogPostData) => {
  try {
    const blogPostsCollection = collection(DB, "blog-posts");
    const docRef = await addDoc(blogPostsCollection, blogPostData);
    
    await updateDoc(docRef, { id: docRef.id });
    
    return docRef.id;
  } catch (error) {
    console.error("Error creating blog post:", error);
    
    if (detectAdBlockerError(error)) {
      throw new Error("Database connection blocked. Please disable ad blocker and try again.");
    }
    
    throw new Error(`Failed to save blog post: ${error.message}`);
  }
};

// Main functions
const goBackToEdit = () => {
  try {
    sessionStorage.setItem('blogEditData', JSON.stringify(blogData.value));
    console.log("Stored blog data in sessionStorage");
    router.push('/blog-post-creator?edit=true');
  } catch (error) {
    console.error('Error storing edit data:', error);
    showNotification('Failed to save draft data', 'error');
  }
};

const publishBlog = async () => {
  if (!canPublish.value) {
    showNotification('Please fill in all required fields', 'warning');
    return;
  }

  isPublishing.value = true;
  
  try {
    const slug = generateSlug(blogData.value.title);
    
    // Show progress
    showNotification('Publishing blog post...', 'info', 0);
    
    // Parse and validate date
    let dateObj = new Date();
    if (blogData.value.formattedDate) {
      const cleanDateStr = blogData.value.formattedDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
      const parsedDate = new Date(cleanDateStr);
      
      if (!isNaN(parsedDate.getTime())) {
        dateObj = parsedDate;
      } else {
        console.warn("Invalid date format, using current date");
      }
    }

    // Upload cover image
    const imageUrl = await uploadCoverImage(blogData.value.coverImageUrl, slug);
    
    // Prepare blog post data
    const blogPostData = {
      avatar: blogData.value.avatarPath || '',
      author: blogData.value.author,
      formattedDate: blogData.value.formattedDate || '',
      date: Timestamp.fromDate(dateObj),
      title: blogData.value.title,
      initialHeader: blogData.value.initialHeader,
      initialParagraph: blogData.value.initialParagraph,
      contentItems: blogData.value.contentItems || [],
      coverImageUrl: imageUrl,
      slug: slug,
      published: true,
      createdAt: Timestamp.now()
    };

    // Create blog post
    const docId = await createBlogPost(blogPostData);
    
    blogData.value.id = docId;
    
    console.log("Blog post published successfully:", { id: docId, slug });
    
    showNotification('Blog post published successfully!', 'success');
    
    // Navigate to published blog
    setTimeout(() => {
      router.replace(`/blog/${slug}`).catch((err) => {
        console.error("Navigation failed:", err);
        showNotification('Published successfully, but navigation failed', 'warning');
      });
    }, 1500);

  } catch (error) {
    console.error("Error publishing blog post:", error);
    
    const isAdBlocker = detectAdBlockerError(error);
    showError(error.message, isAdBlocker);
    
  } finally {
    isPublishing.value = false;
    snackbar.value.show = false; // Hide progress notification
  }
};

// Lifecycle
onMounted(() => {
  if (history.state?.blogData) {
    blogData.value = { ...history.state.blogData };
    console.log("Blog data loaded from history:", blogData.value);
  } else {
    console.error("No blog data found in history state");
    showNotification('No blog data found. Please create a new blog post.', 'error');
    setTimeout(() => router.push('/blog-post-creator'), 2000);
  }
});
</script>

<style scoped>
.blog-preview-container {
  min-height: 100vh;
  contain: layout style paint;
}

.header-section {
  height: 30vh;
  min-height: 250px;
  position: relative;
  will-change: auto;
}

.header-content {
  padding: 2rem 0;
}

.blog-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
}

.blog-date {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
}

.author-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.author-avatar {
  border: 3px solid rgba(255, 255, 255, 0.8);
}

.author-name {
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin: 0;
}

.overlapping-card {
  margin-top: -15vh;
  z-index: 1;
  position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.blog-content {
  padding: 2rem;
}

.content-header {
  color: #112a46;
  margin-bottom: 1rem;
  font-weight: 600;
}

.content-paragraph {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.content-item {
  margin-bottom: 1.5rem;
}

.dynamic-header {
  color: #112a46;
  margin-bottom: 1rem;
  font-weight: 600;
}

.dynamic-paragraph {
  line-height: 1.6;
  color: #2c3e50;
}

.action-buttons {
  padding: 1rem 2rem;
  gap: 1rem;
}

/* Performance optimizations */
.v-img {
  will-change: auto;
}

.overlapping-card {
  contain: layout style paint;
}

/* Responsive design */
@media (max-width: 768px) {
  .header-section {
    height: 25vh;
    min-height: 200px;
  }
  
  .overlapping-card {
    margin: 1rem;
    margin-top: -10vh;
  }
  
  .blog-content {
    padding: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .author-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>