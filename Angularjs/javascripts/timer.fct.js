
(function(){
	
	// fetches the module defined in application.js
	angular.module('myApp')

		// define a new factory on our 'myApp' module
		.factory('Timer', ['$interval', 
			function($interval) 
			{
				var Timer = 
				{
					interval: function(fn) 
					{
						$interval(fn, 1000);
					}
				};

			return Timer;
		}])

}).call(this);
