<template>
  <v-sheet class="hero-section">
    <v-container fluid class="pa-0 text-center fill-height">
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
            {{$t('home.hero.title-section1')}}
            <span class="font-weight-bold text-custom-orange">{{$t('home.hero.title-section2')}}</span>
          </h1>

          <h2 class="text-custom-orange font-weight-regular">
            {{$t('home.hero.sub-title')}}
            <!-- We are the solution for your busy lifestyle. -->
          </h2>
          <v-btn
            color="#f4b754"
            size="large"
            rounded="xl"
            class="font-weight-bold mt-16 text-white"
            >{{$t('home.hero.button')}}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <v-sheet class="bg-custom-white">
  <v-container class="px-8 business-guiness">
    <v-card color="#f4b754" rounded="lg">    <v-row class="text-center">
      <v-col> <img :src="bgLogoUrl" height="150"> </img> </v-col>
    </v-row></v-card>

    <v-row justify="center">
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
  </v-sheet>
  <v-container class="px-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card color="#f4b754" class="pa-6">
          <v-form align="center" class="custom-color">
            <h1 class="font-weight-bold">{{ $t('home.contact-form.title') }}</h1>
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-text-field
                  bg-color="white"
                  :label="$t('home.contact-form.first-name')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field bg-color="white" :label="$t('home.contact-form.last-name')"></v-text-field>
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
                  :label="$t('home.contact-form.description')"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="px-8">
    <v-row justify="center">
      <v-col align="center" cols="12">
        <v-card color="#f4b754" >
          <v-row>
            <v-col>
              <v-card class="ma-6">
                <v-row>
                  <v-col>
                    <h1 class="custom-color">{{ $t('home.contact-info.opening-hours') }}</h1>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col align="space-around">
                    <p>{{ $t('home.contact-info.visit-us') }}</p>
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
              <v-row>
                <v-col>
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5299.62989237724!2d10.849799!3d48.38329100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebcdc0a913c13%3A0xc251e675dd293f06!2sDr.-D%C3%BCrrwanger-Stra%C3%9Fe%2015F%2C%2086156%20Augsburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1715632174435!5m2!1sen!2sus"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgLogoUrl from "@/assets/business-and-guiness-logo.jpg";



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
  height: 70vh;
  width: 100% !important;
}

.video-container {
  min-height: 300px;
}

/* Add additional bubbles */
.business-guiness.bubble-container .v-row:last-child::after {
  width: 75px;
  height: 75px;
  left: 15%;
  bottom: -20px;
  animation: float-1 5.5s linear infinite;
  animation-delay: 0.7s;
}

.business-guiness.bubble-container .video-container::before {
  width: 55px;
  height: 55px;
  left: 35%;
  bottom: -20px;
  animation: float-3 6.5s linear infinite;
  animation-delay: 1.2s;
}

.business-guiness.bubble-container .video-container::after {
  width: 95px;
  height: 95px;
  left: 75%;
  bottom: -20px;
  animation: float-2 7.5s linear infinite;
  animation-delay: 0.2s;
}

.business-guiness.bubble-container .v-responsive::before {
  width: 70px;
  height: 70px;
  left: 50%;
  bottom: -20px;
  animation: float-5 5.8s linear infinite;
  animation-delay: 2.5s;
}

.business-guiness.bubble-container .v-responsive::after {
  width: 60px;
  height: 60px;
  left: 90%;
  bottom: -20px;
  animation: float-4 6.8s linear infinite;
  animation-delay: 3.2s;
}/* Container styling for bubbles inside Vuetify component */
.business-guiness.bubble-container {
  position: relative;
  background: #f4b754;
  overflow: hidden;
}

/* Create more bubbles using additional pseudo-elements */
.business-guiness.bubble-container::before,
.business-guiness.bubble-container::after,
.business-guiness.bubble-container .v-row:first-child::before,
.business-guiness.bubble-container .v-row:first-child::after,
.business-guiness.bubble-container .v-row:last-child::before,
.business-guiness.bubble-container .v-row:last-child::after,
.business-guiness.bubble-container .video-container::before,
.business-guiness.bubble-container .video-container::after,
.business-guiness.bubble-container .v-responsive::before,
.business-guiness.bubble-container .v-responsive::after {
  content: "";
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(128, 0, 128, 0.6);
}

