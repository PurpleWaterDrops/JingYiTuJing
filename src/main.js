import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
