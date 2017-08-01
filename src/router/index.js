import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomePage = () => import('~/pages/index.vue')
const SolutionPage = () => import('~/pages/solution.vue')
const CasePage = () => import('~/pages/case.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      // { path: '/new/:page(\\d+)?', component: createListView('new') },
      { path: '/', component: HomePage },
      { path: '/solution', component: SolutionPage },
      { path: '/case/:id', component: CasePage }
    ]
  })
}
