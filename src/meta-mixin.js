function getMeta (vm) {
  // 组件可以提供一个 `title` 选项
  // 此选项可以是一个字符串或函数
  const { title, keywords, description, author, robots, viewport } = vm.$options
  let result = {}
  if (title) {
    result.title = typeof title === 'function'
      ? title.call(vm)
      : title
  }
  if (keywords) {
    result.keywords = typeof keywords === 'function'
      ? keywords.call(vm)
      : keywords
  }
  if (description) {
    result.description = typeof description === 'function'
      ? description.call(vm)
      : description
  }
  if (author) {
    result.author = typeof author === 'function'
      ? author.call(vm)
      : author
  }
  if (robots) {
    result.robots = typeof robots === 'function'
      ? robots.call(vm)
      : robots
  }
  return result
}

const serverMetaMixin = {
  created () {
    const { title, keywords, description, author, robots, viewport } = getMeta(this)
    if (title) {
      this.$ssrContext.title = title
    }
    if (keywords) {
      this.$ssrContext.keywords = keywords
    }
    if (description) {
      this.$ssrContext.description = description
    }
    if (author) {
      this.$ssrContext.author = author
    }
    if (robots) {
      this.$ssrContext.robots = robots
    }
  }
}
const clientMetaMixin = {
  mounted () {
    const { title, keywords, description, author, robots, viewport } = getMeta(this)
    if (title) {
      document.title = title
    }
    if (keywords) {
      document.keywords = keywords
    }
    if (description) {
      document.description = description
    }
    if (author) {
      document.author = author
    }
    if (robots) {
      document.robots = robots
    }
  }
}
// 可以通过 webpack.DefinePlugin 注入 VUE_ENV
export default process.env.VUE_ENV === 'server'
  ? serverMetaMixin
  : clientMetaMixin
