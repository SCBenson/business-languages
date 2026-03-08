<template>
  
  <v-container class="text-center px-8">
    <h1 class="text-custom-purple">{{ $t("about.title.title") }}</h1>
    <v-row justify="center" class="mt-4">
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/earth.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.global-team.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text">{{
            $t("about.global-team.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/brain.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.more-than-just-language.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text">{{
            $t("about.more-than-just-language.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/target.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.industry-specific-training.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.industry-specific-training.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/badge.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.specializing-in-business-english.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.specializing-in-business-english.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/support.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.support-for-newcomers.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.support-for-newcomers.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/translation.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.translation-services.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.translation-services.description") }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-4" color="purple">{{ $t("about.title.button") }}</v-btn>
  </v-container>
  <v-container class="text-center px-8 donal-container">
    
    <v-row>
      <v-col cols="12" md="2">
        <v-img src="@/assets/about/donal-about.webp" height="320" width="420"></v-img>
      </v-col>
      <v-col cols="12" md="10">
        <h2 class="text-left">{{ $t("about.trainer.title") }}</h2>
        <p class="text-left">{{ $t("about.trainer.description") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.responsive-title {
  font-size: 1.1rem;
}

.responsive-text {
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .responsive-title {
    font-size: 1.4rem;
  }
  
  .responsive-text {
    font-size: 1.1rem;
  }
}
</style>
<script setup></script>
