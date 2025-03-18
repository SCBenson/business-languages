<template>
  <v-component>
    <v-row class="text-center">
      <v-col>
        <h1 class="mt-4">{{ $t("translations.title.title") }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-8 mb-4">
          <v-row class="text-left">
            <v-col cols="12" md="6">
              <v-img src="@/assets/translations/img1.webp"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-title class="text-center">{{
                $t("translations.card.title")
              }}</v-card-title>

              <p class="px-4">
                {{ $t("translations.card.paragraph1") }}<br /><br />
                {{ $t("translations.card.paragraph2") }} <br /><br />
                {{ $t("translations.card.paragraph3") }}
              </p>
              <p class="px-4" v-if="$t('translations.card.paragraph4')">
                <br />
                {{ $t("translations.card.paragraph4") }}
              </p>
              <p class="px-4" v-if="$t('translations.card.paragraph5')">
                <br />
                {{ $t("translations.card.paragraph5") }}
              </p>
              <div class="text-center d-flex justify-center">
                <v-btn class="my-4 text-black" color="#f4b754">{{
                  $t("translations.card.button")
                }}</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-component>
</template>
