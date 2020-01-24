import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: './../public/images/loading.gif',
  attempt: 1
})

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

window.toastr = require('toastr')

Vue.use(VueToastr2)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import APIService from "./api/api";
Vue.prototype.$API = new APIService();



Vue.config.productionTip = false

Vue.addScript = function (src) {
  var s = document.createElement("script");
  s.setAttribute("src", src);
  document.body.appendChild(s);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')