<template>
  <v-sheet class="header-section" :style="coverImageStyle">
    <v-container class="">
      <v-row class="align-start">
        <v-col class="">
          <div class="">
            <h1 class="text-start text-white">{{ blogData.title }}</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-card class="overlapping-card mx-6" color="#f4b754">
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
    <v-btn @click="goBack">Edit Content</v-btn>
    <v-btn>Publish</v-btn>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";

const router = useRouter();

const blogData = ref({
  title: "",
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
