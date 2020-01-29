import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueLazyload from 'vue-lazyload'
import VueScrollTo from 'vue-scrollto'
import APIService from "./api/api";



Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: './../public/images/loading.gif',
  attempt: 1
})

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));
window.toastr = require('toastr')


Vue.use(VueScrollTo)
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