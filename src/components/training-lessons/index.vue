<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-4">{{ $t("language-training.title.title") }}</h1>
        <v-btn class="mt-6 text-black" color="#f4b754">{{
          $t("language-training.title.button")
        }}</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-card
          v-for="(training, key) in trainingTypes"
          :key="key"
          :color="$t(`language-training.${key}.color`)"
          class="mb-8"
        >
          <v-row>
            <v-col cols="4"
              ><v-icon
                :icon="$t(`language-training.${key}.icon`)"
                size="100"
              ></v-icon
            ></v-col>
            <v-col cols="8">
              <v-card-title>{{
                $t(`language-training.${key}.title`)
              }}</v-card-title>
              <div class="mr-6">
                <p>{{ $t(`language-training.${key}.description`) }}</p>
                <h3>{{ $t("language-training.title.benefits") }}</h3>
                <p class="mb-4">
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
        <v-btn class="mb-6 text-black" color="#f4b754">{{
          $t("language-training.title.button")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-component>
</template>
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
