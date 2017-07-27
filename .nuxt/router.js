'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _88138140 = () => import('D:\\web\\node\\node-website\\pages\\index.vue' /* webpackChunkName: "pages/index" */)

const _d978b572 = () => import('D:\\web\\node\\node-website\\pages\\solution\\index.vue' /* webpackChunkName: "pages/solution" */)

const _6d63b457 = () => import('D:\\web\\node\\node-website\\pages\\price.vue' /* webpackChunkName: "pages/price" */)

const _6be06bf8 = () => import('D:\\web\\node\\node-website\\pages\\solution\\_case.vue' /* webpackChunkName: "pages/solution-case" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _88138140,
			name: "index"
		},
		{
			path: "/solution",
			component: _d978b572,
			name: "solution"
		},
		{
			path: "/price",
			component: _6d63b457,
			name: "price"
		},
		{
			path: "/solution/:case",
			component: _6be06bf8,
			name: "solution-case"
		}
    ]
  })
}
