<template>
  <v-container>
    <v-card class="my-4 mx-4">
      <v-card-title>Create a Blog Post!</v-card-title>
      <v-form>
        <v-row>
          <v-col cols="12" class="pa-8">
            <v-avatar size="80" v-if="author === 'Matthew Victor'"
              ><v-img :src="`public/team/matthew.webp`"></v-img>
            </v-avatar>
            <v-avatar size="100" v-if="author === 'Donal O\'Riada'"
              ><v-img :src="`public/team/donal.webp`"></v-img>
            </v-avatar>
            <v-menu transition="scale-transition" v-model="authorMenu"
              ><template v-slot:activator="{ props }">
                <v-select
                  v-bind="props"
                  v-model="author"
                  :items="authorOptions"
                  label="Author's Name"
                  readonly
                  required
                  variant="outlined"
                  class="my-3"
                >
                </v-select>
              </template>
              <v-list>
                <v-list-item @click="setAuthor('Donal O\'Riada')"
                  >Donal O'Riada</v-list-item
                >
                <v-list-item @click="setAuthor('Matthew Victor')"
                  >Matthew Victor</v-list-item
                >
              </v-list>
            </v-menu>

            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              min-width="auto"
            >
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-model="editedDate"
                  label="Date"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="props"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datePublished"
                @update:model-value="dateMenu = false"
              ></v-date-picker>
            </v-menu>
            <v-file-input
              v-model="coverImage"
              accept="image/*"
              label="Cover Image"
              @change="handleImageUpload"
            ></v-file-input>
            <v-img
              v-if="coverImagePreview"
              :src="coverImagePreview"
              max-height="200"
              contain
              class="mb-4 grey lighten-2"
            ></v-img>
            <v-text-field
              v-model="blogTitle"
              required
              label="Blog Title"
            ></v-text-field>
            <v-text-field
              v-model="initialHeader"
              required
              label="Initial Header"
            ></v-text-field>
            <v-textarea
              v-model="initialParagraph"
              required
              label="Initial Paragraph"
            ></v-textarea>
            <div
              v-for="(item, index) in contentItems"
              :key="index"
              class="mt-4"
            >
              <div class="d-flex align-center">
                <div class="flex-grow-1">
                  <v-textarea
                    v-if="item.type === 'paragraph'"
                    v-model="item.content"
                    :label="`Paragraph ${index + 2}`"
                  ></v-textarea>
                  <v-text-field
                    v-if="item.type === 'header'"
                    v-model="item.content"
                    :label="`Header ${index + 2}`"
                  ></v-text-field>
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

            <v-menu transition="scale-transition" v-model="contentMenu"
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
  </v-container>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute} from "vue-router";
const router = useRouter();
const route = useRoute();
const contentMenu = ref(false);
const authorMenu = ref(false);
const dateMenu = ref(false);
const contentItems = ref([]);
// Form Data
const author = ref("");
const datePublished = ref(null);
const editedDate = ref("");
const coverImage = ref(null);
const coverImagePreview = ref("");
const avatarPath = ref("");
const blogTitle = ref("");
const initialHeader = ref("");
const initialParagraph = ref("");
const authorOptions = ref(['Donal O\'Riada', 'Matthew Victor']);
const basePublicPath = import.meta.env.BASE_URL || "/";
const setAuthor = (name) => {
  author.value = name;
  authorMenu.value = false; // Close the menu after selection

  if(author.value === "Matthew Victor"){
    avatarPath.value = `${basePublicPath}team/matthew.webp`;

  }else{
    avatarPath.value = `${basePublicPath}team/donal.webp`;
  }
};

// Function to format a date with ordinal suffix
const formatDateWithOrdinal = (dateString) => {
  if (!dateString) return "";

  const formattedDate = new Date(dateString);

  // Get day number
  const day = formattedDate.getDate();

  // Get ordinal suffix
  let suffix = "th";
  if (day % 10 === 1 && day !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    suffix = "rd";
  }

  // Format complete date
  return formattedDate
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .replace(/(\d+)(?=(,))/, `$1${suffix}`);
};

// Watch for changes to datePublished and update formattedDate
watch(datePublished, (newDate) => {
  editedDate.value = formatDateWithOrdinal(newDate);
});

// Handle image upload
const handleImageUpload = async (event) => {
  const file = coverImage.value;
  if (file) {
    coverImagePreview.value = URL.createObjectURL(file);
  } else {
    coverImagePreview.value = "";
  }
};

const loadFromHistoryState = () => { // First try to load from history.state
  if (history.state && history.state.blogData) {
    const data = history.state.blogData;
    console.log("Loading data from history state:", data);
    restoreFormData(data);
    return;
  }
  
  // Then try to load from sessionStorage if coming from edit
  if (route.query.edit === 'true') {
    try {
      const storedData = sessionStorage.getItem('blogEditData');
      if (storedData) {
        const data = JSON.parse(storedData);
        console.log("Loading data from sessionStorage:", data);
        restoreFormData(data);
        // Clean up the stored data
        sessionStorage.removeItem('blogEditData');
      }
    } catch (error) {
      console.error('Error loading edit data from sessionStorage:', error);
    }
  }
}

const restoreFormData = (data) => {
// Restore all form fields
  author.value = data.author || "";
  editedDate.value = data.formattedDate || "";
  blogTitle.value = data.title || "";
  initialHeader.value = data.initialHeader || "";
  initialParagraph.value = data.initialParagraph || "";
  coverImagePreview.value = data.coverImageUrl || "";
  avatarPath.value = data.avatarPath || "";
  contentItems.value = data.contentItems || [];
  
  // Set the author dropdown properly
  if (data.author) {
    setAuthor(data.author);
  }
  
  // Parse the date back if it exists
  if (data.formattedDate) {
    try {
      const cleanDateStr = data.formattedDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
      const parsedDate = new Date(cleanDateStr);
      if (!isNaN(parsedDate.getTime())) {
        datePublished.value = parsedDate;
      }
    } catch (error) {
      console.warn("Could not parse date from history state:", error);
    }
  }
};

//Method to collect the form data for preview
const previewBlog = () => {
  const blogData = {
    avatarPath: avatarPath.value,
    author: author.value,
    formattedDate: editedDate.value,
    title: blogTitle.value,
    initialHeader: initialHeader.value,
    initialParagraph: initialParagraph.value,
    coverImageUrl: coverImagePreview.value,
    contentItems: contentItems.value.map((item) => ({
      type: item.type,
      content: item.content,
    })),
  };
  // Create a route for a new preview component
  router.push({
    path: "/blog/preview",
    state: { blogData },
  });
};

const addContent = (type) => {
  contentItems.value.push({
    type,
    content: "",
    id: Date.now(),
  });
  contentMenu.value = false;
};

const deleteContent = (index) => {
  contentItems.value.splice(index, 1);
};

onMounted(() => {
  loadFromHistoryState();
});

</script>


<style scoped>
.add-selector {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 12px;
}
</style>
