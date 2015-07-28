(function () {

    angular.module('lunchApp')
        .controller('RestaurantEditCtrl', ['Restaurant', '$stateParams', '$state', function (Restaurant, $stateParams, $state) {
            var id = $stateParams._id;
            this.restaurant = Restaurant.get({restaurantId: id});

            this.saveRestaurant = function () {
                Restaurant.update({ restaurantId: id }, this.restaurant, function (savedRestaurant) {
                    $state.go('restaurantDetail', savedRestaurant);
                });
            };
        }]);

})();