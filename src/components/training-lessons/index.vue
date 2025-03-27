<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-4 text-custom-purple">{{ $t("language-training.title.title") }}</h1>
        <v-btn class="mt-6 text-black responsive-text" color="#f4b754">{{
          $t("language-training.title.button")
        }}</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="pb-0">
        <v-card
          v-for="(training, key) in trainingTypes"
          :key="key"
          :color="$t(`language-training.${key}.color`)"
          :max-width="$vuetify.display.mdAndUp ? '1000px' : '100%'"
          class="mb-8 mx-auto"
        >
          <v-row>
            <v-col cols="4" class="d-flex justify-center align-center"
              ><v-icon
                :icon="$t(`language-training.${key}.icon`)"
                size="100"
              ></v-icon
            ></v-col>
            <v-col cols="8">
              <v-card-title class="responsive-title pl-0">{{
                $t(`language-training.${key}.title`)
              }}</v-card-title>
              <div class="mr-6">
                <p class="responsive-text">{{ $t(`language-training.${key}.description`) }}</p>
                <h3 class="responsive-title">{{ $t("language-training.title.benefits") }}</h3>
                <p class="mb-4 responsive-text">
                  {{ $t(`language-training.${key}.benefits`) }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="pt-0">
        <v-btn class="mb-6 text-black responsive-text" color="#f4b754">{{
          $t("language-training.title.button")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-component>
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
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const trainingTypes = computed(() => {
  const trainingKeys = [
    "single-training",
    "group-training",
    "modular-training",
    "workshops",
  ];
  const result = {};
  trainingKeys.forEach((key) => {
    if (t(`language-training.${key}`)) {
      result[key] = true;
    }
  });
  return result;
});
</script>