/* Ensure content stays above bubbles */
.business-guiness.bubble-container > .v-row {
  position: relative;
  z-index: 2;
}

/* Custom styling for the video container */
.business-guiness .video-container {
  position: relative;
  z-index: 2;
  backdrop-filter: blur(0px);
}

/* Individual bubble styling with unique animations */
.business-guiness.bubble-container::before {
  width: 75px;
  height: 75px;
  left: 10%;
  bottom: -20px;
  animation: float-1 5s linear infinite;
}

.business-guiness.bubble-container::after {
  width: 55px;
  height: 55px;
  left: 25%;
  bottom: -20px;
  animation: float-2 7s linear infinite;
  animation-delay: 1s;
}

.business-guiness.bubble-container .v-row:first-child::before {
  width: 12px;
  height: 12px;
  left: 40%;
  bottom: -20px;
  animation: float-3 6s linear infinite;
  animation-delay: 0.5s;
}

.business-guiness.bubble-container .v-row:first-child::after {
  width: 95px;
  height: 95px;
  left: 60%;
  bottom: -20px;
  animation: float-4 8s linear infinite;
  animation-delay: 1.5s;
}

.business-guiness.bubble-container .v-row:last-child::before {
  width: 70px;
  height: 70px;
  left: 80%;
  bottom: -20px;
  animation: float-5 6s linear infinite;
  animation-delay: 2s;
}

/* Individual keyframes for each bubble */
@keyframes float-1 {
  0% {
    transform: translateY(105vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
    transform: translateY(90vh) translateX(10px);
  }
  30% {
    transform: translateY(70vh) translateX(-5px);
  }
  50% {
    transform: translateY(50vh) translateX(15px);
  }
  70% {
    transform: translateY(30vh) translateX(-10px);
  }
  90% {
    opacity: 0.5;
    transform: translateY(10vh) translateX(5px);
  }
  100% {
    transform: translateY(-10px) translateX(0);
    opacity: 0;
  }
}

@keyframes float-2 {
  0% {
    transform: translateY(105vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 0.6;
    transform: translateY(85vh) translateX(-10px) rotate(45deg);
  }
  35% {
    transform: translateY(65vh) translateX(15px) rotate(90deg);
  }
  55% {
    transform: translateY(45vh) translateX(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(25vh) translateX(10px) rotate(270deg);
  }
  95% {
    opacity: 0.4;
    transform: translateY(5vh) translateX(-15px) rotate(330deg);
  }
  100% {
    transform: translateY(-10px) translateX(0) rotate(360deg);
    opacity: 0;
  }
}

@keyframes float-3 {
  0% {
    transform: translateY(105vh) translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
    transform: translateY(80vh) translateX(15px);
  }
  40% {
    transform: translateY(60vh) translateX(-10px);
  }
  60% {
    transform: translateY(40vh) translateX(5px);
  }
  80% {
    transform: translateY(20vh) translateX(-15px);
  }
  95% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-10px) translateX(0);
    opacity: 0;
  }
}

@keyframes float-4 {
  0% {
    transform: translateY(105vh) translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  15% {
    opacity: 0.7;
    transform: translateY(85vh) translateX(-15px) rotate(90deg) scale(1.1);
  }
  35% {
    transform: translateY(65vh) translateX(10px) rotate(180deg) scale(0.9);
  }
  55% {
    transform: translateY(45vh) translateX(-5px) rotate(270deg) scale(1.1);
  }
  75% {
    transform: translateY(25vh) translateX(15px) rotate(320deg) scale(0.9);
  }
  95% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-10px) translateX(0) rotate(360deg) scale(1);
    opacity: 0;
  }
}

@keyframes float-5 {
  0% {
    transform: translateY(105vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: translateY(90vh) translateX(-5px);
  }
  30% {
    transform: translateY(70vh) translateX(10px);
  }
  50% {
    transform: translateY(50vh) translateX(-15px);
  }
  70% {
    transform: translateY(30vh) translateX(5px);
  }
  90% {
    opacity: 0.4;
    transform: translateY(10vh) translateX(-10px);
  }
  100% {
    transform: translateY(-10px) translateX(0);
    opacity: 0;
  }
}

</style>
