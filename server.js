const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const resolve = filename => path.join(__dirname, filename)
const { createBundleRenderer } = require('vue-server-renderer')

const isDev = process.env.NODE_ENV === 'development'

const server = express()

/* 资源缓存设置 */
// 静态目录资源缓存
const staticServer = (path, cache) => express.static(resolve(path), {
  maxAge: cache && (!isDev) ? 1000 * 60 * 60 * 24 : 0
})

// 动态页面缓存
const microCache = LRU({
  max: 100,
  maxAge: 1000
})

// 组件cache
const bundleCache = LRU({
  max: 1000,
  maxAge: 1000 * 60 * 15,
  // this is only needed when vue-server-renderer is npm-linked
  basedir: resolve('./dist'),
  runInNewContext: false
})

const cacheable = !isDev

/* 静态资源模板 */
// 默认模板
const template = fs.readFileSync(resolve('templates/index.html'), 'utf-8')
// 404模板
const template404 = fs.readFileSync(resolve('templates/404.html'), 'utf-8')

/* 渲染器 */
const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    cache: bundleCache
  }))
}

let renderer
let readyPromise

if (isDev) {
  // 动态babel编译
  readyPromise = require('./build/setup-dev-server')(server, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}

// 页面渲染函数
const render = (req, res) => {
  let reqTime = Date.now()
  res.setHeader("Content-Type", "text/html")

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      // res.status(404).end('404 | Page Not Found')
      res.status(404).end(template404)
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      return res.end(hit)
    }
  }

  const context = {
    title: '网易云信', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.end(html)
    if (cacheable) {
      microCache.set(req.url, html)
    }
    if (isDev) {
      console.log(`whole request: ${req.url} ${Date.now() - reqTime}ms`)
    }
  })
}

server.get('*', (req, res) => {
  readyPromise.then(() => render(req, res))
})

server.use('/dist', staticServer('./dist', true))
server.use('/public', staticServer('./public', true))

const port = process.env.PORT || 7002
server.listen(port, () => {
  console.info(`server start at port ${port}`)
})