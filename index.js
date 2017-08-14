var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
global.config = require('./config/config');

var jwt = require('jsonwebtoken');
var User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/demo');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello world');
});

app.use(require('./controllers'));

app.listen(3000, function () {
  console.log('App running on 3000');
});
