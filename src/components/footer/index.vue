<template>
  <v-sheet class="footer-container" :class="{ 'footer-hidden': !isVisible }">
    <v-container class="footer-content px-8 text-center position-relative">
      <!-- Social Media Icons -->
      <div class="footer-social-icons">
        <v-btn
          icon
          size="small"
          color="white"
          class="social-btn me-2"
          href="https://www.facebook.com/businesslanguageslanguagesaugsburg"
          target="_blank"
          elevation="2"
        >
          <v-icon color="#1877F2">mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          icon
          size="small"
          color="white"
          class="social-btn"
          href="https://www.instagram.com/businesslanguages/"
          target="_blank"
          elevation="2"
        >
          <v-icon color="#E4405F">mdi-instagram</v-icon>
        </v-btn>
      </div>

      <!-- Top navigation section -->
      <div class="footer-top">
        <v-row no-gutters density="compact" class="mx-1">
          <v-col cols="6">
            <div class="d-flex flex-column align-center">
              <h3 class="text-custom-purple mt-2">
                {{ $t("footer.footer-nav.title-company") }}
              </h3>
              <v-list class="footer-list text-black">
                <v-list-item
                  v-for="item in data.menuItems"
                  :key="item.title"
                  :to="item.path"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="d-flex flex-column align-center">
              <h3 class="text-custom-purple mt-2">
                {{ $t("footer.footer-nav.title-legal") }}
              </h3>
              <v-list class="footer-list text-black">
                <v-list-item to="/data-protection">{{
                  $t("footer.footer-nav.data-protection")
                }}</v-list-item>
                <v-list-item to="/disclaimer">{{ $t("footer.footer-nav.disclaimer") }}</v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </div>
      
      <!-- Bottom copyright section -->
      <div class="footer-bottom">
        <v-divider class="mb-4" color="purple" thickness="2"></v-divider>
        <v-row class="d-flex align-center">
          <v-col cols="2">
            <img :src="logoUrl" height="40" width="40" alt="Company Logo" />
          </v-col>
          <v-col cols="10" class="text-left">
            <p class="text-black mb-0">©businesslanguages.de</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { data } from "@/assets/scripts/navDrawer.js";
import logoUrl from "@/assets/bl-anniversary-logo.webp";

const isVisible = ref(false)

onMounted(() => {
  // Wait for the page to fully render before showing footer
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.footer-container {
  min-height: 600px;
  background-color: #f4b754;
  width: 100%;
  position: relative;
  transition: opacity 0.3s ease;
}

.footer-hidden {
  opacity: 0;
  visibility: hidden;
}

.footer-content {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
}

.footer-top {
  flex: 1;
}

.footer-bottom {
  width: 100%;
  padding-bottom: 16px;
  margin-top: auto;
}

.footer-list {
  background-color: transparent;
}

.footer-social-icons {
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 2;
}

.social-btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}

/* Ensure container fills the v-sheet */
:deep(.v-sheet) {
  display: flex;
  flex-direction: column;
}

:deep(.v-container) {
  flex: 1;
}

/* Mobile responsiveness */
@media (max-width: 599px) {
  .footer-social-icons {
    bottom: 16px;
    right: 16px;
  }
  
  .social-btn {
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
  }
}

/* Tablet and larger screens */
@media (min-width: 600px) {
  .social-btn {
    width: 40px !important;
    height: 40px !important;
    min-width: 40px !important;
  }
}
</style>