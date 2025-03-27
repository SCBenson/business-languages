<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-4 text-custom-purple">{{ $t("translations.title.title") }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-8 mb-12">
          <v-row class="text-left" style="min-height: 100%">
            <v-col cols="12" md="6" class="d-flex pa-0">
              <v-img cover height="100%" src="@/assets/translations/img1.webp"></v-img>
            </v-col>
   
            <v-col cols="12" md="6" class="pa-0 d-md-flex align-md-center">
              <div class="mx-6">
              <v-card-title class="mt-4 text-center responsive-title">{{
                $t("translations.card.title")
              }}</v-card-title>

              <p class="px-4 responsive-text">
                {{ $t("translations.card.paragraph1") }}<br /><br />
                {{ $t("translations.card.paragraph2") }} <br /><br />
                {{ $t("translations.card.paragraph3") }}
              </p>
              <p class="px-4 responsive-text" v-if="$t('translations.card.paragraph4')">
                <br />
                {{ $t("translations.card.paragraph4") }}
              </p>
              <p class="px-4 responsive-text" v-if="$t('translations.card.paragraph5')">
                <br />
                {{ $t("translations.card.paragraph5") }}
              </p>
              <div class="text-center d-flex justify-center mb-4">
                <v-btn @click="openEmailClient" class="my-4 text-black responsive-text" color="#f4b754">{{
                  $t("translations.card.button")
                }}</v-btn>
              </div>
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
  const subject = encodeURIComponent('Translation Services: Requesting more info');
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
    font-size: 1.4rem;
    font-weight: 700;
  }
  
  .responsive-text {
    font-size: 1.1rem;
  }
}
</style>
