var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://neon/djholt');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/', express.static('public'));

app.get('/', function (req, res) {
  res.render('hello');
});

app.use('/', require('./routes/restaurants.js'));

app.listen(3000, function () {
  console.log("Server ready...");
});
