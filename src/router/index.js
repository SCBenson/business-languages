import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/Home.vue";
import Team from "@/components/team/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/team", component: Team },
  ],
});

export default router;
