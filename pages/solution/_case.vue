<template>
  <div>
    solution solutionCase: {{solutionCase}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      solutionCase: this.$route.params.case
    }
  }
}
</script>
