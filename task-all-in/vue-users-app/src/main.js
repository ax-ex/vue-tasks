import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Copy from 'v-copy'
import VTooltip from 'v-tooltip'

Vue.use(VueAxios, axios)
Vue.use(Copy)
Vue.use(VTooltip)

import 'bootstrap/dist/css/bootstrap.css'
import '@/style/v-tooltip.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
