import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '~/store/state'
import solution from '~/store/modules/solution'
import cases from '~/store/modules/case'

let storeObj = Object.create({
  state
})

storeObj = Object.assign(storeObj, solution)
storeObj = Object.assign(storeObj, cases)

export function createStore () {
  return new Vuex.Store(storeObj)
}
