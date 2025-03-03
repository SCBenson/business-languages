<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-6">5 Tips to improve your online communication</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          v-for="(member, index) in data"
          :key="index"
          :color="member.color"
          class="mb-8"
        >
          <v-row class="text-center">
            <v-col cols="12"><img :src="member.img"></img></v-col>
            <v-col cols="12">
              <v-card-title>{{ member.type }}</v-card-title>
              <p>{{ member.description }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>
<script setup>
import { data } from "@/assets/scripts/onlinetrainingdata.js";
</script>
