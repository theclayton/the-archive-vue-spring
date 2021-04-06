<template>
  <v-app>
    <div class="all darker">
      <top-nav class="padding-nav-drawer"></top-nav>
      <nav-drawer></nav-drawer>
      <router-view class="padding-nav-drawer" />
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import NavDrawer from "./components/Navigation/NavDrawer.vue";
import Footer from "./components/Navigation/Footer.vue";
import TopNav from "./components/Navigation/TopNav.vue";

export default {
  name: "App",
  components: {
    NavDrawer,
    Footer,
    TopNav,
  },
  methods: {
    autoLogin() {
      const expirationTime = new Date(this.expiration).getTime();
      const now = new Date().getTime();

      if (expirationTime > now) {
        this.$store.dispatch("autoLogin");
      }
    },
  },
  computed: {
    expiration() {
      return this.$store.getters.getExpiration;
    },
  },
  beforeMount() {
    this.autoLogin();
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
</style>