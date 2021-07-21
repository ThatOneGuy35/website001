import Vue from 'vue'
import Vuex from 'vuex'
//Add modules we need
import access from './modules/access'
// import firebase from 'firebase/app'


// Load Vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
  },
  actions: {
  },

  modules: {
    access,
  }
})
