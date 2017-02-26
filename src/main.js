import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './app'
import FastClick from 'fastclick'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css'

Vue.use(MuseUI)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production'
})

/**
new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    //app: App
		App
  },
	router,
});
**/

new Vue({
	template: '<app/>',
	components: {
		App
	},
	router,
}).$mount('#app')

/**
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
**/