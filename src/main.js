import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import firebase from 'firebase'

import '../node_modules/vuetify/dist/vuetify.css'
import router from './router/main.js'

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
