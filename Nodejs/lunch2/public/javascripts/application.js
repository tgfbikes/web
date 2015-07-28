(function () {
  angular.module('lunchApp', ['ngResource', 'ui.router'])
      .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/all');
          $stateProvider
              .state('restaurantList', {
                  url: '/all',
                  controller: 'RestaurantsCtrl',
                  controllerAs: 'restaurantsCtrl',
                  templateUrl: 'templates/restaurants.html'
              })
              .state('restaurantNew', {
                  url: '/new',
                  controller: 'RestaurantNewCtrl',
                  controllerAs: 'formCtrl',
                  templateUrl: 'templates/restaurantsForm.html'
              })
              .state('restaurantDetail', {
                  url: '/detail/:_id',
                  controller: 'RestaurantDetailCtrl',
                  controllerAs: 'detailCtrl',
                  templateUrl: 'templates/restaurantDetail.html'
              })
              .state('restaurantEdit', {
                  url: '/edit/:_id',
                  controller: 'RestaurantEditCtrl',
                  controllerAs: 'formCtrl',
                  templateUrl: 'templates/restaurantsForm.html'
              });
      }]);
})();
