<template>
  <v-footer dark padless inset color="dark">
    <v-row no-gutters justify="center">
      <v-btn
        v-for="link in links"
        :key="link.name"
        class="my-4"
        color="light"
        text
        rounded
        link
        :to="link.route"
      >{{ link.name }}</v-btn>
      <v-col class="darkRed py-3 text-center light--text" cols="12">
          Developed by
          <strong>Clayton Ward</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Featured", route: "/feature" },
      { name: "All Projects", route: "/projects" },
      { name: "API Ref", route: "/api" },
      { name: "Login", route: "/login" },
    ],
  }),
};
</script>

<style>
</style>