<template>
  <v-sheet class="hero-section">
    <v-container fluid class="pa-0 text-center fill-height pb-0">
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
    <v-container class="business-guinness d-flex align-center justify-center pt-0">
      
      <v-row class="mx-4 mx-sm-6 mx-md-12" style="max-width: 1200px;">
        <v-col align="center" cols="12" class="py-6"><h1>{{$t('home.services.header')}}</h1></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/briefcase.webp" alt="briefcase icon representing tailored services" class="icons"></v-img><v-card-title class="text-no-wrap title-height">{{$t('home.services.service-1-title')}}</v-card-title><p class="card-text">{{$t('home.services.service-1-description')}}</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/interactive.webp" alt="interactive icon representing online learning" class="icons"></v-img><v-card-title class="text-no-wrap title-height">{{$t('home.services.service-2-title')}}</v-card-title><p class="card-text">{{$t('home.services.service-2-description')}}</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/communication.webp" alt="Communication icon representing coversation focused learning" class="icons"></v-img><v-card-title class="text-no-wrap title-height">{{$t('home.services.service-3-title')}}</v-card-title><p class="card-text">{{$t('home.services.service-3-description')}}</p></v-card></v-col>
        <v-col align="center" cols="12" md="3" class="px-4"><v-card class="home-card card-slide-up">
          <v-img src="@/assets/home/rocket.webp" alt="Rocket icon representing advanced comprehension language education" class="icons"></v-img><v-card-title class="text-no-wrap title-height">{{$t('home.services.service-4-title')}}</v-card-title><p class="card-text">{{$t('home.services.service-4-description')}}</p></v-card></v-col>
        </v-row>
    </v-container>
  </v-sheet>
  <div ref="contactSection">
    <v-container class="px-8 mt-2">
      <v-row justify="center">
        <v-col cols="12" md="6" lg="6">
          <v-card color="#f4b754" class="pa-6 mt-8">
            <v-form align="center" class="custom-color" ref="contactForm" @submit.prevent="sendEmail">
              <h1 class="font-weight-bold mb-2">{{ $t('home.contact-form.title') }}</h1>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="formData.firstName"
                    bg-color="white"
                    :label="$t('home.contact-form.first-name')"
                    required
                    :rules="[v => !!v || 'First name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field 
                    v-model="formData.email" 
                    bg-color="white" 
                    type="email" 
                    required 
                    label="E-Mail" 
                    :rules="emailRules">
                  </v-text-field>
                </v-col>

              </v-row>
              <v-row justify="center">
                 <v-col cols="12" md="8">
                  <v-text-field 
                    v-model="formData.subject" 
                    required 
                    bg-color="white" 
                    :label="$t('home.contact-form.subject')" 
                    :rules="[v => !!v || 'Subject is required']">
                  </v-text-field>
                 </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <v-textarea
                    v-model="formData.message"
                    required
                    bg-color="white"
                    :label="$t('home.contact-form.description')"
                    class="wrapped-label"
                    :rules="[v => !!v || 'Message is required']"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn 
                    type="submit" 
                    color="purple" 
                    :loading="loading" 
                    :disabled >
                      {{$t('home.contact-form.button')}}
                  </v-btn>
                </v-col>
              </v-row>
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
                    
                    <p>Email:</p>
                    <p class="pr-2 pb-2">info@businesslanguages.de</p></v-col>
                  
                </v-row>

                <v-row justify="center">
                  <v-col cols="2" class="d-flex align-center justify-center"><v-icon>mdi-phone</v-icon></v-col>
                  <v-col cols="6">
                  <p>{{ $t('home.contact-info.phone') }}</p>
                  <p class="pr-2 pb-2">+ 49 1733825029</p>
                </v-col>
                </v-row>
                <v-row justify="center" class="pb-2">
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
import { ref, onMounted, onUnmounted, computed } from "vue";

const contactForm = ref(null);
const loading = ref(false);

const formData = ref({
  firstName: '',
  email: '',
  subject: '',
  message: ''
})

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
})

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const isFormValid = computed(() => {
  return formData.value.firstName && 
         formData.value.email && 
         formData.value.subject && 
         formData.value.message &&
         /.+@.+\..+/.test(formData.value.email)
})

const showNotification = (message, color = 'success') => {
  snackbar.value = {
    show: true,
    message,
    color
  }
}

//send email function
const sendEmail = async () => {
  const { valid } = await contactForm.value.validate();
  if(!valid){
    showNotification('Please fill in all required fields correctly', 'error')
    return
  }

  loading.value = true

  try{
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'sean_c_benson@outlook.com',
        subject: `Contact Form: ${formData.value.subject}`,
        text: `
        Name: ${formData.value.firstName}
        Email: ${formData.value.email}
        Subject: ${formData.value.subject}

        Message:
        ${formData.value.message}
          `,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${formData.value.firstName}</p>
            <p><strong>Email:</strong> ${formData.value.email}</p>
            <p><strong>Subject:</strong> ${formData.value.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.value.message.replace(/\n/g, '<br>')}</p>
          `,
          senderName: formData.value.firstName,
          senderEmail: formData.value.email
      })
    })
    const result = await response.json()

    if(response.ok){
      showNotification('Message sent successfully! We\'ll get back to you soon.', 'success')

      formData.value = {
        firstName: '',
        email: '',
        subject: '',
        message: ''
      }
      contactForm.value.reset()
    } else {
      throw new Error(result.error || 'Failed to send message.')
    }
  } catch (error){
    console.error('Error sending email:', error)
    showNotification('Failed to send message. Please try again later.', 'error')
  } finally {
    loading.value = false
  }
}

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

.business-guinness {
  height: auto;
  width: 100% !important;
}

@media (min-width: 960px) {
  .business-guinness {
    height: 600px;
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
.wrapped-label{
  white-space: normal !important;
  word-wrap: break-word !important;
}
</style>
