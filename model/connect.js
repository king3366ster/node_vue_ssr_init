const config = require('../config')
const mysql = require("mysql")

const pool = mysql.createPool(config.db)
  
const query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {  
      if (err) {  
        reject(err)
      } else {  
        conn.query(sql, (qerr, vals, fields) => {  
          // 释放连接 
          conn.release()
          if (qerr) {
            reject(qerr)
          } else {
            resolve(vals)
          }
        })
      }  
    })
  })
}
  
module.exports = query