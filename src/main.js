import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser, faCartShopping)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



// vue跳到指定位置套件
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeMount(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
