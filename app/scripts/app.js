'use strict';

/**
 * @ngdoc overview
 * @name frisbskiApp
 * @description
 * # frisbskiApp
 *
 * Main module of the application.
 */
angular
  .module('frisbskiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).
      when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'RulesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
