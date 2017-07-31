export default {
  getData ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(id)
        let nid = id + Math.random()
        commit('setData', nid)
        resolve()
      }, 1000)
    })
  }
}
