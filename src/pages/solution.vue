<template>
  <div>
    这里是案例页 {{item}}
  </div>
</template>

<script>

export default {
  asyncData ({ store, route }) {
    return store.dispatch('getSolution')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      console.log(this.$store.state.casetop)
      return this.$store.state.solution.casetop
    }
  }
}
</script>
