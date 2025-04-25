<template>
  <v-app-bar
    height="56"
    class="px-8"
    color="#f4b754"
    scroll-behavior="hide"
    scroll-threshold="100"
    app
  >
    <template v-slot:prepend>
      <img :src="logoUrl" height="40" width="40" alt="Company Logo" />

      <v-toolbar-title
        class="nav-title text-black font-weight-bold text-body-1"
      >
        <router-link to="/" class="text-black">Business Languages</router-link>
      </v-toolbar-title>
    </template>

    <v-spacer></v-spacer>

    <v-container class="d-none d-md-flex justify-end align-center gap-4">
      <div class="text-center">
        <v-menu
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <router-link
              v-bind="props"
              to="/training-lessons"
              class="mx-2 text-black font-weight-bold"
            >
              Get Training
            </router-link>
          </template>

          <v-list bg-color="#f4b754">
            <v-list-item>
              <router-link to="/bla-interactive" class="mx-2 text-black">BLA Interactive</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/training-lessons" class="mx-2 text-black">Language Training</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/translations" class="mx-2 text-black">Translations</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/learning-trips" class="mx-2 text-black">Learning Trips</router-link>
            </v-list-item>
          </v-list>
         </v-menu>
      </div>
      <router-link to="/" class="mx-2 text-black">Home</router-link>

      <div class="text-center">
        <v-menu
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <router-link
              v-bind="props"
              to="/about"
              class="mx-2 text-black"
            >
              About Us
            </router-link>
          </template>

          <v-list bg-color="#f4b754">
            <v-list-item>
              <router-link to="/team" class="mx-2 text-black">Meet the Team</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/legal" class="mx-2 text-black">Legal</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/disclaimer" class="mx-2 text-black">Dislaimer</router-link>
            </v-list-item>
          </v-list>
         </v-menu>
      </div>

      <div class="text-center">
        <v-menu 
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <router-link
              v-bind="props"
              to="/blog"
              class="mx-2 text-black"
            >
              Blog
            </router-link>
          </template>

          <v-list bg-color="#f4b754" v-if="isAuth != null">
            <v-list-item>
              <router-link  to="/blog-post-creator" class="mx-2 text-black">Create a Blog</router-link>
            </v-list-item>
          </v-list>
         </v-menu>
      </div>
      <div class="text-center">
        <v-menu
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <router-link
              v-bind="props"
              to="/business-and-guiness"
              class="mx-2 text-black"
            >
              Media
            </router-link>
          </template>

          <v-list bg-color="#f4b754">
            <v-list-item>
              <router-link to="/business-and-guinness" class="mx-2 text-black">Business & Guiness</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/webseries" class="mx-2 text-black">Web Series</router-link>
            </v-list-item>
          </v-list>
         </v-menu>
      </div>

      
      <router-link
        v-if="isAuth == null"
        to="/admins"
        class="mx-2 text-black"
        >Admin</router-link
      >
      <router-link
        v-if="isAuth != null"
        to="/"
        @click="handleSignOut"
        class="mx-2 text-black"
        >Logout</router-link
      >
      <!-- <v-card
        v-if="isAuth != null"
        density="compact"
        prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
        subtitle="Member"
        :title="profileData.firstName"
        variant="text"
      >
      </v-card> -->
    </v-container>
  
    <template v-slot:append>
      <v-menu
        transition="scale-transition"
        v-model="languageMenu"
        location="bottom"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            class="language-selector ml-2"
            variant="text"
            color="black"
            rounded
            density="compact"
          >
            {{ getCurrentLanguageDisplay() }}
            <v-icon right>mdi-chevron-down</v-icon></v-btn
          > </template
        ><v-list>
          <v-list-item
            v-for="(lang, i) in availableLanguages"
            :key="i"
            :value="lang.code"
            @click="changeLanguage(lang.code)"
          >
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list></v-menu
      >

      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        variant="text"
        color="black"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" app temporary class="overflow-x-hidden">
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
      <v-list-item v-if="isAuth != null" to="/blog-post-creator">Create a blog post</v-list-item>
      <v-list-item v-if="isAuth == null" to="/admins">Admin</v-list-item>
      <v-list-item v-if="isAuth != null" to="/" @click="handleSignOut">Logout</v-list-item>
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



<!-- Script for Desktop Version -->
<script setup>
import { useUserStore } from "@/composables/stores/userStore.js";
import { AUTH } from "@/firebase/config.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import logoUrl from "@/assets/bl-anniversary-logo.webp";
import { data } from "@/assets/scripts/navDrawer.js";
import { useLanguage } from "@/composables/stores/useLanguage";


const {
  activeLanguage,
  availableLanguages,
  changeLanguage,
  getCurrentLanguageDisplay,
} = useLanguage();

const drawer = ref(false);
//check if the user is logged in...
const isAuth = ref(AUTH.currentUser);
const languageMenu = ref(false);
const userStore = useUserStore();

// Create local reactive data
const profileData = ref({
  firstName: "",
  lastName: "",
  email: "",
  availableLanguages: "",
});

// Update local data when component mounts
onMounted(() => {

  if (userStore.userDetails) {
    console.log("userStore entered");
    profileData.value = {
      firstName: userStore.userDetails["first-name"] || "",
      lastName: userStore.userDetails["last-name"] || "",
      email: userStore.userDetails.email || "",
      availableLanguages: userStore.userDetails.availableLanguages || "",
    };
  }
});
const handleSignOut = () => {
  //sign out the user...
  signOut(AUTH);
};

onAuthStateChanged(AUTH, (user) => {
  isAuth.value = user;
});






</script>

<style scoped>
.nav-title {
  font-family: Comfortaa;
}
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
.language-selector {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 12px;
}
.no-uppercase {
  text-transform: none !important;
}

</style>
