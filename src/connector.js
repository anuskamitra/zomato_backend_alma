

//This file is required to connect the database.
var mysql = require('mysql');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });



var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD_OF_DATABASE,
    database: process.env.DATABASE_NAME,
    Port:process.env.DATABSE_PORT,
    multipleStatements: true,
   

});
con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;