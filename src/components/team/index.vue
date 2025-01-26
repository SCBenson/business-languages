<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-for="(member, index) in data" :key="index" class="mb-4">
          <v-row>
            <v-col cols="3" class="d-flex align-center pa-4">
              <v-img
                :src="member.path"
                height="250"
                cover
                class="bg-grey-lighten-2 rounded-circle mx-auto"
              />
            </v-col>
            <v-col cols="8">
              <v-card-title style="color: #f4b754" class="pb-0"
                >{{ member.name }}
              </v-card-title>
              <p class="pl-4 font-weight-bold">
                {{ member.role }}
              </p>
              <v-card-text v-if="member.description">
                {{
                  showFullDescription[index]
                    ? member.description
                    : member.description.slice(0, 500) + "..."
                }}
              </v-card-text>
              <v-card-text v-else class="text-grey"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente veritatis omnis ab, exercitationem fuga nobis quos
                harum commodi nemo voluptatem amet id adipisci ducimus
                consectetur expedita dolore nostrum quis maxime!
              </v-card-text>
              <span v-if="member.description.length > 500">
                <v-btn
                  class="pa-0 mx-3 bg-transparent"
                  color="blue"
                  variant="text"
                  @click="toggleDescription(index)"
                >
                  {{ showFullDescription[index] ? "Show less" : "Show more" }}
                </v-btn>
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { data } from "@/assets/scripts/teamdata.js";
import { ref } from "vue";

const showFullDescription = ref(Array(data.length).fill(false));

const toggleDescription = (index) => {
  showFullDescription.value[index] = !showFullDescription.value[index];
};
</script>
