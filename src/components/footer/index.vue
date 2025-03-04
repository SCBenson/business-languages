<template>
  <v-component class="footer-container px-8 text-center">
    <v-row>
      <v-col cols="12" class="pb-0 pt-6 text-custom-purple">
        <h2 class="font-weight-bold">Join our Community!</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pt-0"
        ><p class="text-white">
          Join our mailing list to receive the occasional emails about business
          languages and our community, including the latest news, sneak peeks
          and product discounts.
        </p></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-form class="d-flex">
          <v-text-field bg-color="#e5e5e5" label="you@example.com">
          </v-text-field>
          <v-btn class="mt-3 ml-2" color="purple">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <v-col cols="6">
        <v-row class="justify-center"
          ><h3 class="text-custom-purple mt-2">Company</h3>
          <v-list class="footer-list text-custom-white">
            <v-list-item
              v-for="item in data.menuItems"
              :key="item.title"
              :to="item.path"
              ><v-list-item-title>{{
                item.title
              }}</v-list-item-title></v-list-item
            >
          </v-list></v-row
        >
      </v-col>
      <v-col cols="6">
        <v-row class="justify-center"
          ><h3 class="text-custom-purple mt-2">Legal</h3>
          <v-list class="footer-list text-custom-white">
            <v-list-item>Data Protection</v-list-item>
            <v-list-item>Disclaimer</v-list-item>
          </v-list></v-row
        >
      </v-col>
    </v-row>
    <v-row class="d-flex align-center mb-0">
      <v-col cols="2"
        ><img :src="logoUrl" height="40" width="40" alt="Company Logo"
      /></v-col>
      <v-col cols="2">
        <p class="text-custom-white">©businesslanguages.de</p>
      </v-col>
    </v-row>
  </v-component>
</template>

<script setup>
import { data } from "@/assets/scripts/navDrawer.js";
import logoUrl from "@/assets/bl-anniversary-logo.png";
</script>

<style scoped>
.footer-container {
  min-height: 650px;
  background-color: #f4b754;
}

.footer-list {
  background-color: transparent;
}
hr {
  width: 100%; /* Width of the line */
  height: 2px; /* Thickness */
  background-color: purple; /* Color */
  border: none; /* Remove the default border */
  margin: 10px 0; /* Add space above and below */
}
</style>
