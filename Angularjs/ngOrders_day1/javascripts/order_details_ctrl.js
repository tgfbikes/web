(function ()
{
  angular.module('ordersApp')

    .controller('OrderDetailsCtrl', [
      '$stateParams',
      'Order',
      function ($stateParams, Order)
      {
        var orderId = $stateParams.id; // {id: ''}
        this.order = Order.getById(orderId);
      }
    ]);
}).call(this);
