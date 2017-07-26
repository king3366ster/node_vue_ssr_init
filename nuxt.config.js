module.exports = {
  /*
  ** Headers of the page
  */
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
        const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
        cssLoader.use.push('postcss-loader')
      }
    }
  }
}
