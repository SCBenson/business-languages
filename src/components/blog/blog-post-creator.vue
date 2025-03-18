<template>
  <v-component>
    <v-card class="my-4 mx-4">
      <v-card-title>Create a Blog Post!</v-card-title>
      <v-form>
        <v-row>
          <v-col cols="12" class="pa-8">
            <p>Upload an image to place at the top of the blog post.</p>
            <v-text-field label="Blog Title"></v-text-field>
            <v-text-field label="Initial Paragraph Header"></v-text-field>
            <v-text-field label="Initial Paragraph"></v-text-field>
            <div
              v-for="(item, index) in contentItems"
              :key="index"
              class="mt-4"
            >
              <div class="d-flex align-center">
                <div class="flex-grow-1">
                  <v-textarea
                    v-if="item.type === 'paragraph'"
                    :label="`Paragraph ${index + 2}`"
                  ></v-textarea>
                  <v-text-field
                    v-if="item.type === 'header'"
                    :label="`Header ${index + 2}`"
                  ></v-text-field>
                  <div v-if="item.type === 'image'" class="my-2">
                    <p>Upload image:</p>
                    <v-file-input label="Choose Image"></v-file-input>
                  </div>
                </div>
                <v-btn
                  icon
                  color="error"
                  size="small"
                  class="ml-2"
                  @click="deleteContent(index)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </div>
            </div>

            <v-menu transition="scale-transition" v-model="addMenu"
              ><template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  density="compact"
                  color="green"
                  class="add-selector"
                  >+ Add</v-btn
                >
              </template>
              <v-list>
                <v-list-item @click="addHeader()">Header</v-list-item>
                <v-list-item @click="addImage()">Image</v-list-item>
                <v-list-item @click="addParagraph()">Paragraph</v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-component>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const addMenu = ref(false);
const contentItems = ref([]);

const addContent = (type) => {
  contentItems.value.push({
    type,
    id: Date.now(),
  });
  addMenu.value = false;
};

const deleteContent = (index) => {
  contentItems.value.splice(index, 1);
};

const addParagraph = () => addContent("paragraph");
const addHeader = () => addContent("header");
const addImage = () => addContent("image");
</script>

<style scoped>
.add-selector {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 12px;
}
</style>
