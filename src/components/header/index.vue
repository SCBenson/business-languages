
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
      <router-link to="/registration" class="mx-2 text-white">Register</router-link>
      <router-link v-if="isAuth == null" to="/registration" class="mx-2 text-white">Login</router-link>
      <router-link v-if="isAuth != null" to="/" @click="handleSignOut" class="mx-2 text-white">Logout</router-link>
      <v-card v-if="isAuth != null"
        density="compact"
        prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
        subtitle="Member"
        title="Jennifer"
        variant="text"
      >
      </v-card>
      <!-- <router-link v-if="isAuth != null" to="/dashboard" class="mx-2 text-white">Hello, User!</router-link> -->
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import logoUrl from "@/assets/logo.jpg";
  import logoTitleUrl from "@/assets/logo-title.webp";
  import { AUTH } from '@/firebase/config.js';
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { ref } from 'vue';
//check if the user is logged in...
  const isAuth = ref(AUTH.currentUser);

  const handleSignOut = () => {
    //sign out the user...
    signOut(AUTH);
  }

  onAuthStateChanged(AUTH, (user) => {
    console.log(user);
    isAuth.value = user;
  })

</script>

<style scoped>
.app-bar-logo {
  height: 58px;
  width: auto;
  max-width: 103px;
  display: block;
}

.router-link-active,
a, p {
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
a:hover, p:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
