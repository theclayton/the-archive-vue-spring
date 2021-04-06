<template>
  <v-navigation-drawer fixed permanent expand-on-hover dark color="dark">
    <v-list nav>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon color="lighter">mdi-home-circle</v-icon>
        </v-list-item-icon>
        <v-img
          src="../../assets/archive-light.png"
          max-width="100"
        ></v-img>
      </v-list-item>

      <v-list-item link to="/feature">
        <v-list-item-icon>
          <v-icon color="lighter">mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="light--text">Featured</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/projects">
        <v-list-item-icon>
          <v-icon color="lighter">mdi-file-cabinet</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="light--text">All Projects</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/api">
        <v-list-item-icon>
          <v-icon color="lighter">mdi-code-json</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="light--text">API Ref</v-list-item-title>
      </v-list-item>

      <v-list-item href="https://github.com/theclayton/the-archive-vue-spring" target="_blank">
        <v-list-item-icon>
          <v-icon color="lighter">mdi-xml</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="light--text">Source Code</v-list-item-title>
      </v-list-item>

      <v-menu top dark :offset-x="offset">
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-bind="attrs" v-on="on" @click="getRecentProjects()">
            <v-list-item-icon>
              <v-icon color="lighter">mdi-history</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="light--text">Recent Projects</v-list-item-title>
          </v-list-item>
        </template>

        <v-list>
          <v-progress-circular v-if="loading" indeterminate color="#dddddd"></v-progress-circular>

          <v-list-item
            v-for="project in recentProjects"
            :key="project.title"
            link
            :to="getProjectLink(project.title)"
          >
            <v-list-item-icon>
              <v-img :src="project.thumbnail" max-width="24" max-height="24" class="rounded-circle"></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ project.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ project.dateCreated }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "../../axios/axios";

export default {
  data: () => ({
    loading: true,
    recentProjects: [],
  }),
  methods: {
    async getRecentProjects() {
      try {
        const res = await axios.get("/projects/recent/projects");
        this.recentProjects = res.data.projects;
        this.loading = false;
      } catch {
        console.log("Error loading recent projects");
      }
    },
    getProjectLink(name) {
      return "/project/" + name;
    },
  },
};
</script>
