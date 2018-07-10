import Vue from 'vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'

import routers from './router/router'
import store from './store/'
import ajax from './utils/ajax'
import './utils/rem'
import './style/reset'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
}).$mount('#app')