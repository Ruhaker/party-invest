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
import Sponsors from './components/Sponsors.vue'
import IncludeProject from './components/IncludeProject.vue'
import HomeLogged from './components/HomeLogged';
import FindInvestorLogged from './components/FindInvestorLogged.vue';
import FindProjectLogged from './components/FindProjectLogged.vue';
import IncludeProjectLogged from './components/IncludeProjectLogged.vue'

// import routes from './routes';

// Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/Logged', component: HomeLogged },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/FindInvestor', component: FindInvestor },
    { path: '/FindInvestorLogged', component: FindInvestorLogged },
    { path: '/FindProject', component: FindProject },
    { path: '/FindProjectLogged', component: FindProjectLogged },
    { path: '/Sponsors', component: Sponsors },
    { path: '/IncludeProject', component: IncludeProject },
    { path: '/IncludeProjectLogged', component: IncludeProjectLogged }
			
];
console.log('passou aqui')
const router = new VueRouter({routes});

export default router;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


