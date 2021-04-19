<template>
  <v-card class="mx-5 light--text text-center" color="dark">
    <v-container>
      <h1 class="text-h2 font-weight-light d-none d-lg-flex justify-center pt-9">Welcome to the Archive</h1>
      <h5 class="text-h5 font-weight-light pt-2 d-none d-lg-flex justify-center">Clayton Ward</h5>

      <h1 class="text-h5 lighter--text d-flex d-lg-none justify-center pt-5">Welcome to the Archive</h1>
      <h5 class="text-body-1 font-weight-light pt-2 d-flex d-lg-none justify-center">Clayton Ward</h5>

      <div class="d-lg-flex justify-space-around pb-3">
        <div class="pt-4">
        <v-spacer class="pt-14 d-none d-lg-flex"></v-spacer>
          <donut-chart class="pt-2"></donut-chart>
        </div>

        <div class="pr-6">
          <v-spacer class="pt-16 d-none d-sm-flex"></v-spacer>
          <v-spacer class="pt-5 d-none d-sm-flex"></v-spacer>
          <bar-graph></bar-graph>
          <years-chart :data="yearsChartData" class="pt-16 px-4"></years-chart>
        </div>
      </div>

      <v-divider dark class="mt-7 mb-12 d-flex d-lg-none"></v-divider>

      <div class="mt-1 mb-11">
        <v-btn
          rounded
          x-large
          color="darkRed lighter--text"
          class="mx-5 my-4"
          link
          to="/projects"
        >View All Projects</v-btn>
        <v-btn
          rounded
          x-large
          color="lighterOrange dark--text"
          class="mx-5 my-4"
          link
          to="/search"
        >Find a project</v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import DonutChart from "./DonutChart.vue";
import BarGraph from "./BarGraph.vue";
import YearsChart from "./YearsChart.vue";

export default {
  data: () => ({
    yearsChartData: 10,
  }),
  components: {
    BarGraph,
    DonutChart,
    YearsChart,
  },
};
</script>

<style>
</style>