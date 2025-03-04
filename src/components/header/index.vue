<template>
  <v-app-bar
    height="56"
    class="px-16"
    color="#f4b754"
    scroll-behavior="hide"
    scroll-threshold="100"
    app
  >
    <template v-slot:prepend>
      <img :src="logoUrl" height="40" width="auto" alt="Company Logo" />

      <v-toolbar-title class="text-white font-weight-bold text-body-1">
        Business Languages
      </v-toolbar-title>
    </template>
    <v-spacer></v-spacer>

    <v-container class="d-none d-md-flex justify-end align-center gap-4">
      <router-link to="/training" class="mx-2 text-white font-weight-bold"
        >Get Training
      </router-link>
      <router-link to="/" class="mx-2 text-white">Home</router-link>
      <router-link to="/team" class="mx-2 text-white">Team</router-link>
      <router-link to="/about" class="mx-2 text-white">About Us</router-link>
      <router-link to="/blog" class="mx-2 text-white">Blog</router-link>

      <!-- <router-link to="/registration" class="mx-2 text-white"
        >Register</router-link
      > -->
      <router-link
        v-if="isAuth == null"
        to="/registration"
        class="mx-2 text-white"
        >Login</router-link
      >
      <router-link
        v-if="isAuth != null"
        to="/"
        @click="handleSignOut"
        class="mx-2 text-white"
        >Logout</router-link
      >
      <v-card
        v-if="isAuth != null"
        density="compact"
        prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
        subtitle="Member"
        :title="profileData.firstName"
        variant="text"
      >
      </v-card>
    </v-container>

    <template v-slot:append>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        variant="text"
        color="white"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary app>
    <v-list>
      <!-- For items WITHOUT sublinks -->
      <v-list-item
        v-for="item in data.menuItems.filter((item) => !item.sublinks)"
        :key="item.title"
        :to="item.path"
        :prepend-icon="item.icon"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <!-- For items WITH sublinks -->
      <v-list-group
        v-for="item in data.menuItems.filter((item) => item.sublinks)"
        :key="item.title"
        :value="item.title"
      >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="item.title"
            :prepend-icon="item.icon"
          ></v-list-item>
        </template>
        <!-- Render Sublinks -->
        <v-list-item
          v-for="sublink in item.sublinks"
          :key="sublink.title"
          :to="sublink.path"
          :title="sublink.title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-navigation-drawer v-model="drawer" location="right" temporary app>
    <v-list>
      <v-list-item
        v-for="item in data.menuItems"
        :key="item.title"
        :to="item.path"
        :prepend-icon="item.icon"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->
</template>

<style scoped>
.router-link-active,
a,
p {
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
a:hover,
p:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

<!-- Script for Desktop Version -->
<script setup>
import { useUserStore } from "@/composables/stores/userStore.js";
import { AUTH } from "@/firebase/config.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import logoUrl from "@/assets/bl-anniversary-logo.png";
import { data } from "@/assets/scripts/navDrawer.js";

const drawer = ref(false);
//check if the user is logged in...
const isAuth = ref(AUTH.currentUser);

const userStore = useUserStore();
// Create local reactive data
const profileData = ref({
  firstName: "",
  lastName: "",
  email: "",
  languages: "",
});

// Update local data when component mounts
onMounted(() => {
  if (userStore.userDetails) {
    console.log("userStore entered");
    profileData.value = {
      firstName: userStore.userDetails["first-name"] || "",
      lastName: userStore.userDetails["last-name"] || "",
      email: userStore.userDetails.email || "",
      languages: userStore.userDetails.languages || "",
    };
  }
});
const handleSignOut = () => {
  //sign out the user...
  signOut(AUTH);
};

onAuthStateChanged(AUTH, (user) => {
  console.log(user);
  isAuth.value = user;
});
</script>
