<template>
  <div class="d-flex mx-5 mt-1 align-center">
    <div>
      <h5 class="text-body-1 font-weight-light light--text">Archive Featured Projects</h5>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn large icon class="mr-2" link to="/search">
        <v-icon color="lighter">mdi-magnify</v-icon>
      </v-btn>

      <v-menu offset-y dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn large icon v-bind="attrs" v-on="on">
            <v-icon color="lighter">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/login" v-if="!isLoggedIn">
            <v-list-item-icon>
              <v-icon color="lighter">mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="light--text">Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logOut()" v-if="isLoggedIn">
            <v-list-item-icon>
              <v-icon color="lighter">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="light--text">Logout</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/admin-panel" :disabled="!isLoggedIn">
            <v-list-item-icon>
              <v-icon color="lighter">mdi-account-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="light--text">Admin</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/my-account" :disabled="!isLoggedIn">
            <v-list-item-icon>
              <v-icon color="lighter">mdi-account-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="light--text">My Account</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.getIsLoggedIn;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch({
        type: "logout",
      });
    },
  },
};
</script>