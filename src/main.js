import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SideNav from './components/SideNav'

Vue.component('SideNav', SideNav);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
