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
            @click="scrollToContact"
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
  <v-sheet class="mx-0 bg-custom-white">
    <v-container class="business-guiness d-flex align-center justify-center">
      <v-row class="mx-4 mx-sm-6 mx-md-12" dense style="max-width: 1200px;">
        <v-col cols="4"><v-card class="home-card">hadhad</v-card></v-col>
        <v-col cols="4"><v-card class="home-card">hadhad</v-card></v-col>
        <v-col cols="4"><v-card class="home-card">hadhad</v-card></v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <div ref="contactSection">
    <v-container class="px-8 mt-12">
      <v-row justify="center">
        <v-col cols="12" md="6" lg="6">
          <v-card color="#f4b754" class="pa-6 mt-8">
            <v-form align="center" class="custom-color">
              <h1 class="font-weight-bold mb-2">{{ $t('home.contact-form.title') }}</h1>
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
              <v-row><v-col><v-btn color="purple">{{$t('home.contact-form.button')}}</v-btn></v-col></v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-container class="px-8 contact-info-container">
    <v-row justify="center">
      <v-col align="center" cols="12" md="6" lg="6">
        <v-card color="#f4b754">
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <v-card class="ma-4">
                <v-row>
                  <v-col>
                    <h1 class="custom-color">{{ $t('home.contact-info.title') }}</h1>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6"><v-icon>mdi-pin</v-icon></v-col>
                  <v-col cols="6" align="space-around">
                    <p>{{ $t('home.contact-info.visit-us') }}</p>
                    <p class="pr-2 pb-2">Dr. Durrwanger Strasse 15F <br/> 86156 <br/>Augsburg</p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6"><v-icon>mdi-email</v-icon></v-col>
                  <v-col cols="6" align="space-around">
                    
                    <p>Email</p>
                    <p class="pr-2 pb-2">info@buisinesslanguages.de</p></v-col>
                  
                </v-row>

                <v-row>
                  <v-col cols="6"><v-icon>mdi-phone</v-icon></v-col>
                  <v-col cols="6">
                  <p>{{ $t('home.contact-info.phone') }}</p>
                  <p class="pr-2 pb-2">+ 49 1733825029</p>
                </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6"><v-icon>mdi-clock</v-icon></v-col>
                  <v-col cols="6">
                  <p>{{ $t('home.contact-info.opening-hours') }}</p>
                  <p class="pr-2 pb-2">M-F: 9:00AM-6:00PM</p>
                </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <v-row>
                <v-col
                class="my-4 mx-4 map-container">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5299.62989237724!2d10.849799!3d48.38329100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebcdc0a913c13%3A0xc251e675dd293f06!2sDr.-D%C3%BCrrwanger-Stra%C3%9Fe%2015F%2C%2086156%20Augsburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1715632174435!5m2!1sen!2sus"
                  style="border: 0; width: 100%; height: 100%;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  importance="low"
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

const contactSection = ref(null);

const scrollToContact = () => {
  contactSection.value.scrollIntoView({ behaviour: 'smooth' });
}

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
  // Delay animation start to prioritize initial render
  setTimeout(() => {
    intervalID = setInterval(() => {
      indexVal.value = (indexVal.value + 1) % languages.length;
    }, 2000);
  }, 3000); // Wait 3 seconds before starting animation
});


onUnmounted(() => {
  clearInterval(intervalID);
});
</script>
<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/hero-background.webp");
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

/* Add this to enable transform transitions after initial render */
.animations-enabled .fade-enter-active,
.animations-enabled .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.custom-color {
  color: #112a46 !important;
}

.business-guiness {
  height: 900px;
  width: 100% !important;
}

.home-card {
  height: 150px;
  width: auto;
}

.video-container {
  min-height: 700px;
}

.contact-info-container{
  height: auto;
}

.map-container{
  height: 400px;
}
</style>
