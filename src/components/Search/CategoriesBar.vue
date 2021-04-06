<template>
  <div>
    <v-btn
      v-for="category, i in categories"
      :key="i"
      text
      color="lightBlue"
      @click="findProjects(category)"
    >{{ category }}</v-btn>
  </div>
</template>

<script>
import router from "../../router/index";

export default {
  data: () => ({
    categories: ["WEB", "MOBILE", "STAND-ALONE", "EMBEDDED"],
  }),
  methods: {
    findProjects(terms) {
      router.push(`/search?terms=${terms}`);
    },
  },
};
</script>

<style>
</style>