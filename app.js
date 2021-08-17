const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 80;

const dotenv = require('dotenv');
dotenv.config();

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10,
// };

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

//------------------

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  port: process.env.DATABASE_PORT,
});
connection.connect();

app.get('/', (req, res) => {
  connection.query('select * from Albums', (err, result) => {
    if (err) throw err;
    res.writeHead(200, {
       'Content-Type': 'text/plain; charset=utf-8',
    });
    res.end(JSON.stringify(result));
  });
});

app.get('/1', (req, res) => {
  connection.query(
    'select songtitle from song where song.AlbumKey = 1',
    (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result));
    }
  );
});

app.get('/2', (req, res) => {
  connection.query(
    'select songtitle from song where song.AlbumKey = 2',
    (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result));
    }
  );
});

app.get('/3', (req, res) => {
  connection.query(
    'select songtitle from song where song.AlbumKey = 3',
    (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result));
    }
  );
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다`);
});
