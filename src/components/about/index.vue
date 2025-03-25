<template>
  <v-container class="text-center px-8">
    <h1 class="text-custom-purple">{{ $t("about.title.title") }}</h1>
    <v-row>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.global-team.title")
          }}</v-card-title>
          <v-card-text class="text-black">{{
            $t("about.global-team.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.more-than-just-language.title")
          }}</v-card-title>
          <v-card-text class="text-black">{{
            $t("about.more-than-just-language.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.industry-specific-training.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            >{{ $t("about.industry-specific-training.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.specializing-in-business-english.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            >{{ $t("about.specializing-in-business-english.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.support-for-newcomers.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            >{{ $t("about.support-for-newcomers.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("about.translation-services.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            >{{ $t("about.translation-services.description") }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-4" color="purple">{{ $t("about.title.button") }}</v-btn>
  </v-container>
</template>

<script setup></script>
