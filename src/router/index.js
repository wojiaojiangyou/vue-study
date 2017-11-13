import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import detail from '../pages/detail'
import earth from '../pages/details/earth'
import loud from '../pages/details/loud'
import mounton from '../pages/details/mounton'
import car from '../pages/details/car'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  	{
  		path:'/',
  		component:index

  	},
  	{
  		path:'/detail',
  		component:detail,
  		redirect:'/detail/earth',
  		children:[
  			{
  				path:'earth',
  				component:earth
  			},
  			{
  				path:'loud',
  				component:loud
  			},
  			{
  				path:'mounton',
  				component:mounton
  			},
  			{
  				path:'car',
  				component:car
  			}
  		]
  	},
  	{
  		path:'*',
  		redirect:'/detail'
  	}
  ]
})
