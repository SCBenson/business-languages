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
        <v-col align="center" cols="12" class="pb-4"><h1>What we offer</h1></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/briefcase.webp" alt="briefcase icon representing tailored services" class="icons"></v-img><v-card-title class="text-no-wrap title-height">Tailored for Business</v-card-title><p class="card-text">Custom language programs designed specifically for your industry needs.</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/interactive.webp" alt="interactive icon representing online learning" class="icons"></v-img><v-card-title class="text-no-wrap title-height">Interactive & Online</v-card-title><p class="card-text">Engage in dynamic lessons from anywhere with our live, interactive virtual classroom experience that feels just like being there in person.</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/communication.webp" alt="Communication icon representing coversation focused learning" class="icons"></v-img><v-card-title class="text-no-wrap title-height">Communication Focused</v-card-title><p class="card-text">Master practical conversation skills through real-world scenarios that prepare you to speak confidently in any situation.</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/rocket.webp" alt="Rocket icon representing advanced comprehension language education" class="icons"></v-img><v-card-title class="text-no-wrap title-height">More than just a Language School</v-card-title><p class="card-text">Dive into cultural immersion, career-specific terminology, and personalized learning paths.</p></v-card></v-col>
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
            <v-col cols="12">
              <v-card class="ma-4">
                <v-row>
                  <v-col>
                    <h1 class="custom-color">{{ $t('home.contact-info.title') }}</h1>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="2" class="d-flex align-center justify-center"><v-icon>mdi-pin</v-icon></v-col>
                  <v-col cols="6" align="space-around">
                    <p>{{ $t('home.contact-info.visit-us') }}</p>
                    <p class="pr-2 pb-2">Dr. Durrwanger Strasse 15F <br/> 86156 <br/>Augsburg</p>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="2" class="d-flex align-center justify-center"><v-icon>mdi-email</v-icon></v-col>
                  <v-col cols="6" align="space-around">
                    
                    <p>Email</p>
                    <p class="pr-2 pb-2">info@buisinesslanguages.de</p></v-col>
                  
                </v-row>

                <v-row justify="center">
                  <v-col cols="2" class="d-flex align-center justify-center"><v-icon>mdi-phone</v-icon></v-col>
                  <v-col cols="6">
                  <p>{{ $t('home.contact-info.phone') }}</p>
                  <p class="pr-2 pb-2">+ 49 1733825029</p>
                </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="2" class="d-flex align-center justify-center"><v-icon>mdi-clock</v-icon></v-col>
                  <v-col cols="6">
                  <p>{{ $t('home.contact-info.opening-hours') }}</p>
                  <p class="pr-2 pb-2">M-F: 9:00AM-6:00PM</p>
                </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12">
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

const contactSection = ref(null);
// const cardsContainer = ref(null);

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

  setTimeout(() => {
    const cards = document.querySelectorAll('.card-slide-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px'
    });
    cards.forEach(card => {
      observer.observe(card);
    });
  }, 500)


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
  height: 1500px;
  width: 100% !important;
}

@media (min-width: 960px) {
  .business-guiness {
    height: 900px;
  }
}

.home-card {
  height: 100%;
  width: 100%;
  background-color: #d2d2d2;
  padding-top: 15px;
}

.title-height{
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.card-text {
  padding: 25px 25px 15px 25px;
  font-size: 1.1rem;
}

.card-slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}


.card-slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.v-col:nth-child(1) .card-slide-up.visible {
  transition-delay: 0ms;
}
.v-col:nth-child(2) .card-slide-up.visible {
  transition-delay: 150ms;
}
.v-col:nth-child(3) .card-slide-up.visible {
  transition-delay: 300ms;
}
.v-col:nth-child(4) .card-slide-up.visible {
  transition-delay: 450ms;
}

.text-no-wrap {
  white-space: normal !important;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  hyphens: auto !important;
  overflow: visible !important;
  text-overflow: clip !important;
  width: 100%;
}

.icons {
  height: 70px;
  width: 70px;
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
