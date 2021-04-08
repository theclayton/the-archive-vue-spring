<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-15">
        <h1 class="text-h3 light--text font-weight-light text-center pt-7 pb-9">All Projects</h1>

        <v-row class="pb-7 justify-center">
          <v-btn text color="lighterOrange">Categories:</v-btn>
          <categories-bar></categories-bar>
        </v-row>

        <v-divider></v-divider>

        <technologies-bar class="pt-4 pb-9"></technologies-bar>

        <v-select
          v-model="selectedSorted"
          class="mb-8 mx-5"
          :items="filterItems"
          label="SORT BY"
          hint="default by date"
          background-color="darker"
          persistent-hint
          dark
          outlined
          rounded
        ></v-select>

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
  </div>
</template>

<script>
import axios from "../../axios/axios";
import ProjectCard from "../../components/Project/Project Card/ProjectCard.vue";
import CategoriesBar from "../../components/Search/CategoriesBar.vue";
import TechnologiesBar from "../../components/Search/TechnologiesBar.vue";

export default {
  data: () => ({
    isLoading: true,
    selectedSorted: "",
    filterItems: ["SORT BY DATE", "ALPHABETICAL ORDER"],
    categories: ["WEB", "MOBILE", "STAND-ALONE", "EMBEDDED"],
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
    CategoriesBar,
    TechnologiesBar,
  },
  mounted() {
    window.scrollTo(0, 0);

    this.getProjects();
  },
  watch: {
    selectedSorted: function() {
      if (this.selectedSorted === this.filterItems[0]) {
        this.sortByDate();
      } else if (this.selectedSorted === this.filterItems[0]) {
        this.sortByName();
      }
    },
  },
  methods: {
    async getProjects() {
      try {
        let res = await axios.get(`/projects`);
        this.projects = res.data;
        this.sortByDate();
      } catch (error) {
        // pass
      }
    },
    filterSelected(selection) {
      alert(selection);
    },
    sortByName() {
      this.isLoading = true;
      this.projects.sort((a, b) => b.title - a.title);
      this.isLoading = false;
    },
    sortByDate() {
      this.isLoading = true;
      this.projects.sort((a, b) => a.dateCreated - b.dateCreated);
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>