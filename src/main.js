import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

require('@/store/subscriber')

axios.defaults.baseURL = 'https://www.mrpoolal.com/api'
Vue.config.productionTip = false
Vue.config.devtools = true

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

