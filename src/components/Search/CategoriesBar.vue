<template>
  <div>
    <v-btn
      v-for="category, i in categories"
      :key="i"
      text
      color="lightBlue"
      @click="findProjects(category.name)"
    >{{ category.name }}</v-btn>
  </div>
</template>

<script>
import axios from '../../axios/axios';
import router from "../../router/index";

export default {
  data: () => ({
    categories: [],
  }),
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const res = await axios.get('/categories');
      this.categories = res.data;
    },
    findProjects(terms) {
      router.push(`/search?terms=${terms}`);
    },
  },
};
</script>

<style>
</style>