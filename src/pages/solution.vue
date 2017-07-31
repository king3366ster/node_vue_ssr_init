<template>
  <div>
    这里是案例页 {{item}}
  </div>
</template>

<script>

export default {
  asyncData ({ store, route }) {
    return store.dispatch('getData', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.getters.solution.test
    }
  }
}
</script>
