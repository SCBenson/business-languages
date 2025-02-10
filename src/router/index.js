import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/Home.vue";
import Team from "@/components/team/index.vue";
import About from "@/components/about/index.vue";
import Training from "@/components/training/index.vue";
import Blog from "@/components/blog/index.vue";
import Register from "@/components/users/registration.vue";

import Dashboard from "@/components/dashboard/dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/team", component: Team },
    { path: "/about", component: About },
    { path: "/training", component: Training },
    { path: "/blog", component: Blog },
    { path: "/registration", component: Register },
    { path: "/dashboard", component: Dashboard },
  ],
});

export default router;
