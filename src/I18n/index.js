import { createI18n } from "vue-i18n";

// Import your translation files
import en from "@/assets/en/en.json";
import de from "@/assets/de/de.json";

// Get initial locale from localStorage
const savedLocale = localStorage.getItem("user-locale") || "en";

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLocale, // Default language
  fallbackLocale: "en",
  messages: {
    en,
    de,
  },
});

export default i18n;
