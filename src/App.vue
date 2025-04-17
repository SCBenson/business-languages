<template>
  <v-app class="overflow-x-hidden">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-if="showFooter" />
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";

const showFooter = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFooter.value = true;
  }, 2000);
});

</script>






