<template>
  <v-container theme="mainTheme">
    <v-row>
      <v-col>
        <h1>Blog Posts</h1>
        <v-card
          color="#f4b754"
          v-for="(member, index) in data"
          :key="index"
          class="mb-4"
        >
          <v-row>
            <v-col
              ><v-card-text class="pb-0">{{ member.date }}</v-card-text></v-col
            >
          </v-row>
          <v-row
            ><v-col
              ><v-card-title class="pb-0 pt-0">{{
                member.title
              }}</v-card-title></v-col
            ></v-row
          >
          <v-row>
            <v-col>
              <!-- Shortening the description to a max character limit. -->
              <v-card-text
                class="pt-0 custom-text-color"
                v-if="member.description.length > 500"
              >
                {{ member.description.slice(0, 500) + "..." }}
              </v-card-text>
              <v-card-text class="pt-0 custom-text-color" v-else>{{
                member.description
              }}</v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-btn class="ml-4 mb-4" color="purple">Explore ➝</v-btn></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { data } from "@/assets/scripts/blogdata.js";
</script>

<style scoped>
.custom-text-color {
  color: #151619 !important;
}
</style>
