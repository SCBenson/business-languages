<template>
  <v-container class="text-center px-8">
    <h1 class="text-custom-purple">
      {{ $t("bla-interactive.bla-interactive.title") }}
    </h1>
    <v-row>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("bla-interactive.bla-interactive.title")
          }}</v-card-title>
          <v-card-text class="text-black">{{
            $t("bla-interactive.bla-interactive.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("bla-interactive.exclusive-benefits.title")
          }}</v-card-title>
          <v-card-text class="text-black">{{
            $t("bla-interactive.exclusive-benefits.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("bla-interactive.beginner-friendly.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            >{{ $t("bla-interactive.beginner-friendly.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple">{{
            $t("bla-interactive.a-unique-experience.title")
          }}</v-card-title>
          <v-card-text class="text-black"
            ><v-list class="bg-transparent">
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet1")
              }}</v-list-item>
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet2")
              }}</v-list-item>
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet3")
              }}</v-list-item>
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet4")
              }}</v-list-item>
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet5")
              }}</v-list-item>
              <v-list-item prepend-icon="mdi-star">{{
                $t("bla-interactive.a-unique-experience.bullet6")
              }}</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-4" color="purple">{{
      $t("bla-interactive.bla-interactive.button")
    }}</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contentItems: [
        {
          title: "BLA Interactive",
          type: "text",
          content:
            "Your key to sustainable business English Experience a new dimension of language learning with BLA Interactive - the revolutionary platform that will transform your English training.",
        },
        {
          title: "Exclusive Benefits",
          type: "text",
          content:
            "Developed exclusively for our existing customers, BLA Interactive offers a world of interactive learning opportunities, tailored to the needs of modern needs of modern business professionals. Immerse yourself in an environment that not only teaches, but inspires, motivates and aims for sustainable improvement",
        },
        {
          title: "Beginner Friendly",
          type: "text",
          content:
            "This platform is aimed at all employees of our existing customers who want to improve their business English effectively and sustainably from beginners to advanced learners",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient-text {
  font-weight: bold;
  font-size: 48px;
  background: linear-gradient(to right, #4b0042, #9c27b0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>
