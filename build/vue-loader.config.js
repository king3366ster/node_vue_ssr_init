module.exports = {
  // 将CSS 提取到单独的 CSS 文件中
  extractCSS: process.env.NODE_ENV !== 'development',
  preserveWhitespace: false,
  postcss: [
    require('precss')(),
    require('postcss-cssnext')({
      browsers: ['last 3 versions']
    })
  ]
}
