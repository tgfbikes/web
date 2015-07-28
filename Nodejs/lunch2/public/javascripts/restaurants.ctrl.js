(function () {
  angular.module('lunchApp')
    .controller('RestaurantsCtrl', ['Restaurant', '$scope', '$filterProvider', function (Restaurant, $scope, $filterProvider) {
          this.restaurants = Restaurant.query();

          this.searchText = '';
          this.filterRestaurants = function ($filter) {
              console.log(this.searchText);
          };

          var ctrl = this;
          $scope.$on('restaurantCreated', function (event, restaurant) {
              ctrl.restaurants.push(restaurant);
        });
    }]);
})();
