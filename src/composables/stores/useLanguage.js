// src/composables/useLanguage.js
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// Create a shared state that persists between component instances
const activeLanguage = ref(localStorage.getItem("user-locale") || "en");

export function useLanguage() {
  const { locale } = useI18n();

  // Initialize i18n locale with our stored value when the composable is used
  if (locale.value !== activeLanguage.value) {
    locale.value = activeLanguage.value;
  }

  // Languages available for selection
  const languages = [
    { name: "English", code: "en" },
    { name: "Deutsch", code: "de" },
  ];

  // Function to change language
  function changeLanguage(lang) {
    activeLanguage.value = lang;
    locale.value = lang;
    localStorage.setItem("user-locale", lang);
  }

  // Get current language display name
  function getCurrentLanguageDisplay() {
    const current = languages.find(
      (lang) => lang.code === activeLanguage.value
    );
    return current ? current.name : "English";
  }

  return {
    activeLanguage, // reactive ref that can be watched in any component
    languages, // available languages
    changeLanguage, // function to change language
    getCurrentLanguageDisplay, // get display name of current language
  };
}
