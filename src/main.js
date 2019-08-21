import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
