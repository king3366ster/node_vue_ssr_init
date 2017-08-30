const winston = require('winston')
const morgan = require('morgan')
const fs = require('fs')

let filter = new RegExp(/^(\/dist)|(\/res)|(\/css)/)

const accessLog = './logs/access.log'

createFile()

function createFile () {
  fs.open(accessLog, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('log file already exists')
        return
      }
    }
    fs.writeFileSync(accessLog, '')
  })
}

let logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: accessLog,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: (message, encoding) => {
    logger.info(message)
  }
}

console.log = function () {
  logger.log.apply(logger, arguments)
}

console.info = function () {
  logger.info.apply(logger, arguments)
}

console.warn = function () {
  logger.warn.apply(logger, arguments)
}

console.error = function () {
  logger.error.apply(logger, arguments)
}

console.debug = function () {
  logger.debug.apply(logger, arguments)
}

module.exports = function () {
  return morgan('tiny', {
    skip: (req, res) => {
      return filter.test(req.originalUrl)
    },
    stream: logger.stream
  })
}
