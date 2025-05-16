<template>
  <v-app id="app">
    <Header />
    <v-main class="main-content">
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>

import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";


</script>

<style>

.main-content{
  position: relative;
  min-height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Global transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>





