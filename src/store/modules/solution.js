import Vue from 'vue'
import queryData from '@/model/queryData'

export default {
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  actions: {
    getSolution ({ commit }) {
      const casetopPromise = queryData('casetop').then(records => {
        commit('setCaseTop', records)
        return Promise.resolve()
      }).catch(error => {
        return Promise.resolve()
      })
      return Promise.all([casetopPromise])
    }
  },
  mutations: {
    setCaseTop (state, records) {
      Vue.set(state.solution, 'casetop', records)
    }
  }
}