import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
