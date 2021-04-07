<template>
  <v-card class="ma-5" color="dark">
    <v-container class="pb-16">
      <h1 class="text-h4 light--text font-weight-light text-center pt-5 pb-10">Featured Projects</h1>

      <v-row class="justify-center">
        <v-sheet
          v-for="project, index in projects"
          :key="index"
          dark
          color="darker"
          width="350"
          class="rounded-xl ma-5"
        >
          <v-skeleton-loader v-if="isLoading" dark class="ma-5" type="card-avatar"></v-skeleton-loader>
          <project-card v-if="!isLoading" :project="project"></project-card>
        </v-sheet>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ProjectCard from "../../Project/Project Card/ProjectCard.vue";
import axios from "../../../axios/axios";

export default {
  methods: {
    async getProjects() {
      try {
        const res = await axios.get("/projects/featured");
        this.projects = res.data;
        this.isLoading = false;
      } catch (error) {
        // pass
      }
    },
  },
  mounted() {
    this.getProjects();
  },
  data: () => ({
    isLoading: true,
    projects: [
      {
        title: "",
        src: "",
        thumbnail: "",
      },

      {
        title: "",
        src: "",
        thumbnail: "",
      },

      {
        title: "",
        src: "",
        thumbnail: "",
      },
      {
        title: "",
        src: "",
        thumbnail: "",
      },
      {
        title: "",
        src: "",
        thumbnail: "",
      },
      {
        title: "",
        src: "",
        thumbnail: "",
      },
    ],
  }),
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
</style>