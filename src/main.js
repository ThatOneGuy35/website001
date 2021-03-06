import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { auth } from './firebase'
import store from './store'

Vue.config.productionTip = false

let app 
auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

