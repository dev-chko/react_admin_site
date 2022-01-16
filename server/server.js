const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
require('console-stamp')(console, { pattern: 'yyyy-mm-dd HH:MM:ss.l' });

const app = express();

var cors = require('cors');
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//mysql init 

var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'thunder-lottery-prod.cluster-ctgaq8dwv5qw.ap-east-1.rds.amazonaws.com',
  user     : "thunder",
  password : "Tjsej!0716",
  database : 'thunder_lottery',
  multipleStatements: true,
});

// connect to DB Server
connection.connect(function(err) {
  if (err) {
    console.error('error connecting to DB Server: ' + err.stack);
    exit;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/lotteryEvents', (req,res) => {
  let sql = 'SELECT * FROM thunder_lottery.lottery_drawings_test;'
  connection.query(sql, (error,result) => {
    if (error) {
      res.send({
        error : true,
        message: 'error'
      })
      console.log(error)
    }
    const total = result.length;
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', total);
    res.json(result)
    console.log(res)
  })
})


app.get('/events', (req,res) => {
  let sql = 'SELECT * FROM thunder_lottery.lottery_drawings_test;'
  console.log(sql)
  connection.query(sql, (err, result) => {
    if (err) {
      res.send({
        error:true,
        messgae:err
      })
      console.log(err)
    }
    const total = result.length;
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', total);
  })
  if (Object.values(req.query).length==4) {
    console.log('if')
    let key = req.query['_sort']
    let sort = req.query['_order']
    let start = req.query['_start']
    let end = req.query['_end']
    let sql = `SELECT * FROM thunder_lottery.lottery_drawings_test ORDER BY idx ${sort} LIMIT ${start}, ${end};`
    console.log(sql)
    connection.query(sql, async (err, result) => {
      if (err) {
        res.send({
          error:true,
          messgae:err
        })
        console.log(err)
      }
      res.json(result)
      // console.log(res)
    })
  }
  
});



app.use(express.static(path.join(__dirname, '/../build')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port 8080.");
});