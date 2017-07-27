module.exports = {
  head: {
    title: '官网测试',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet', href: '/assets/main.css'
      // }
    ],
  },
  css: [
    // { src: '~/assets/css/main.css', lang: 'css' },
    { src: '~/assets/scss/test.scss', lang: 'scss' } 
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  cache: {
    // 缓存组件的最大数目，当第 1001 个组件被添加至缓存中时， 第一个被缓存的组件会从缓存中移除。
    max: 1000,
    // 缓存时间，单位毫秒
    maxAge: 60000 * 10
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-import')(),
      require('autoprefixer')({
        browsers: ['Android >= 4', 'iOS >= 7', 'Chrome >= 10', 'Firefox >= 10', 'IE >= 10']
      })
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = 'eval-source-map'
        const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
        cssLoader.use.push('postcss-loader')
      }
    }
  }
}
