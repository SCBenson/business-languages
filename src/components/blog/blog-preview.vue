<template>
  <v-sheet class="header-section">
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
  <v-card class="overlapping-card" color="#f4b754">
    <h2>{{ blogData.initialHeader }}</h2>
    <p>
      {{ blogData.initialParagraph }}
    </p>
    <div v-for="(item, index) in blogData.contentItems" :key="index">
      <h2 v-if="item.type === 'header'">{{ item.content }}</h2>
      <p v-if="item.type === 'paragraph'">{{ item.content }}</p>
    </div>
    <v-btn @click="goBack">Edit Content</v-btn>
    <v-btn>Publish</v-btn>
  </v-card>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

const blogData = ref({ title: '',
  initialHeader: '',
  initialParagraph: '',
  initialImage: '',
  contentItems: []});

onMounted(() => {
// Get the blog data from router state
if (router.currentRoute.value.state && router.currentRoute.value.state.blogData) {
    blogData.value = router.currentRoute.value.state.blogData;
  }
});

const goBack = () => {
  router.back();
}

</script>

<style scoped>
.header-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/hero-background.png");
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
