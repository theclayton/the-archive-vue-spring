<template>
  <v-card class="mx-5 pt-9 light--text text-center" color="dark">
    <v-container>
      <h1 class="text-h2 font-weight-light">Welcome to the Archive</h1>
      <h5 class="text-h5 font-weight-light pt-2">Clayton Ward</h5>

      <div class="d-flex justify-space-around">
        <div class="pt-16">
          <donut-chart :data="donutChartData" class="pt-2 pl-12"></donut-chart>
        </div>

        <div class="pt-16 pr-6">
          <bar-graph :data="barGraphData" class="pt-5"></bar-graph>
          <years-chart :data="yearsChartData" class="pt-15 pr-4"></years-chart>
        </div>
      </div>

    <div class="mt-5">      
      <v-btn rounded x-large color="darkRed lighter--text" class="mr-5 mb-15" link to="/projects">View All Projects</v-btn>
      <v-btn rounded x-large color="lighterOrange dark--text" class="ml-5 mb-15" link to="/search">Find a project</v-btn>
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
    barGraphData: [
      { pos: 1, name: "HTML", value: 16 },
      { pos: 2, name: "CSS", value: 16 },
      { pos: 3, name: "JavaScript", value: 13 },
      { pos: 4, name: "Swift", value: 8 },
      { pos: 5, name: "Node", value: 8 },
      { pos: 6, name: "MongoDB", value: 3 },
      { pos: 7, name: "Gimp", value: 7 },
    ],
    yearsChartData: 10,
    donutChartData: [
      { name: "Web", value: 15, color: "#814C4F" },
      { name: "Mobile", value: 9, color: "#EED9B7" },
      { name: "Other", value: 1, color: "#659CC8" },
    ],
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