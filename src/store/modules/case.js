import Vue from 'vue'
import queryData from '@/model/queryData'

export default {
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  actions: {
    getCase ({ commit }) {
      const casetopPromise = queryData('casetopdetail').then(records => {
        commit('setCaseTopDetail', records)
        return Promise.resolve()
      }).catch(error => {
        return Promise.resolve()
      })
      return Promise.all([casetopPromise])
    }
  },
  mutations: {
    setCaseTopDetail (state, records) {
      Vue.set(state.solution, 'casetopdetail', records)
    }
  }
}