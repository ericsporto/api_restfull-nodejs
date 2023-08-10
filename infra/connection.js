import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user:'root',
    password: 'root',
    database:'db_teams'
})

connection.connect()

export default connection