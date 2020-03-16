// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Router from './router'
//全局使用ElementUI
Vue.use(ElementUI)
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: Router
})
