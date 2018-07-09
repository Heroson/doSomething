import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'


import ajax from './utils/ajax'
import './utils/rem'

import './styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'

import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
