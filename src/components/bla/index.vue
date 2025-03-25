<template>
  <v-container class="text-center px-8">
    <h1 class="text-custom-purple">About Us</h1>
    <v-row>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >BLA Interactive</v-card-title
          >
          <v-card-text class="text-white"
            >Your key to sustainable business English Experience a new dimension
            of language learning with BLA Interactive - the revolutionary
            platform that will transform your English training.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >Exclusive Benefits</v-card-title
          >
          <v-card-text class="text-white"
            >Developed exclusively for our existing customers, BLA Interactive
            offers a world of interactive learning opportunities, tailored to
            the needs of modern needs of modern business professionals. Immerse
            yourself in an environment that not only teaches, but inspires,
            motivates and aims for sustainable improvement</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >Beginner Friendly</v-card-title
          >
          <v-card-text class="text-white"
            >This platform is aimed at all employees of our existing customers
            who want to improve their business English effectively and
            sustainably from beginners to advanced learners
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >Exclusive Benefits</v-card-title
          >
          <v-card-text class="text-white"
            ><v-list class="bg-transparent">
              <v-list-item prepend-icon="mdi-star"
                >Extensive video library</v-list-item
              >
              <v-list-item prepend-icon="mdi-star">Accessibility</v-list-item>
              <v-list-item prepend-icon="mdi-star"
                >Regular updates and new content</v-list-item
              >
              <v-list-item prepend-icon="mdi-star"
                >Flexible learning paths</v-list-item
              >
              <v-list-item prepend-icon="mdi-star"
                >Interactive training modules</v-list-item
              >
              <v-list-item prepend-icon="mdi-star">TechTalks</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >Support for Newcomers</v-card-title
          >
          <v-card-text class="text-white"
            >We have been very sucessful in training new arrivals to companies
            in the German language. We will support you in learning both the
            German language and business culture.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-card-title class="text-custom-purple"
            >Translation Services</v-card-title
          >
          <v-card-text class="text-white"
            >We provide translation services, as well as certified translations
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-4" color="purple">Book Now</v-btn>
  </v-container>
  <!-- OLD BLA FORMAT -->
  <v-sheet class="bg-custom-purple pb-3">
    <v-component class="px-8">
      <v-row justify="center">
        <v-col cols="12" md="4" class="text-center">
          <div
            class="d-flex align-center justify-center mx-6 mt-6 bg-custom-white rounded-lg"
          >
            <h1 class="gradient-text">BLA Interactive</h1>
            <img
              src="@/assets/bl-anniversary-logo.png"
              height="80 "
              width="80"
            />
          </div>
        </v-col>
      </v-row>
      <v-row
        v-for="(item, index) in contentItems"
        :key="index"
        class="text-center"
      >
        <v-col cols="6" class="d-flex align-center justify-center"
          ><v-card color="#f4b754" class="pa-1"
            ><h2 class="text-white">{{ item.title }}</h2></v-card
          ></v-col
        >
        <v-col cols="6" class="bg-custom-white d-flex align-center"
          ><p>{{ item.content }}</p></v-col
        >
      </v-row>
      <v-row class="text-center">
        <v-col cols="6" class="d-flex align-center justify-center text-center"
          ><v-card color="#f4b754" class="pa-1"
            ><h2 class="text-white">A unique experience</h2></v-card
          ></v-col
        >
        <v-col
          cols="6"
          class="bg-custom-white justify-center d-flex align-center"
          ><v-list class="bg-transparent">
            <v-list-item prepend-icon="mdi-star"
              >Extensive video library</v-list-item
            >
            <v-list-item prepend-icon="mdi-star">Accessibility</v-list-item>
            <v-list-item prepend-icon="mdi-star"
              >Regular updates and new content</v-list-item
            >
            <v-list-item prepend-icon="mdi-star"
              >Flexible learning paths</v-list-item
            >
            <v-list-item prepend-icon="mdi-star"
              >Interactive training modules</v-list-item
            >
            <v-list-item prepend-icon="mdi-star">TechTalks</v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-component>
  </v-sheet>
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
