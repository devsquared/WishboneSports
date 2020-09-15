import Vue from 'vue'
import App from './App.vue'
import '@/styles/custom.scss'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
