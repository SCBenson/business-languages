<template>
  <v-component>
    <v-card class="my-4 mx-4">
      <v-card-title>Create a Blog Post!</v-card-title>
      <v-form>
        <v-row>
          <v-col cols="12" class="pa-8">
            <p>Upload an image for the Blog Header:</p>
            <v-file-input label="Choose Image"></v-file-input>
            <v-text-field label="Blog Title"></v-text-field>
            <v-text-field label="Initial Paragraph Header"></v-text-field>
            <v-textarea label="Initial Paragraph"></v-textarea>
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
                <v-list-item @click="addContent('header')">Header</v-list-item>
                <v-list-item @click="addContent('image')">Image</v-list-item>
                <v-list-item @click="addContent('paragraph')"
                  >Paragraph</v-list-item
                >
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-btn @click="previewBlog" color="blue">Preview</v-btn>
      </v-form>
    </v-card>
  </v-component>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const addMenu = ref(false);
const contentItems = ref([]);
// Form Data
const blogTitle = ref("");
const initialHeader = ref("");
const initialParagraph = ref("");
const initialImage = ref("");

//Method to collect the form data for preview
const previewBlog = () => {
  const blogData = {
    title: blogTitle.value,
    initialHeader: initialHeader.value,
    initialParagraph: initialParagraph.value,
    initialImage: initialImage.value,
  };
  // Create a route for a new preview component
  router.push({
    name: "blog-preview",
    params: { id: "preview" },
    state: { blogData },
  });
};

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
</script>

<style scoped>
.add-selector {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 12px;
}
</style>
