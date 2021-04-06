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

    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data: () => ({
    loading: true,
    recentProjects: [],
  }),
};
</script>
