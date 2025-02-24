<template>
  <v-sheet class="hero-section">
    <v-container class="text-center fill-height">
      <v-row>
        <v-col cols="12">
          <div class="language-container">
            <transition name="fade" mode="out-in">
              <h1
                :key="indexVal"
                class="text-h2 text-custom-orange font-weight-bold"
              >
                {{ languages[indexVal] }}.
              </h1>
            </transition>
          </div>
          <h1 class="mt-12 text-white font-weight-regular">
            This is our
            <span class="font-weight-bold text-custom-orange">specialty.</span>
          </h1>

          <h2 class="text-custom-orange font-weight-regular">
            We are the solution for your busy lifestyle.
          </h2>
          <v-btn
            color="#f4b754"
            size="large"
            rounded="xl"
            class="font-weight-bold mt-16 text-white"
            >Contact Us</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-container class="px-2 business-guiness">
    <v-row justify="center">
      <v-col cols="12" md="3">
        <div class="text-center bg-white rounded">
          <h2 class="font-weight-bold text-black mb-3">
            20th Year Anniversary Video!
          </h2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-responsive
          :aspect-ratio="$vuetify.display.mdAndUp ? '16/9' : '4/3'"
          class="video-container"
        >
          <iframe
            class="w-100 h-100"
            :src="'https://www.youtube.com/embed/adXj8sz4ozU?si=8SHRWN0HZz767e9u'"
            title="Youtube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="px-16">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card color="#f4b754" class="pa-6">
          <v-form align="center" class="custom-color">
            <h1 class="font-weight-bold">Leave us a message...</h1>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-text-field
                  bg-color="white"
                  label="First Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field bg-color="white" label="Last Name"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-text-field bg-color="white" label="E-Mail"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-textarea
                  bg-color="white"
                  label="Please write your message here...(max 500 characters)"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="px-16">
    <v-row justify="center">
      <v-col align="center" cols="12" md="8">
        <v-card color="#f4b754" class="pa-6">
          <v-row>
            <v-col>
              <v-card>
                <v-row>
                  <v-col>
                    <h1 class="custom-color">Opening Hours</h1>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col align="space-around">
                    <p>Visit Us:</p>
                    <p>example</p>
                  </v-col>
                </v-row>

                <v-row>
                  <p></p>
                </v-row>

                <v-row>
                  <p></p>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5299.62989237724!2d10.849799!3d48.38329100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebcdc0a913c13%3A0xc251e675dd293f06!2sDr.-D%C3%BCrrwanger-Stra%C3%9Fe%2015F%2C%2086156%20Augsburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1715632174435!5m2!1sen!2sus"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const indexVal = ref(0);
let intervalID;
const languages = [
  "Language",
  "Idioma",
  "Langue",
  "语言",
  "Язык",
  "لغة",
  "भाषा",
  "Língua",
  "言語",
  "Sprache",
  "언어",
  "Lingua",
  "Dil",
  "Ngôn ngữ",
  "Język",
  "Taal",
];

onMounted(() => {
  intervalID = setInterval(() => {
    indexVal.value = (indexVal.value + 1) % languages.length;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(intervalID);
});
</script>
<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/hero-background.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.language-container {
  min-height: 4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.custom-color {
  color: #112a46 !important;
}

.business-guiness {
  height: 100vh;
}

.video-container {
  min-height: 300px;
}
</style>
