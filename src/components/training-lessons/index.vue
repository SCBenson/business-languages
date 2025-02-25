<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <v-btn class="mt-6 text-white" color="#f4b754"
          >Book an Appointment</v-btn
        >
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
          <v-row>
            <v-col cols="4"
              ><v-icon :icon="member.icon" size="100"></v-icon
            ></v-col>
            <v-col cols="8">
              <v-card-title>{{ member.type }}</v-card-title>
              <p>{{ member.description }}</p>
              <h3>Benefits</h3>
              <p>{{ member.benefits }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>
<script setup>
import { data } from "@/assets/scripts/trainingdata.js";
</script>
