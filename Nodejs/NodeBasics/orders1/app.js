// packages
var express = require('express'),
	http = require('http'),
	morgan = require('morgan'),
	skipper = require('skipper'),
	jade = require('jade'),
	methodOverride = require('method-override');

// modules
var data = require('./data.js');
var Orders = require('./orders.js');
var OrderController = require('./order_controller.js');

var app = express();

// views
app.set('views', './templates');

// view engine
app.set('view engine', 'jade');

// config
app.use(morgan('dev'));
app.use(skipper()); // helps retreive data from user
app.use(methodOverride('_method'));

// routes
app.use('/', express.static('public'));

app.get('/', function(req, res) {
	res.redirect('/orders');
});

app.use('/orders', require('./order.router.js'));

var server = http.createServer(app);
server.listen(8080);
