const conf = require('../config');
const redis = require('redis');

const redisConnect = () => {
  const port = conf.redis.port || 6379
  const host = conf.redis.host || '127.0.0.1'
  const opts = conf.redis.opts || {}

  return new Promise( (resolve, reject) => {
    let releaseTimer = null
    const client = redis.createClient(port, host, opts)

    function release (){
      clearTimeout(releaseTimer)
      if (client.connected) {
        client.quit()
      }       
    }

    client.auth(conf.redis.opts && conf.redis.opts.auth_pass || '', (error, res) => {
      if (error) {
        reject({
          error
        })
      }
      // console.info('redis auth:', res)
    })

    client.on('connect', () => {
      resolve({
        client,
        release
      })
      //两种都可以断掉与redis的连接， end()很粗暴，不管3721，一下子退出来了，而quit()则是先将语句处理完毕再干净地退出，斯文得很 
      //client.end()
      
      releaseTimer = setTimeout( () => {
        release()
      }, 3000)
    })
    //错误监听？  
    client.on("error", (error) => {  
      console.error("Redis Error " + error) 
      release()
      reject({
        error
      })
    })
  })
}

// redisConnect().then( ({client, release}) => {
//   client.set('website::weixin_access_token', 'test1', 'EX', 10)
//   client.get('website::weixin_access_token', (error, record) => {
//     console.log(1,record)
//   })
//   release()
// })

module.exports = redisConnect
