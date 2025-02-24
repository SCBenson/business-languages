/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    background: "#e5e5e5",
    primary: "#FFFFFF",
    "custom-orange": "#f4b754",
    "custom-purple": "#4B0082",
    "custom-white": "#e5e5e5",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
});
