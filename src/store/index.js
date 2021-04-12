import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios/axios";
import router from "../router/index";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: "",
    password: ""
  },

  mutations: {
    login: (state, payload) => {
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      state.username = payload.username;
      state.password = payload.password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      axios.defaults.username = "";
      axios.defaults.password = "";
      state.isLoggedIn = false;
      router.push({ path: "/login" })
    }
  },

  actions: {
    login: (context, payload) => {
      context.commit("login", payload);
    },
    logout: (context) => {
      context.commit("logout");
    }
  },

  getters: {
    getIsLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    getUsername: (state) => {
      return state.username;
    },
    getPassword: (state) => {
      return state.password;
    }
  }
});

export default store;
