(function()
{
	// Load the ordersApp module
	angular.module('ordersApp')

		// Define a new controller on the module
		.controller('OrderFormCtrl', [
			'Order',
			'$state',
			function(Order, $state)
			{
				/** @type {Order} to capture order data */
				this.order = new Order();

				/** Fired by the form ngSubmit */
				this.addOrder = function()
				{
					this.order.save();
					this.order = new Order();
					$state.go('allOrders');
				};

				/** Function to set a breakpoint in for debugging */
				this.formDebug = function()
				{
					console.log('debugging OrderFormCtrl');
				};
			}
		]);

}).call(this);
