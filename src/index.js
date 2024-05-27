const express = require('express')
const bodyParser = require("body-parser");
const path = require('path');
const ordersRouter=require("./routes/ordersRoute");
const redirectRoute=require("./routes/redirectRoute")
const connection = require('./connector')
//  const createDatabase = require('./createDatabase');

const app = express()

app.set('view engine', 'ejs');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); //dotenv is required to access the env file.

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",redirectRoute)
app.use("/orders",ordersRouter);

app.use((req, res) => {
    res.status(404).send("PAGE NOT FOUND !!")
});

const port=process.env.PORT||5000;

app.listen(port, () => console.log(`App listening on port ${port}!`))
//  createDatabase()
//    --this line is to be uncommented when you want to create the table 
module.exports = app;