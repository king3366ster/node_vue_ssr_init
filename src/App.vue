<template>
  <div id="nim">
    <header class="header">
      这里是header
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import metaMixin from '~/meta-mixin.js'

export default {
  mixins: [metaMixin],
  title () {
    return this.seoData.title || '网易云通信与视频'
  },
  keywords () {
    return this.seoData.keywords || ''
  },
  description () {
    return this.seoData.description || ''
  },
  author () {
    return this.seoData.author || ''
  },
  robots () {
    return this.seoData.robots || ''
  },
  computed: {
    seoData () {
      return this.$store.state.seoData || {}
    }
  }
}
</script>
