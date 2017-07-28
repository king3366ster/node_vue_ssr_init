export const state = () => {
  return {
    pageData: {}
  }
}

export const mutations = {
  updateData (state, data) {
    console.log(data)
    state.pageData = data.pageData || {}
  }
}
