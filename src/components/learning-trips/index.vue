<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-8 text-custom-purple">{{$t("learning-trips.title.title")}}</h1>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card rounded="lg" class="mb-8 mx-12">
          <v-row class="text-center">
            <v-col cols="12" md="6">
              <v-img cover height="100%" src="@/assets/dún-aonghasa.webp"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-md-flex align-md-center">
              <div>
              <v-card-title class="responsive-title">{{$t("learning-trips.study-in-ireland.title")}}</v-card-title>
              <p class="text-left px-8 responsive-text">
                {{$t("learning-trips.study-in-ireland.paragraph1")}}<br />
                <br />
                {{$t("learning-trips.study-in-ireland.paragraph2")}}
              </p>
            
              <v-btn @click="openEmailClient" color="#f4b754" class="my-4 responsive-text">Learn More</v-btn>
            </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="mx-12 mb-12">
          <v-row class="text-center">
            <v-col cols="12" md="6">
              <v-img cover height="100%" src="@/assets/seans-bar.webp"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-md-flex align-md-center">
              <div>
              <v-card-title class="responsive-title">{{$t("learning-trips.study-in-ireland.perfect-your-english.title")}}</v-card-title>
              <p class="text-left px-8 responsive-text">
                {{$t("learning-trips.study-in-ireland.perfect-your-english.paragraph1")}}
              </p>
              <v-btn @click="openEmailClient" color="#f4b754" class="my-4 responsive-text">{{$t("learning-trips.study-in-ireland.perfect-your-english.button")}}</v-btn>
            </div>
            </v-col>
          
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>
<script setup>
const openEmailClient = () => {
  const email = 'info@businesslanguages.de'
  const subject = encodeURIComponent('Language Trips: Requesting more information');
  window.location.href = `mailto:${email}?subject=${subject}`;
}
</script>
<style scoped>
.responsive-title {
  font-size: 1.1rem;
  font-weight: 700;
}

.responsive-text {
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .responsive-title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  .responsive-text {
    font-size: 1.4rem;
  }
}
</style>
