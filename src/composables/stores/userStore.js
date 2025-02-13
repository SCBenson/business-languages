// stores/userStore.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userDetails: null,
  }),
  actions: {
    setUserDetails(details) {
      this.userDetails = details;
    },
    clearUserDetails() {
      this.userDetails = null;
    },
  },
});
