var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');

mongoose.connect('mongodb://localhost/sking');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/', express.static('public'));

app.get('/hello', function (req, res) {
  res.render('hello');
});

app.get('/ngrestaurants', function (req, res) {
  res.render('ngrestaurants');
});

app.use('/', require('./routes/restaurants.js'));

var port = 3030;
app.listen(port, function () {
  console.log("Server ready...Listening on port " + port);
});
