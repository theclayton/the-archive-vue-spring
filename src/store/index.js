import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios/axios";
import router from "../router/index";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: "",
    token: "",
    expiration: "",
  },

  mutations: {
    login: (state, payload) => {
      const expiration = new Date(
        new Date().getTime() + payload.expiresIn
      );

      localStorage.setItem("username", payload.username);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("expiration", expiration);

      axios.defaults.headers.common['archive-token'] = payload.token;
      axios.defaults.headers.post['Content-Type'] = 'application/json'

      state.isLoggedIn = true;
      state.username = payload.username;
      state.token = payload.token;
      state.expiration = expiration;
    },

    autoLogin: (state) => {
      let username = localStorage.getItem("username");
      let token = localStorage.getItem("token");
      let expiration = new Date(localStorage.getItem("expiration"));

      axios.defaults.headers.common['archive-token'] = token;
      axios.defaults.headers.post['Content-Type'] = 'application/json'

      state.isLoggedIn = true;
      state.username = username;
      state.token = token;
      state.expiration = expiration;
    },

    logout: async (state) => {
      try {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");

        state.isLoggedIn = false;
        state.username = "";
        state.token = "";
        state.expiration = "";

        router.push({ path: '/' });
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },

    logoutTimer: (state) => {
      const now = new Date().getTime();
      const expiration = new Date(state.expiration).getTime();

      setTimeout(() => store.dispatch({ type: "logout" }), expiration - now);
    },
  },

  actions: {
    login: (context, payload) => {
      context.commit("login", payload);
      context.dispatch("logoutTimer");
    },

    autoLogin: (context) => {
      context.commit("autoLogin");
      context.dispatch("logoutTimer");
    },

    logout: (context) => {
      context.commit("logout");
    },

    logoutTimer: (context) => {
      context.commit("logoutTimer");
    }
  },

  getters: {
    getIsLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    getUsername: (state) => {
        if (!state.username) return localStorage.getItem('username');
        return state.username;
    },
    getToken: (state) => {
        if (!state.token) return localStorage.getItem('token');
        return state.token;
    },
    getExpiration: (state) => {
        if (!state.expiration) return localStorage.getItem('expiration');
        return state.expiration;
    }
  }
});

export default store;
