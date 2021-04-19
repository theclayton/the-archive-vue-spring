<template>
  <div>
    <v-text-field
      v-model="searchTerm"
      placeholder="Search projects..."
      outlined
      rounded
      clearable
      single-line
      dark
      @keyup.enter="findProjects(searchTerm)"
    ></v-text-field>

    <v-btn
      rounded
      x-large
      color="lighterOrange dark--text"
      @click="findProjects(searchTerm)"
      >Search</v-btn
    >
  </div>
</template>

<script>
import router from "../../router/index";

export default {
  props: {
    searchTerm: {
      type: String,
    },
  },
  methods: {
    findProjects(terms) {
      if (!terms) terms = "";
      router.push(`/search?terms=${terms}`);
    },
  },
};
</script>

<style>
</style>