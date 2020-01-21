import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from'../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommend from '../views/Recommend.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
	//总共就可以分为两层路由，首先就是首页占据了，整个页面，另一个就是登录之后的那个知乎页面,它们两是同一个等级的。
  {
		//父亲可以带杠，子路由不要带杠
    path: '/',
    component: Nav,
		children:[{
			path:'/',
			redirect:'home'
		},{
			path:'home',
			// 路由懒加载就是说我不点击它不会加载的
			component:()=>import('../views/Home.vue'),
			// 一组和home有关的
			children:[{
				// 这个杠代表它已经到home了，但是Home里面还有子界面，但是它不知道怎么选
				path:'/',
				// 让它直接定向到了推荐
				redirect:'recommend'
			},{
				path:'recommend',
				component:()=>import('../views/Recommend.vue')
			},{
				path:'follow',
				component:()=>import('../views/Follow.vue')
			},{
				path:'hot',
				component:()=>import('../views/Hot.vue')
			}]
		},{
		path:'explore',
		component:()=>import('../views/Explore.vue'),
	},{
		path:'special/all',
		component:()=>import('../views/Special.vue'),
	},{
			path:'question/waiting',
		component:()=>import('../views/QuestionWaiting.vue'),
	},]
  },
  {
    path: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
