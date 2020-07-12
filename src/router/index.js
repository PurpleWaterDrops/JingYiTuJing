import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
	{
	    path: '/',
	    name: 'IndexPage',
	    component: IndexPage
  	},
  	{
	    path: '/indexpage',
	    redirect: '/'
  	},
  	{
	  	path: '/homepage',
	  	name: 'HomePage',
	  	component: HomePage
 	},  
]

const router = new VueRouter({
 	mode: 'history',
 	base: process.env.BASE_URL,
  	routes,
  	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})

export default router
