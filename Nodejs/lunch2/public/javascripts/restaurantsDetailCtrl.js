(function () {
    angular.module('lunchApp')
        .controller('RestaurantDetailCtrl', ['Restaurant', '$stateParams', '$state', function (Restaurant, $stateParams, $state) {

        var id = $stateParams._id;
        this.restaurant = Restaurant.get({restaurantId: id});

        this.deleteRestaurant = function () {
                Restaurant.remove({ restaurantId: id }, function () {
                   $state.go('restaurantList');
                });
            };
        }]);

})();