<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-8 text-custom-purple">Learning Trips</h1>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card rounded="lg" class="mb-8 mx-12">
          <v-row class="text-center">
            <v-col cols="12" md="6">
              <v-img cover height="100%" src="@/assets/dún-aonghasa.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-md-flex align-md-center">
              <div>
              <v-card-title class="responsive-title">Study in Ireland</v-card-title>
              <p class="text-left px-8 responsive-text">
                The Glasson Academy is a combination of activity, learning and
                relaxation. The Hotel, with its family atmosphere, provides
                top-level service, first class accommodation and care, as well
                as a Wellness area and Fitness room. Holiday homes on the
                grounds are also available, which can each sleep 5 persons
                comfortably.<br />
                <br />
                The offer includes individual training in combination with a
                cultural program in Ireland. You decide which targets you wish
                to achieve; we create the most suitable program. This is the
                perfect way to improve your language skills. Our complete
                attention is directed towards your particular language
                requirements.
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
              <v-img cover height="100%" src="@/assets/seans-bar.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-md-flex align-md-center">
              <div>
              <v-card-title class="responsive-title">Perfect your English</v-card-title>
              <p class="text-left px-8 responsive-text">
                Our English trainers will equip you with perfect English skills
                so that you achieve competence and security in both written and
                spoken English. The lessons can be chosen as single, group or a
                combination of both. Additionally, we offer English courses in
                Ireland for schoolchildren (with or without accompanying
                parents), which take place during school holidays. Central to
                the learning concept, and indeed to the various activities, is
                fun. We also prepare the pupils for their school tests. The past
                has shown excellent results, probably because we show the kids
                that English can be fun and inhibitions in speaking are quickly
                forgotten. So if your children are having problems with English
                in school, then rather than investing in tuition, invest in an
                intensive course in the (soon-to-be) only English speaking
                country in the EU. A language is most easily learned in a
                country where it is spoken.
              </p>
              <v-btn @click="openEmailClient" color="#f4b754" class="my-4 responsive-text">Learn More</v-btn>
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
