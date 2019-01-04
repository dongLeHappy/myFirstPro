// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = "http://wwtliu.com";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'

//请求拦截器
Axios.interceptors.request.use(function(config){
  if(config.method == 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},function (error) {
  return Promise.reject(error)
})

//响应拦截器
Axios.interceptors.response.use(function (response) {
  return response
},function (error) {
  return Promise.reject(error)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
