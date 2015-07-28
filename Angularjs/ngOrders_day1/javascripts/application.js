(function()
{
	// Define the ordersApp module
	angular.module('ordersApp', [
		'ui.router'
	])

		.config([
			'$stateProvider',
			'$urlRouterProvider',
			function($stateProvider, $urlRouterProvider)
			{
				$urlRouterProvider.otherwise('/new');

				$stateProvider
					// Create
					.state('newOrder',
					{
						url: '/new',
						controller: 'OrderFormCtrl',
						controllerAs: 'formVm',
						templateUrl: 'templates/order_form.html'
					})
					// Read
					.state('allOrders',
					{
						url: '/all',
						controller: 'OrdersCtrl',
						controllerAs: 'ordersVm',
						templateUrl: 'templates/orders.html'
					})

					.state('viewOrder',
					{
						url: '/details/:id',
						controller: 'OrderDetailsCtrl',
						controllerAs: 'detailsVm',
						templateUrl: 'templates/order_details.html'
					});
			}
		]);

}).call(this);
