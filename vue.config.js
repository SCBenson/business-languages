module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};

export default defineConfig({
  base: "/business-languages/",
  plugins: [vue()],
});
