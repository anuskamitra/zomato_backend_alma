const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const ordersRouter=require("./routes/ordersRoute");

// const createDatabase = require('./createDatabase');

require('dotenv').config();
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/orders",ordersRouter);
const connection = require('./connector')

const port=process.env.PORT||5000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
// createDatabase()   this line is to be uncommented when you want to create the table 
module.exports = app;