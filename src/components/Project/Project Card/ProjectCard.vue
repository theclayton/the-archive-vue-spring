<template>
<div class="pa-5">
  <a @click="projectClicked(project._id)">
    <v-img :src="project.prev_src" height="200" max-width="350" class="rounded-t-xl mx-auto"></v-img>
    <div class="d-flex">
      <v-img :src="project.thumbnail" max-height="40" max-width="40" class="rounded-circle mt-5 ml-3" ></v-img>
      <h4 class="h4-text light--text pt-7 px-3">{{ project.title }}</h4>
    </div>
  </a>
</div>
</template>

<script>
import router from '../../../router/index'

export default {
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
      projectClicked(id) {
          router.push({ path: `/project/${id}` })
      }
  }
};
</script>

<style scoped>
a {
    transition: 0.3s;
}
a:hover {
    opacity: 0.85;
}
</style>