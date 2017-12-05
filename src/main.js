import Vue from 'vue'
import App from './App.vue'
import VueIntroduction from './lib/index'
Vue.use(VueIntroduction)

new Vue({
  el: '#app',
  render: h => h(App)
})
