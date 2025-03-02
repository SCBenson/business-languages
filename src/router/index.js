import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/Home.vue";
import Team from "@/components/team/index.vue";
import About from "@/components/about/index.vue";
import Training from "@/components/training-lessons/index.vue";
import Blog from "@/components/blog/index.vue";
import Webseries from "@/components/webseries/index.vue";

import Donal from "@/components/team/team-profiles/donal.vue";
import Matthew from "@/components/team/team-profiles/matthew.vue";
import Kelsey from "@/components/team/team-profiles/kelsey.vue";
import Silvia from "@/components/team/team-profiles/silvia.vue";
import Alex from "@/components/team/team-profiles/alex.vue";
import Irene from "@/components/team/team-profiles/irene.vue";
import Aggie from "@/components/team/team-profiles/aggie.vue";
import Elisabeth from "@/components/team/team-profiles/elisabeth.vue";
import Liam from "@/components/team/team-profiles/liam.vue";
import Divya from "@/components/team/team-profiles/divya.vue";
import Sara from "@/components/team/team-profiles/sara.vue";
// import Register from "@/components/users/registration.vue";

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
    { path: "/", component: Home },
    { path: "/team", component: Team },
    { path: "/about", component: About },
    { path: "/training-lessons", component: Training },
    { path: "/blog", component: Blog },
    { path: "/webseries", component: Webseries },
    { path: "/team/Donal", component: Donal },
    { path: "/team/Matthew", component: Matthew },
    { path: "/team/Kelsey", component: Kelsey },
    { path: "/team/Divya", component: Divya },
    { path: "/team/Aggie", component: Aggie },
    { path: "/team/Silvia", component: Silvia },
    { path: "/team/Alex", component: Alex },
    { path: "/team/Irene", component: Irene },
    { path: "/team/Sara", component: Sara },
    { path: "/team/Liam", component: Liam },
    { path: "/team/Elisabeth", component: Elisabeth },
    // { path: "/registration", component: Register },
    // { path: "/dashboard", component: Dashboard, beforeEnter: isAuth },
  ],
});

export default router;
