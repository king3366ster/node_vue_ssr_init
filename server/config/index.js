let db = {}

if (process.env.NODE_ENV === 'dev') {
  db = {
    host     : '10.240.76.144',
    user     : 'admin',
    password : '123456',
    database : 'test'
  }
}

export default {
  db
}
