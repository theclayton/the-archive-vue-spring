<template>
  <div class="d-flex justify-space-around">
    <v-tooltip bottom v-for="(technology, i) in technologies" :key="i">
      <template v-slot:activator="{ on, attrs }">
        <a @click="findProjects(technology.name)">
          <v-img :src="technology.src" max-height="22" max-width="22" v-on="on" v-bind="attrs"></v-img>
        </a>
      </template>
      <span>{{ technology.name }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import axios from "../../axios/axios";
import router from "../../router/index";

export default {
  data: () => ({
    technologies: [],
  }),
  mounted() {
    this.getTechnologies();
  },
  methods: {
    async getTechnologies() {
      try {
        const res = await axios.get("/technologies");
        this.technologies = res.data;
      } catch (error) {
        // pass
      }
    },
    findProjects(terms) {
      router.push(`/search?terms=${terms}`);
    },
  },
};
</script>

<style>
</style>