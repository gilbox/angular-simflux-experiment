var app = angular.module('app');

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/test', {
      templateUrl: 'test.html',
      controller: 'TestCtrl'
    })
    .when('/results', {
      templateUrl: 'results.html',
      controller: 'ResultsCtrl'
    });

  $locationProvider.html5Mode(true);
});