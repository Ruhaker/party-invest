/* eslint-disable */
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import Home from './components/Home';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import FindInvestor from './components/FindInvestor.vue';
import FindProject from './components/FindProject.vue';

// import routes from './routes';

// Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/FindInvestor', component: FindInvestor },
    { path: '/FindProject', component: FindProject },
			
];
console.log('passou aqui')
const router = new VueRouter({routes});

export default router;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


