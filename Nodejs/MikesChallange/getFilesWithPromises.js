'use strict'

var Q = require('q'),
		fs = require('fs'),
		fs_readdir = Q.denodeify(fs.readdir),
		fs_readFile = Q.denodeify(fs.readFile);

var exports = module.exports() {};
var getFiles = {

	readDirectory:
	 	function() {
			fs_readdir('files').then(readFile, consoleError);
	},
			
	readFile:
	 	function(files) {
			files.map(function(file) {
				console.log(file);
				fs_readFile('files/' + file, 'utf-8').then(console.log);
			});
	},
			
	consoleError:
	 	function(err) {
			console.log(err);
	},

	addNumbers: 
		function(num1, num2) {
			return num1 + num2;
	}
};

module.exports = getFiles;
