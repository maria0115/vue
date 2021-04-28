import Vue from 'vue'
import App from './App.vue'
import VueX from 'vuex';
import router from './routes/index.js';
import store from './store/index.js';

Vue.use(VueX);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
