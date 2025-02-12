/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import router from "@/router/index.js";
import { createPinia } from "pinia";
import { AUTH } from "@/firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";
import Header from "@/components/header/index.vue";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

let pinia;
let app;

onAuthStateChanged(AUTH, () => {
  if (!app) {
    app = createApp(App);
    pinia = createPinia();
    app.component("app-header", Header);
    app.use(router);
    app.use(pinia);
    registerPlugins(app);
    app.mount("#app");
  }
});
