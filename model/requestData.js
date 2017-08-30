const https = require('https')
const http = require('http')
const url = require('url')
const querystring = require('querystring')

const requestData = (urlStr, config = {}) => {
  const options = url.parse(urlStr)

  let httpProtocol = http
  if (/https:/.test(options.protocol)) {
    httpProtocol = https
  }

  if (config.method === 'POST') {
    options.method = config.method
    options.headers = {
      'Content-Type': config.contentType || 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  return new Promise( (resolve, reject) => {
    const req = httpProtocol.request(options, (res) => {
      // console.log(`STATUS: ${res.statusCode}`)
      // console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
      let resBody = ''
      res.setEncoding('utf8')
      res.on('data', (chunk) => {
        resBody += chunk
      });
      res.on('end', () => {
        try {
          resBody = JSON.parse(resBody)
        } catch (e) {
        }
        resolve(resBody)
      })
    })
    req.on('error', (e) => {
      reject(e)
    })

    if (options.data) {
      switch (options.headers && options.headers['Content-Type']) {
        case 'application/json':
          req.write(JSON.stringify(options.data))
          break
        case 'application/x-www-form-urlencoded':
          req.write(querystring.stringify(options.data))
          break
        default:
          req.write(options.data + '')
          break
      }
    }
    req.end()
  })
}

// const weixin_appid = 'wxed1a2ce7809f5154'
// const weixin_app_secret = '92f32b8f7266b9adbca3f25e96fa3278'

// let weixin_url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${weixin_appid}&secret=${weixin_app_secret}`
// requestData(weixin_url).then(res => {
//   if (res.errerrcode) {
//     console.error(res)
//   } else {
//     console.info(res)
//   }
// })

// let weixin_url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=${jsapi}`
// requestData(weixin_url).then(res => {
//   if (res.errerrcode) {
//     console.error(res)
//   } else {
//     console.info(res)
//   }
// })

module.exports = requestData
