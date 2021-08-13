const express = require('express');
const app = express();
const port = 3000;

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10,
};

//------------------
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@a1123581321',
  database: 'CustomerList',
});

connection.connect();

// connection.query('SELECT * from Customerz', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('Customers :', rows);
// });

app.get('/', (req, res) => {
  connection.query('select * from Customerz', (err, result) => {
    if (err) throw err;
    let answer = JSON.stringify(result);
    res.writeHead(200, defaultCorsHeader);
    res.end(answer);
  });
});

app.listen(port, () => {
  console.log('example');
});
