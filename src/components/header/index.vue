<script setup>
import logoUrl from "@/assets/logo.jpg";
import logoTitleUrl from "@/assets/logo-title.webp";
import userLoggedIn from '@/components/users/registration.vue';
</script>
<template>
  <v-app-bar class="px-16" color="#f4b754" scroll-behavior="hide" scroll-threshold="100">
    <img :src="logoUrl" class="app-bar-logo pl-3" alt="Company logo" />
    <img :src="logoTitleUrl" class="app-bar-logo pl-3" alt="Company logo" />
    <v-container class="d-flex justify-end align-center gap-4">
      <router-link to="/training" class="mx-2 text-white font-weight-bold"
        >Get Training
      </router-link>
      <router-link to="/" class="mx-2 text-white">Home</router-link>
      <router-link to="/team" class="mx-2 text-white">Team</router-link>
      <router-link to="/about" class="mx-2 text-white">About Us</router-link>
      <router-link to="/blog" class="mx-2 text-white">Blog</router-link>
      <router-link v-if="!userLoggedIn" to="/registration" class="mx-2 text-white">Log In</router-link>
      <router-link v-if="userLoggedIn" to="/registration" class="mx-2 text-white">Log Out</router-link>
      <router-link to="/dashboard" class="mx-2 text-white">Hello, User!</router-link>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.app-bar-logo {
  height: 58px;
  width: auto;
  max-width: 103px;
  display: block;
}

.router-link-active,
a {
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
