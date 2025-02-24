<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
</script>
