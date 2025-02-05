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
    background: "#E09DEC",
    "custom-gold": "#f4b754",
  },
};

const secondaryTheme = {
  dark: false,
  colors: {
    background: "#f4b754",
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
