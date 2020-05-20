import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import auth from './auth'

Vue.use(Vuex)

Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    auth
  }
})
