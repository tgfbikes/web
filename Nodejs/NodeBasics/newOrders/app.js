
var express = require('express'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');

// Initialize express
var app = express();

// Connect to mongo at localhost to database orders
mongoose.connect('mongodb://localhost/orders');

// Set views to come from views directory
app.set('views', './views');
// Set jade as view engine
app.set('view engine', 'jade');

// Have express use order router to render views
app.use('/views', require('./routes/order.route.js'));

// Create local server listening on port 8080
app.listen(8080, function () {
  console.log('Server running..');
});
