const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const user = require('./Code/Routes/user');
const port = 4665;


//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/GotBot';
mongoose.connect(mongoDB, function (err) {

   if (err) throw err;

   console.log('Successfully connected');});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/user', user);
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server is listening on 4665`)
})
