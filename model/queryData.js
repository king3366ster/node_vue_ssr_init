/*
  获取数据，使用示例：
  queryData('seomanager').then(data => {
  })
  queryType在queryConfig中
*/

const LRU = require('lru-cache')
const queryConfig = require('./queryConfig')
const connect = require('./connect')

const cache = LRU({
  max: 100,
  maxAge: 1000 * 60
})

const queryData = (queryType) => {
  return new Promise ((resolve, reject) => {
    const options = queryConfig[queryType]
    if (!options) {
      reject(`${queryType} not in table configs`)
    }
    const sql = options.sql
    connect(sql).then(records => {
      let result = null
      let unikey = options.unikey || null
      switch (options.type) {
        case 'map':
          result = Object.create(null)
          records.forEach(item => {
            result[item[unikey]] = item
          })
          break
        case 'list':
          result = records
      }
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = queryData