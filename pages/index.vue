<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        HELLO TEST NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <div class="links">
        <a href="/solution">解决方案</a>
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  head: {
    title: '网易云通信与视频|真正稳定的IM即时通讯云服务',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '网易云信,云信,网易云,通信与视频,即时通讯,IM,即时通讯云,IM云,云服务' },
      { hid: 'description', name: 'description', content: '云信是网易公司倾力打造的基于PaaS的即时通讯IM云服务,开发者通过集成云信客户端SDK和云端OPEN API,即可快速接入强大的IM功能。' }
    ]
  },
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
