let baseConfig = {

}

let envConfig = {
  dev: {
    db: {
      host: '10.240.76.144',
      user: 'admin',
      password : '123456',
      database : 'test'
    }
  },
  test: {
    db: {
      host: '10.240.76.144',
      user: 'admin',
      password : '123456',
      database : 'test'
    }
  },
  prod: {
    db: {
      host: '10.240.76.144',
      user: 'admin',
      password : '123456',
      database : 'test'
    }
  }
}

let config = {}

if (process.env.NODE_ENV === 'development') {
  config = Object.assign(baseConfig, envConfig.dev)
} else {
  config = Object.assign(baseConfig, envConfig.prod)
}

module.exports = config