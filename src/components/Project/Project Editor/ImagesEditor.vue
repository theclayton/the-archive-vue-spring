<template>
  <div>
    <div v-for="image, i in images" :key="i">
      <h4 class="text-h6 light--text mb-6">Image #{{ i+1 }}:</h4>

      <v-text-field
        v-model="image.name"
        label="Image Name"
        placeholder="Image Name"
        :disabled="isLoading"
        outlined
        rounded
        clearable
        required
        dark
      ></v-text-field>

      <v-text-field
        v-model="image.src"
        label="Image src"
        placeholder="Image src"
        :disabled="isLoading"
        outlined
        rounded
        clearable
        required
        dark
      ></v-text-field>

      <v-text-field
        v-model="image.caption"
        label="Caption"
        placeholder="Caption"
        :disabled="isLoading"
        outlined
        rounded
        clearable
        required
        dark
      ></v-text-field>

      <v-text-field
        v-model="image.width"
        label="Width"
        placeholder="Width"
        :disabled="isLoading"
        outlined
        rounded
        clearable
        required
        dark
      ></v-text-field>

      <v-text-field
        v-model="image.height"
        label="Height"
        placeholder="Height"
        :disabled="isLoading"
        outlined
        rounded
        clearable
        required
        dark
      ></v-text-field>

      <v-divider dark class="mt-1 mb-10"></v-divider>
    </div>

    <v-row class="pb-5">
      <v-btn
        rounded
        x-large
        class="ml-4"
        color="lighterOrange darkRed--text"
        v-if="!isLoading"
        :disabled="isLoading"
        @click="saveImages()"
      >Save Images</v-btn>

      <v-btn
        rounded
        fab
        class="ml-5"
        color="lightGreen lighter--text"
        v-if="!isLoading"
        :disabled="isLoading"
        @click="createImage()"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import axios from "../../../axios/axios";

export default {
  data: () => ({
    isLoading: true,
    projectID: -1,
    images: [],
  }),
  mounted() {
    this.projectID = this.$route.params.id;

    this.getImages();
  },
  methods: {
    async getImages() {
      try {
        const res = await axios.get(`/images/project/${this.projectID}`);
        this.images = res.data;
        this.isLoading = false;
      } catch (error) {
        // pass
      }
    },
    async createImage() {
      // API create blank image
      this.getImages();
    },
    async removeImage(id) {
      console.log(id);
    },
    async saveImages() {},
  },
};
</script>

<style>
</style>