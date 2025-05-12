<template>
  <v-sheet class="footer-container">
    <v-container class="footer-content px-8 text-center">
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
                <v-list-item to="/legal">{{
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
import { data } from "@/assets/scripts/navDrawer.js";
import logoUrl from "@/assets/bl-anniversary-logo.webp";
</script>

<style scoped>
.footer-container {
  min-height: 600px;
  background-color: #f4b754;
  width: 100%;
  position: relative;
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

/* Ensure container fills the v-sheet */
:deep(.v-sheet) {
  display: flex;
  flex-direction: column;
}

:deep(.v-container) {
  flex: 1;
}
</style>