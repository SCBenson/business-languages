<template>
  
  <v-container class="text-center px-8">
    <h1 class="text-custom-purple">{{ $t("about.title.title") }}</h1>
    <v-row justify="center" class="mt-4">
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/earth.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.global-team.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text">{{
            $t("about.global-team.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/brain.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.more-than-just-language.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text">{{
            $t("about.more-than-just-language.description")
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/target.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.industry-specific-training.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.industry-specific-training.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/badge.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.specializing-in-business-english.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.specializing-in-business-english.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/support.webp" height="60" width="60"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.support-for-newcomers.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.support-for-newcomers.description") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto" :max-width="$vuetify.display.mdAndUp ? '700px' : '100%'">
          <div class="d-flex justify-center pa-4">
            <v-img src="@/assets/about/translation.webp" height="50" width="50"></v-img>
          </div>
          <v-card-title class="text-custom-purple responsive-title">{{
            $t("about.translation-services.title")
          }}</v-card-title>
          <v-card-text class="text-black responsive-text"
            >{{ $t("about.translation-services.description") }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-4" color="purple">{{ $t("about.title.button") }}</v-btn>
  </v-container>
  <v-container class="text-center px-8 donal-container">
    
    <v-row>
      <v-col cols="12" md="2">
        <v-img src="@/assets/about/donal-about.webp" height="320" width="420"></v-img>
      </v-col>
      <v-col cols="12" md="10">
        <h2 class="text-left">Your Trainer: Donal O'Riada</h2>
        <p class="text-left">I won’t pretend I grew up wanting to be a Business English trainer; it was something I stumbled upon, having explored professions as diverse as shepherd, actor, roadie, salesman, professional baseball player (ask me), stage builder, etc. and I finally hit on the right career in 1999. Although my name translates from the Gaelic (Irish) as Ruler of the World, Son of Kings, I have managed to keep my feet on the ground, and this is apparent when you look at the team. I have gathered a pool of people who want to be experts in their field and pass on their knowledge. One of my role models is the former French (and Manchester United) footballer Eric Cantona. I saw an interviewer ask him what he considered as being his greatest action on a football pitch (soccer). He didn’t pick one of his countless goals, but rather a blind pass to a colleague (Denis Irwin, if you want to check it out) who scored. The interviewer couldn’t believe that goals which won cups and leagues were secondary to an assist, but Eric said, “you must trust your teammates”. And I do.
I studied to become a Business English trainer in 1999 and spent the next few years gaining experience with various schools.
I set up the company Business Languages Augsburg (now Business Languages Anywhere!) in October 2004 and three of the trainers who started with me all those years ago are still with me (despite everything). And I have always tried to add youth and ideas to the team, whenever possible, to complement the experience of the senior trainers. Our success has been that we have survived recessions, pandemics, financial crises, and we are still providing training at the top level. We have kept up with the times and ahead of the posse!</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.responsive-title {
  font-size: 1.1rem;
}

.responsive-text {
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .responsive-title {
    font-size: 1.4rem;
  }
  
  .responsive-text {
    font-size: 1.1rem;
  }
}
</style>
<script setup></script>
