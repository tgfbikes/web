
(function(){

	// fetch our module defined in application.js
	angular.module('myApp')
	
		// define a new controller on our 'myApp' module
		.controller('ApplicationCtrl', [
			'Timer', 
		function(Timer) {
			this.imageNames = [
				'ilovehim.jpg',
				'ilovehimmore.jpg'
			];

			this.timerSeconds = 0;
			Timer.interval(function () {
				this.timerSeconds++;
			}.bind(this));

			this.doAlert = function() {
				alert('You clicked me from angular');
			};
		}]);

}).call(this);
