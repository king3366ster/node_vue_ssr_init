import config from '../config'


// import mysql from 'mysql'
// const query = sql => {
//   const connection = mysql.createConnection(config.db)
//   connection.connect()
//   //查询
//   connection.query(sql, function(err, rows, fields) {
//     if (err) throw err
//     resolve(rows)
//   })
//   //关闭连接
//   connection.end()
// }

// const pool = mysql.createPool(config.db)

// const query = (sql) => {
//   return new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         console.error(err)
//         reject(err)
//       }
//       connection.query(sql, (err, rows) => {
//         connection.release()
//         if (err) {
//           console.error(err)
//           reject(error)
//         } else {
//           console.log(rows)
//           resolve(rows)
//         }
//       })
//     })
//     // setTimeout(() => {
//     //   resolve({
//     //     date: (new Date()).getTime()
//     //   })
//     // }, 1000)
//   })
// }

const mysql = require('promise-mysql');

const query = (sql) => {
  return mysql.createConnection(config.db).then((conn) => {
    let result = conn.query(sql)
    conn.end()
    return result
  })
}


export default {
  query
}
