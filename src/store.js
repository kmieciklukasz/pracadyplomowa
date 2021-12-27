import Vue from 'vue'
import Vuex from 'vuex'
import authAxios from "./auth-axios";
import router from './router';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,

  },
  getters: {  //sprawdzenie czy użytkownik jest zautentyfikowany
    isAuth: state => state.token !== null
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    clearAuth(state) {
      state.token = null;
      state.userId = null;

    },


  },
  actions: {
    async login({ commit }, payload) {
      try {
        let response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyDqT_JsUn7wBQQxJzSL1SmtDwdNvqp7a9U', payload);
        console.log(response);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        })
      } catch (e) {
        console.log(e);
      }
    },
    async login2({ commit }, payload) {
      try {
        let response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyBYjVBwmJBckUsh7SiIbsd9CWU1BZboA58', payload);
        console.log(response);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        })
      } catch (e) {
        console.log(e);
      }
    },
    async login3({ commit }, payload) {
      try {
        let response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyAU-aZAehjZgeaGqv2EkJXZlDr8lfg1vvE', payload);
        console.log(response);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        })
      } catch (e) {
        console.log(e);
      }
    },

    logout({ commit }) {
      commit('clearAuth');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expires');
      router.push('/');

    },
    async register({ commit }, payload) {
      try {
        let response = await authAxios.post('accounts:signUp?key=AIzaSyDqT_JsUn7wBQQxJzSL1SmtDwdNvqp7a9U', payload);
        console.log(response);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        })
      } catch (e) {
        console.log(e);
      }
    },



  }
})
