import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Router from 'vue-router';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
routes: 
	[
	{
		path: '/',
		name: 'app'
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	}
	]
})
