// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './pages/layout'
import router from './router/index'

Vue.prototype.$axios=axios;
Vue.use(Vuex);

// component--->actions  触发:dispatch
// actions--->mutations  触发:commit
// mutations--->state  触发:commit
//getters 获取state的数据
//modules 其它store的集合


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
  // template: '<App/>',
  // components: { App }
})
