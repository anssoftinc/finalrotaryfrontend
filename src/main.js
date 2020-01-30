import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueLazyload from 'vue-lazyload'
import VueScrollTo from 'vue-scrollto'
import APIService from "./api/api";


window.toastr = require('toastr')
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
Vue.use(VueToastr2)



Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: './../public/images/loading.gif',
  attempt: 1
})

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));



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