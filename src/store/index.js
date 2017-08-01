import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '~/store/state'
import solution from '~/store/modules/solution'
import cases from '~/store/modules/case'

let storeObj = Object.create({
  state,
  actions: {},
  mutations: {},
})

const merge = obj => {
  let state = Object.assign(storeObj.state, obj.state)
  let actions = Object.assign(storeObj.actions, obj.actions)
  let mutations = Object.assign(storeObj.mutations, obj.mutations)
  storeObj = Object.assign(storeObj, {
    state,
    actions,
    mutations
  })
}

merge(solution)
merge(cases)

console.log(storeObj)

export function createStore () {
  return new Vuex.Store(storeObj)
}
