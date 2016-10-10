var getFiles = require('./getFilesWithPromises.js'),
		chai = require('chai'),
		should = chai.should(),
		expect = chai.expect;


describe('addNumbers', function() {
	it('should add two numbers together', function() {
		getFiles.addNumbers(1, 3).should.equal(4);
	});
});
