import Vue from 'vue'

export default {
  setData (state, data) {
    console.log(data)
    Vue.set(state.solution, 'test', data)
  }
}
