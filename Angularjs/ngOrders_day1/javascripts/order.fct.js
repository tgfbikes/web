(function()
{
	// Fetch the ordersApp module
	angular.module('ordersApp')

		// Define the Order factory
		.factory('Order', [
			'$filter',
			function($filter)
			{

				////////////////////////////
				// Order Collection Stuff //
				////////////////////////////

				// Create my Order constructor function
				var Order = function(orderIn)
				{
					// type => object
					orderIn = orderIn || {};
					// type => number
					this.id = orderIn.id || Date.now();
					// all type => string
					this.name = orderIn.name || '';
					this.food = orderIn.food || '';
					this.server = orderIn.server || '';
					this.pickup = orderIn.pickup || '';

				};

				/** @type {Array} to hold all orders */
				Order.list = [];

				Order.getById = function (orderId)
				{
					var results = $filter('filter')(Order.list,
					{
						id: orderId
					});

					return results[0] || null;
				};

				Order.persist = function()
				{
					var json = angular.toJson(Order.list);
					localStorage.setItem('ordersApp_Order', json);
				};

				////////////////////////
				// Single Order Stuff //
				////////////////////////

				// Grab a reference to the prototype
				var order = Order.prototype;

				/** @type {Num} */
				order.id = 0;
				/** @type {String} */
				order.name = '';
				/** @type {String} */
				order.food = '';
				/** @type {String} */
				order.server = '';
				/** @type {String} */
				order.pickup = '';

				/**
				 * Add the order to our list
				 * @return {void}
				 */
				order.save = function()
				{
					Order.list.push(this);
					Order.persist();
				};

				//////////////////////////
				// Make Order available //
				//////////////////////////

				// Get json data stored as ordersApp_Order => type string || null
				var json = localStorage.getItem('ordersApp_Order');
				// Place json data into array || make array if none => type array
				Order.list = angular.fromJson(json) || [];
				// Loop through array
				angular.forEach(Order.list, function(order, index)
				{
					// Convert the plain object into an Order object
						order = new Order(order);
					// Swap the Order object in place of the plain object
						Order.list.splice(index, 1, order);
				});

				return Order;
			}
		]);

}).call(this);
