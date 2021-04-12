<template>
  <div>
    <h1 class="text-h6 font-weight-light">Categories</h1>
    <div id="donutChart"></div>
  </div>
</template>

<script>
import { select } from "d3-selection";
import { arc, pie } from "d3-shape";
import axios from "../../../axios/axios";

export default {
  data: () => ({
    isLoadingCategories: true,
    isLoadingProjects: true,
    data: [],
    colors: ["#814C4F", "#EED9B7", "#659CC8"],
    width: 500,
    height: 475,
    margin: 40,
    projectCount: 0,
  }),
  mounted() {
    this.calculateSize();
    this.getCategoriesCount();
    this.getProjectCount();
  },
  methods: {
    calculateSize() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 350 && windowWidth <= 600) {
        this.width = 300;
        this.height = 275
      }
    },
    async getCategoriesCount() {
      try {
        const res = await axios.get("/categories/count-each");

        let dataWithColor = [];
        for (const i in res.data) {
          dataWithColor.push({ ...res.data[i], color: this.colors[i] });
        }
        this.data = dataWithColor;

      } catch (error) {
        alert(error);
        this.data = [
          { name: "Web", value: 15, color: "#814C4F" },
          { name: "Mobile", value: 9, color: "#EED9B7" },
          { name: "Other", value: 1, color: "#659CC8" },
        ];
      }
      if (!this.isLoadingProjects) this.generateDonutGraph();
      this.isLoadingCategories = false;
    },
    async getProjectCount() {
      try {
        const res = await axios.get("/projects/count");
        this.projectCount = res.data;
      } catch (error) {
        this.projectCount = 45;
      }
      if (!this.isLoadingCategories) this.generateDonutGraph();
      this.isLoadingProjects = false;
    },
    generateDonutGraph() {
      const radius = Math.min(this.width, this.height) / 2 - this.margin;

      const svg = select("#donutChart")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
                .attr("max-width", this.width)
        .attr("max-width", this.width)

        .append("g")
        .attr(
          "transform",
          "translate(" + this.width / 2 + "," + this.height / 2 + ")"
        );

      const pieShape = pie().value((d) => {
        return d.value;
      });

      const d = pieShape(this.data);

      const inner = arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius * 0.78);

      const outer = arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

      svg
        .selectAll("slices")
        .data(d)
        .enter()
        .append("path")
        .attr("d", inner)
        .attr("fill", (d) => {
          return d.data.color;
        })
        .attr("stroke", "#353335")
        .style("stroke-width", "8px")
        .style("opacity", 0.7);

      svg
        .selectAll("polyline")
        .data(d)
        .enter()
        .append("polyline")
        .attr("stroke", "#EFEAE1")
        .style("fill", "none")
        .style("stroke-width", "1px")
        .attr("points", function (d) {
          const sliceCenter = inner.centroid(d);
          const outerEdge = outer.centroid(d);
          let horizontalExtender = outer.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          horizontalExtender[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
          return [sliceCenter, outerEdge, horizontalExtender];
        });

      svg
        .selectAll("text")
        .data(d)
        .enter()
        .append("text")
        .text(function (d) {
          return d.data.name;
        })
        .attr("transform", function (d) {
          let outerEdge = outer.centroid(d);
          const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          outerEdge[0] = radius * 0.99 * (midAngle < Math.PI ? 1 : -1);
          outerEdge[1] += 4;
          return "translate(" + outerEdge + ")";
        })
        .style("text-anchor", function (d) {
          const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midAngle < Math.PI ? "start" : "end";
        })
        .style("fill", "#EED9B7");

      svg
        .append("text")
        .text(this.projectCount)
        .attr("font-size", "77px")
        .attr("font-weight", "lighter")
        .style("fill", "#EFEAE1")
        .attr("transform", "translate(" + -44 + "," + 14 + ")");

      svg
        .append("text")
        .text("Projects")
        .attr("font-size", "20px")
        .attr("font-weight", "lighter")
        .style("fill", "#EED9B7")
        .attr("transform", "translate(" + -36 + "," + 43 + ")");
    },
  },
};
</script>

<style>
</style>