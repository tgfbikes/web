var fs = require('fs');

fs.readdir('files', function(err, files) {
	if (err) throw err;
	files.forEach(function(file) {
		console.log(file);
		fs.readFile('files/' + file, 'utf-8', function (err, content) {
			if (err) throw err;
			console.log(content);
		});
	});
});
