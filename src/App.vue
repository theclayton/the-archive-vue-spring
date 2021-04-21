<template>
  <v-app>
    <div class="all darker">
      <top-nav class="padding-nav-drawer"></top-nav>
      <nav-drawer></nav-drawer>
      <router-view class="padding-nav-drawer" />
      <archive-footer class="padding-nav-drawer"></archive-footer>
    </div>
  </v-app>
</template>

<script>
import NavDrawer from "./components/Navigation/NavDrawer.vue";
import ArchiveFooter from "./components/Navigation/Footer.vue";
import TopNav from "./components/Navigation/TopNav.vue";

export default {
  name: "App",
  components: {
    NavDrawer,
    ArchiveFooter,
    TopNav,
  },
};
</script>

<style>
.all {
  min-height: 100vh;
}
.padding-nav-drawer {
  padding-left: 56px;
}
.pointer {
  cursor: pointer;
}
</style>