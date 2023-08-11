import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db_teams',
});

connection.connect();

export const consult = (sql, values = '', rejectMessage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(rejectMessage);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
};

export default connection;
