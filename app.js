const Nuxt = require('nuxt')
const app = require('express')()

const port = process.env.PORT || 7002

// 用指定的配置对象实例化 Nuxt.js
let config = require('./nuxt.config.js')
config.dev = (process.env.NODE_ENV === 'dev')

const nuxt = new Nuxt(config)

// 用 Nuxt.js 渲染每个路由
app.use(nuxt.render)

// 在开发模式下启用编译构建和热加载
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

// 服务端监听
app.listen(port, '0.0.0.0')
console.log('Server listening on localhost:' + port)