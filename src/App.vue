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
export default {
  data () {
    return {}
  } 
}
</script>
