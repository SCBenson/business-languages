<template>
  <v-component>
    <v-row>
      <v-col class="text-center mt-4 pb-0">
        <h1>Web Series</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          v-for="(member, index) in data"
          :key="index"
          color="#f4b754"
          class="mx-8 pb-8"
        >
          <v-row>
            <v-col class="text-center">
              <v-card-title>{{ member.title }}</v-card-title>
              <v-responsive
                :aspect-ratio="$vuetify.display.mdAndUp ? '16/9' : '4/3'"
                class="video-container"
              >
                <iframe
                  class="h-100"
                  :src="member.vidUrl"
                  title="Youtube Video Player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-responsive>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>

<script setup>
import { data } from "@/assets/scripts/webseriesdata.js";
</script>
