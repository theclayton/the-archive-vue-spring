import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios/axios";
// import router from "../router/index";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,

  },

  mutations: {
    login: (state, payload) => {
      try {
        axios.defaults.auth.username = payload.username;
        axios.defaults.auth.password = payload.password;
      } catch (error) {
        alert(error)
      }

      axios.defaults.headers.post['Content-Type'] = 'application/json'

      state.isLoggedIn = true;
    },
    logout: (state) => {
      axios.defaults.username = "";
      axios.defaults.password = "";
      state.isLoggedIn = false;
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
  }
});

export default store;
