import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
});
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/business-languages/" : "/",
//   plugins: [vue()],
// };
