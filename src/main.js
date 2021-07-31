import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import axios from 'axios'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'aos/dist/aos.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Particles from "particles.vue";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.use(Particles);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.prototype.$urlAPI = 'https://adamask.io/'

Vue.prototype.CallAPI = function (method, url, data, callResponse, callError) {
  chrome.storage.local.get(["token"], function (result) {
    let config = {
      headers: {
        "Authorization": "Bearer " + result.token
        // "Authorization": "Bearer " + localStorage.getItem("token")
      },
    };
    let urlAPI = 'https://adamask.io/'
    switch (method) {
      case "post":
        axios.post(urlAPI + url, data, config).then((response) => {
          callResponse(response)
        })
          .catch((error) => {
            callError(error)
          })
        break;
      case "get":
        axios.get(urlAPI + url, config)
          .then((response) => {
            callResponse(response)
          })
          .catch((error) => {
            callError(error)
          })
        break;
      case "put":
        axios.put(urlAPI + url, data, config)
          .then((response) => {
            callResponse(response)
          })
          .catch((error) => {
            callError(error)
          })
        break;
      case "delete":
        axios.delete(urlAPI + url, config)
          .then((response) => {
            callResponse(response)
          })
          .catch((error) => {
            callError(error)
          })
        break;
    }
  });

}

Vue.prototype.loading = (status) => document.querySelector(".loading").style.display = status

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
