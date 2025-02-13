import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/Home.vue";
import Team from "@/components/team/index.vue";
import About from "@/components/about/index.vue";
import Training from "@/components/training/index.vue";
import Blog from "@/components/blog/index.vue";
import Register from "@/components/users/registration.vue";

import Dashboard from "@/components/dashboard/dashboard.vue";
//firebase
import { AUTH } from "@/firebase/config.js";
//checks if the user is logged in, if not then redirect to registration page.
const isAuth = (to, from, next) => {
  let user = AUTH.currentUser;
  if (!user) {
    next({ path: "/registration" });
    return;
  }
  next();
  return;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/team", component: Team },
    { path: "/about", component: About },
    { path: "/training", component: Training },
    { path: "/blog", component: Blog },
    { path: "/registration", component: Register },
    { path: "/dashboard", component: Dashboard, beforeEnter: isAuth },
  ],
});

export default router;
