import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import app from "./module/app"
Vue.use( Vuex )

const store = new Vuex.Store( {
  modules: {
    user,
    app,
  },
  state: {},
  mutations: {

  },
  actions: {

  }
} )

export default store
