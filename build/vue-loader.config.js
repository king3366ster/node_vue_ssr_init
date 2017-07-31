module.exports = {
  extractCSS: process.env.NODE_ENV !== 'development',
  preserveWhitespace: false,
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 3 versions']
    })
  ]
}
