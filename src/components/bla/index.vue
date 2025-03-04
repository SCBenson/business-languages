<template>
  <v-sheet class="bg-custom-purple">
    <v-component>
      <v-row class="text-center">
        <v-col cols="12">
          <div
            class="d-flex align-center justify-center mx-6 mt-6 bg-custom-orange rounded-lg"
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
      <v-row>
        <v-col cols="6" class="d-flex align-center justify-center"
          ><h2>BLA Interactive</h2></v-col
        >
        <v-col cols="6" class="bg-custom-white d-flex align-center"
          ><p>
            Your key to sustainable business English Experience a new dimension
            of language learning with BLA Interactive - the revolutionary
            platform that will transform your English training.
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex align-center justify-center text-center"
          ><h2>Exclusive Benefits</h2></v-col
        >
        <v-col cols="6" class="bg-custom-white d-flex align-center"
          ><p>
            Developed exclusively for our existing customers, BLA Interactive
            offers a world of interactive learning opportunities, tailored to
            the needs of modern needs of modern business professionals. Immerse
            yourself in an environment that not only teaches, but inspires,
            motivates and aims for sustainable improvement
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex align-center justify-center text-center"
          ><h2>Beginner Friendly</h2></v-col
        >
        <v-col cols="6" class="bg-custom-white d-flex align-center"
          ><p>
            This platform is aimed at all employees of our existing customers
            who want to improve their business English effectively and
            sustainably from beginners to advanced learners
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex align-center justify-center text-center"
          ><h2>A unique experience</h2></v-col
        >
        <v-col cols="6" class="bg-custom-white d-flex align-center"
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

<style scoped>
.gradient-text {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 48px;
  background: linear-gradient(to right, #4b0042, #9c27b0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  display: inline-block;
}
</style>
