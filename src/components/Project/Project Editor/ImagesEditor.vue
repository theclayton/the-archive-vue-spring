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

      <v-btn
        rounded
        x-large
        class="ml-1 mb-6 mr-3"
        color="lighterOrange darkRed--text"
        v-if="!isLoading"
        :disabled="isLoading"
        @click="saveImage(image)"
      >Save</v-btn>

      <v-btn
        rounded
        x-large
        class="ml-1 mb-6"
        color="darkRed light--text"
        v-if="!isLoading"
        :disabled="isLoading"
        @click="removeImage(image, image._id)"
      >DELETE</v-btn>

      <v-divider dark class="mt-1 mb-10"></v-divider>
    </div>

    <v-btn
      rounded
      x-large
      class="ml-2 mb-6"
      color="lightGreen lighter--text"
      v-if="!isLoading"
      :disabled="isLoading"
      @click="createImage()"
    >
      <v-icon dark>mdi-plus</v-icon>NEW IMAGE
    </v-btn>
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
      try {
        await axios.post("/images/project/create", {
          projectId: this.projectID,
        }, {
          auth: {
            username: this.$store.getters.getUsername,
            password: this.$store.getters.getPassword,
          },
        });
      } catch (error) {
        // pass
      }
      this.getImages();
    },
    async removeImage(index, id) {
      try {
        await axios.delete(`/images/project/delete/${id}`, {
          auth: {
            username: this.$store.getters.getUsername,
            password: this.$store.getters.getPassword,
          },
        });
        this.images.splice(index, 1);
      } catch (error) {
        // pass
      }
    },
    async saveImage(image) {
      this.isLoading = true;
      try {
        await axios.put("/images/project", image, {
          auth: {
            username: this.$store.getters.getUsername,
            password: this.$store.getters.getPassword,
          },
        });
      } catch (error) {
        // pass
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>