import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import {store} from './store/index.js';
import jQuery from 'jquery'
global.$ = jQuery
import 'babel-polyfill'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
