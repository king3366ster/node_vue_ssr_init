# 云信官网项目

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
# or
$ node app

# generate static project
$ npm run generate
```

## 参考资料
- [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
- [Nuxt.js chinese docs](https://zh.nuxtjs.org/guide).

## 目录结构
### 资源目录
- assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
- static 用于做静态资源文件夹，诸如运营活动、静态图片地址等
  - 此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。
  - 目录对应关系如： static/promotion/home.html => /promotion/home.html

### 页面路面
- pages 用于组织官网资源页面
  - 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。
  - 不带下划线的为直接路由，如：price.vue => /price
  - 带下划线的为动态路由，如 solution/_case.vue => /solution/:case
- components 用于组织应用的 Vue.js 组件。
  - 用于给普通页面调用组件，诸如滚轮动效
  - 这些组件不会像页面组件那样有 asyncData 方法的特性，即无法做异步操作
- layouts 用于组织应用的布局组件
  - 默认为default.vue
  - 404等错误页面会去查找error.vue
  - 官网全局布局建议 header、footer作为component，然后在layouts中引入

### 插件目录
- plugins 专用于vue扩展工具插件
  - 组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。

### 数据目录
- store 组织应用的 Vuex 状态树 文件。用于vuex数据驱动，前后端数据交换的管理层
  - 在 store 目录下创建一个 index.js 文件可激活这些配置。
- middleware 主要用于后端渲染前处理工作
- api 后端数据管理

### nuxt.config.js 文件
nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
该文件名为Nuxt.js保留的，不可更改。

### package.json 文件
package.json 文件用于描述应用的依赖关系和对外暴露的脚本接口。
