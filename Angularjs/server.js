var express = require('express'),
		http = require('http');

//create new express app
var app = express();

//serve the current direcotry
app.use(express.static('.'));

//start the http server
http.createServer(app).listen(8080);
