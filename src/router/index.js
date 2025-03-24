import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/Home.vue";
import Team from "@/components/team/index.vue";
import About from "@/components/about/index.vue";
import Training from "@/components/training-lessons/index.vue";
import BLA from "@/components/bla/index.vue";
import BusinessAndGuinness from "@/components/business-and-guinness/index.vue";
import OnlineTraining from "@/components/online-training/index.vue";
import Translations from "@/components/translations/index.vue";
import Blog from "@/components/blog/index.vue";
import BlogPostCreator from "@/components/blog/blog-post-creator.vue";
import BlogPreview from "@/components/blog/blog-preview.vue";
import Webseries from "@/components/webseries/index.vue";
import LearningTrips from "@/components/learning-trips/index.vue";
import OnlineTips from "@/components/online-tips/index.vue";
import Disclaimer from "@/components/disclaimer/index.vue";
import DataProtection from "@/components/data-protection/index.vue";
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
import AdministratorLogin from "@/components/users/admins.vue";
import BlogPost from "@/components/blog/blog-template.vue";

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
    { path: "/online-trainings", component: OnlineTraining },
    { path: "/translations", component: Translations },
    { path: "/bla-interactive", component: BLA },
    { path: "/business-and-guinness", component: BusinessAndGuinness },
    { path: "/blog", component: Blog },
    { path: "/blog-post-creator", component: BlogPostCreator },
    {
      path: "/blog/preview",
      name: "blog-preview",
      component: BlogPreview,
      props: true,
    },
    { path: "/blog/:slug", name: "blogPost", component: BlogPost, props: true },
    { path: "/webseries", component: Webseries },
    { path: "/learning-trips", component: LearningTrips },
    { path: "/online-tips", component: OnlineTips },
    { path: "/disclaimer", component: Disclaimer },
    { path: "/data-protection", component: DataProtection },
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
    { path: "/admins", component: AdministratorLogin },
    // { path: "/dashboard", component: Dashboard, beforeEnter: isAuth },
  ],
});

export default router;
