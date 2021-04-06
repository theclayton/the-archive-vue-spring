<template>
  <div>
    <h1 class="text-h6 font-weight-light">Technologies</h1>
    <div id="chart"></div>
  </div>
</template>

<script>
import { select } from "d3-selection";

export default {
  data: () => ({
    width: 400,
    height: 200,
    margin: 40,
  }),
  props: {
    data: {
      type: Array,
    },
  },
  mounted() {
    this.d3Draw();
  },
  computed: {},
  methods: {
    d3Draw() {
      let chart = select("#chart");

      let svg = chart
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
        .attr("transform", "translate(" + this.width / 3 + "," + 0 + ")");

      svg
        .selectAll("bars")
        .data(this.data)
        .enter()
        .append("rect")
        .attr("fill", (d) => {
          if (d.pos % 2 === 0) {
            return "#DDA032";
          } else {
            return "#814C4F";
          }
        })
        .attr("width", (d) => d.value * 13)
        .attr("height", 7)
        .attr("x", 0)
        .attr("y", (d) => d.pos * 26);

      svg
        .selectAll("text")
        .data(this.data)
        .enter()
        .append("text")
        .text((d) => d.name)
        .attr("font-size", "15px")
        .attr("font-weight", "300")
        .style("fill", "#EED9B7")
        .attr("transform", (d) => {
          const pt = 8 + d.pos * 26;
          return "translate(" + -15 + "," + pt + ")";
        })
        .style("text-anchor", "end");
    },
  },
};
</script>

<style>
</style>