(function () {
  angular.module('app', [
    'ngResource',
    'ngRoute',
    'mainFct'
  ]);

  angular.module('app')
    .config(function($routeProvider, $locationProvider) {
      // Have to include base(href='/') in head tag of html or jade doc
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});
  });


}).call(this);
