import { createRouter, createWebHistory } from "vue-router/auto";

// import Dashboard from "@/components/dashboard/dashboard.vue";
//firebase
// import { AUTH } from "@/firebase/config.js";
//checks if the user is logged in, if not then redirect to registration page.
// const isAuth = (to, from, next) => {
//   let user = AUTH.currentUser;
//   if (!user) {
//     next({ path: "/registration" });
//     return;
//   }
//   next();
//   return;
// };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("@/components/Home.vue") },
    { path: "/team", component: () => import("@/components/team/index.vue") },
    { path: "/about", component: () => import("@/components/about/index.vue") },
    {
      path: "/training-lessons",
      component: () => import("@/components/training-lessons/index.vue"),
    },
    {
      path: "/online-trainings",
      component: () => import("@/components/online-training/index.vue"),
    },
    {
      path: "/translations",
      component: () => import("@/components/translations/index.vue"),
    },
    {
      path: "/bla-interactive",
      component: () => import("@/components/bla/index.vue"),
    },
    {
      path: "/business-and-guinness",
      component: () => import("@/components/business-and-guinness/index.vue"),
    },
    { path: "/blog", component: () => import("@/components/blog/index.vue") },
    {
      path: "/blog-post-creator",
      component: () => import("@/components/blog/blog-post-creator.vue"),
    },
    {
      path: "/blog/preview",
      name: "blog-preview",
      component: () => import("@/components/blog/blog-preview.vue"),
      props: true,
    },
    {
      path: "/blog/:slug",
      name: "blogPost",
      component: () => import("@/components/blog/blog-template.vue"),
      props: true,
    },
    {
      path: "/webseries",
      component: () => import("@/components/webseries/index.vue"),
    },
    {
      path: "/learning-trips",
      component: () => import("@/components/learning-trips/index.vue"),
    },
    {
      path: "/online-tips",
      component: () => import("@/components/online-tips/index.vue"),
    },
    {
      path: "/disclaimer",
      component: () => import("@/components/disclaimer/index.vue"),
    },
    {
      path: "/data-protection",
      component: () => import("@/components/data-protection/index.vue"),
    },
    {
      path: "/team/Donal",
      component: () => import("@/components/team/team-profiles/donal.vue"),
    },
    {
      path: "/team/Matthew",
      component: () => import("@/components/team/team-profiles/matthew.vue"),
    },
    {
      path: "/team/Divya",
      component: () => import("@/components/team/team-profiles/divya.vue"),
    },
    {
      path: "/team/Aggie",
      component: () => import("@/components/team/team-profiles/aggie.vue"),
    },
    {
      path: "/team/Silvia",
      component: () => import("@/components/team/team-profiles/silvia.vue"),
    },
    {
      path: "/team/Alex",
      component: () => import("@/components/team/team-profiles/alex.vue"),
    },
    {
      path: "/team/Sara",
      component: () => import("@/components/team/team-profiles/sara.vue"),
    },
    {
      path: "/team/Liam",
      component: () => import("@/components/team/team-profiles/liam.vue"),
    },
    {
      path: "/team/Elisabeth",
      component: () => import("@/components/team/team-profiles/elisabeth.vue"),
    },
    {
      path: "/team/Julia",
      component: () => import("@/components/team/team-profiles/julia.vue"),
    },
    {
      path: "/team/Jeff",
      component: () => import("@/components/team/team-profiles/jeff.vue"),
    },
    {
      path: "/team/Betina",
      component: () => import("@/components/team/team-profiles/betina.vue"),
    },
    {
      path: "/team/Dr. Noemi",
      component: () => import("@/components/team/team-profiles/noemi.vue"),
    },
    {
      path: "/team/Ulrike",
      component: () => import("@/components/team/team-profiles/ulrike.vue"),
    },
    {
      path: "/team/Jaqueline",
      component: () => import("@/components/team/team-profiles/jaqueline.vue"),
    },
    {
      path: "/admins",
      component: () => import("@/components/users/admins.vue"),
    },
    // { path: "/dashboard", component: Dashboard, beforeEnter: isAuth },
  ],
});

export default router;
