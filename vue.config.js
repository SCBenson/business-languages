import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/business-languages/" : "/",
  plugins: [vue()],
});
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/business-languages/" : "/",
//   plugins: [vue()],
// };
