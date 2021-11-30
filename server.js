const fs = require('fs');
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = process.env.PORT ||5000;



app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password ,
    port : conf.port ,
    database: conf.database
});

connection.connect();

app.get('/api/hello' , (req , res) => {
    
    connection.query(
        "SELECT * FROM banking.client",
        (err,rows, fields) => {
            res.send(rows);
        }
    )

});

app.get('/api/viewcard' , (req , res) => {
    
    connection.query(
        "SELECT * FROM banking.client",
        (err,rows, fields) => {
            res.send(rows);
        }
    )

});

app.listen(port , () => console.log(`Listening on port ${port}`));