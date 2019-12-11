const express = require('express')
const app = express()
const port = 3005
const Cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
//app.use(bodyParser);
app.use(Cors());

var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'airlanggayudiatama'
});



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/aa', (req, res) => {
  res.send('Hello World!')
  
})

app.post('/getDataGahjiByNIP', function (req, res) {
  //conn.connect()
console.log(req.body.nip+"  ATAS")
  conn.query("SELECT * FROM penggajian NATURAL JOIN karyawan NATURAL JOIN jabatan WHERE sts=1 AND nip='"+req.body.nip+"'", (err, result, fld) =>{
  console.log(result)
try{
if(result.length == 1){
  res.json(result)
}else{
  res.status(503).end();
}
}catch(ee){
console.log(ee.message)
  res.status(500).json(ee.message)
  
}
  //res.json(result)
  //res.send('OKEE')
})
  //  conn.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))