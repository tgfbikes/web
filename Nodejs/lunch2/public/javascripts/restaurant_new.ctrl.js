(function () {
  angular.module('lunchApp')
    .controller('RestaurantNewCtrl', ['Restaurant', '$rootScope', '$state', function (Restaurant, $rootScope, $state) {
      this.restaurant = new Restaurant();

      this.saveRestaurant = function () {
        this.restaurant.$save();
        $rootScope.$broadcast('restaurantCreated', this.restaurant);
        this.restaurant = new Restaurant();
        $state.go('restaurantList');
      };
    }]);
})();
