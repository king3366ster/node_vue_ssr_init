<template>
  <div>
    这里是案例页 {{item}}
  </div>
</template>

<script>

export default {
  asyncData ({ store, route }) {
    return store.dispatch('getCase', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.solution.casetopdetail
    }
  }
}
</script>
