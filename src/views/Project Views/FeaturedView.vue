<template>
  <div>
    <featured-section></featured-section>
    <featured-project-section></featured-project-section>
    <featured-search-section></featured-search-section>
  </div>
</template>

<script>
import FeaturedSection from '../../components/Featured View/Featured Section/FeaturedSection.vue'
import FeaturedProjectSection from '../../components/Featured View/Featured Projects Section/FeaturedProjectSection.vue';
import FeaturedSearchSection from '../../components/Featured View/Featured Search Section/FeaturedSearchSection.vue';

export default {
  components: {
    FeaturedSection,
    FeaturedProjectSection,
    FeaturedSearchSection
  },
  mounted() {
    window.scrollTo(0,0)
  },
};
</script>

<style scoped>
</style>>
