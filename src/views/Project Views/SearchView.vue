<template>
  <div>
    <v-card class="mx-5 mb-5 text-center" color="dark">
      <v-container>
        <h1 class="light--text font-weight-light mt-7 mb-2">Find a Project</h1>

        <categories-bar class="mb-4"></categories-bar>

        <v-divider dark></v-divider>

        <technologies-bar class="pt-4 pb-9"></technologies-bar>

        <search-bar :searchTerm="searchTerm" class="pb-8"></search-bar>

        <v-divider dark class="pb-7"></v-divider>

        <v-row class="justify-center pb-15">
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
  </div>
</template>

<script>
import axios from "../../axios/axios";
import ProjectCard from "../../components/Project/Project Card/ProjectCard.vue";
import CategoriesBar from "../../components/Search/CategoriesBar.vue";
import TechnologiesBar from "../../components/Search/TechnologiesBar.vue";
import SearchBar from "../../components/Search/SearchBar.vue";

export default {
  data: () => ({
    isLoading: true,
    searchTerm: "",
    technologies: [],
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
    CategoriesBar,
    TechnologiesBar,
    SearchBar,
    ProjectCard,
  },
  watch: {
    $route() {
      this.searchTerm = this.$route.query.terms;
      this.getProjects();
    },
  },
  methods: {
    async getProjects() {
      try {
        let res;
        if (this.searchTerm) {
          res = await axios.get(`/search?terms=${this.searchTerm}`);
        } else {
          res = await axios.get(`/projects`);
        }
        this.projects = res.data;
        this.isLoading = false;
      } catch (error) {
        // pass
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.searchTerm = this.$route.query.terms;

    this.getProjects();
  },
};
</script>

<style>
</style>