<template>
  <v-card class="ma-5 text-center" color="dark">
    <v-container>
      <h1 class="light--text font-weight-light mt-7 mb-7">Find a Project</h1>

      <categories-bar class="pb-7"></categories-bar>

      <v-divider dark></v-divider>

      <technologies-bar class="pt-4"></technologies-bar>

      <search-bar class="mx-5 mt-11 mb-15"></search-bar>
    </v-container>
  </v-card>
</template>

<script>
import CategoriesBar from "../../Search/CategoriesBar.vue";
import TechnologiesBar from "../../Search/TechnologiesBar.vue";
import SearchBar from "../../Search/SearchBar.vue";

export default {
  components: {
    CategoriesBar,
    TechnologiesBar,
    SearchBar,
  },
};
</script>

<style>
</style>