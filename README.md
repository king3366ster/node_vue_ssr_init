# VUE SSR 工程初始化配置
## 简介
本工程为基于vue-ssr(前后端同构)开发的极简系统，需要搭配mysql数据库使用。
确切的说是一个工程初始化框架，适合用于内容发布、官方网站等应用，数据管理后台可以使用诸如python django这样的框架。

## 工程初始化运行
### 环境配置
- node6+ npm3+
- npm install / yarn

### 开发环境运行
- npm run dev

### 线上环境运行
- npm run build
- node server / npm start

## 使用技术栈
- webpack + postcss
- vue + vue-router + vuex + express
- vue 前后端同构 [参考文档](https://ssr.vuejs.org/zh/)
- mysql + cache

## 工程目录结构
- build
  - 工程webpack构建、postcss构建相关配置

- config
  - 后端数据层公共配置，如mysql配置等

- model
  - 后端数据层
    - connect，连接mysql数据库，返回promise
    - queryConfig, sql集合
    - queryData, 用于直接取数据暴露接口

- public
  - 静态资源文件夹
    - postcss 待编译css文件
    - css 编译后css文件
    - res 其他资源文件

- src
  - 前后端同构资源代码
    - entry-client.js 前端入口
    - entry-server.js 后端入口
    - app.js 前后端公共入口
  - router
    - 路由，基于vue-router
  - store
    - 同构数据中心，基于vuex
    - 前后端唯一数据交互模块（可以取数据库数据）
  - pages
    - 页面
  - components
    - 组件

- templates
  - 页面模板