export const data = {
  menuItems: [
    { title: "Home", path: "/", icon: "mdi-home" },
    { title: "Team", path: "/team", icon: "mdi-account-group" },
    { title: "About", path: "/about", icon: "mdi-information" },
    { title: "Blog", path: "/blog", icon: "mdi-post" },
    {
      title: "Lessons",
      path: "/training-lessons",
      icon: "mdi-pencil",
      sublinks: [
        { title: "Language Trainings", path: "/training-lessons" },
        { title: "BLA Interactive", path: "/bla-interactive" },
        { title: "Translations", path: "/translations" },
        { title: "Learning Trips", path: "/learning-trips" },
      ],
    },

    {
      title: "Media",
      path: "/business-and-guinness",
      icon: "mdi-microphone",
      sublinks: [
        { title: "Business and Guinness", path: "/business-and-guinness" },
        { title: "Webseries", path: "/webseries" },
      ],
    },
    {
      title: "Legal",
      path: "/legal",
      icon: "",
      sublinks: [
        { title: "Disclaimer", path: "/disclaimer" },
        { title: "Data Protection", path: "/data-protection" },
      ],
    },
  ],
};
