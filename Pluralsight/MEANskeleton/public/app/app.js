(function () {
  angular.module('app', ['ngResource', 'ngRoute']);

  angular.module('app')
    .config(function($routeProvider, $locationProvider) {
      // Have to include base(href='/') in head tag of html or jade doc
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});
  });

  angular.module('app')
    .controller('mainCtrl', function() {
      this.myVar = "Hello Angular, Stephen is Awesome!";
    });
}).call(this);
