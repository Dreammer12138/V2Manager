import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from "./routers"
import App from './App.vue'
import axios from 'axios'

// add axios in ajax
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

Vue.config.devtools = true

// add VueRouter
Vue.use(VueRouter)

// add route rules
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
