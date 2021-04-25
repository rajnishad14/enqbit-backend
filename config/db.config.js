const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

// mysql connection

const dbCon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

dbCon.connect((err) => {
  if (err) throw err
  console.log('connection successfull')
})

module.exports = dbCon
