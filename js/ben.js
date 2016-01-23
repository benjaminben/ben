(function() {

  'use strict';

  angular
    .module('ben', ['ui.router', 'ngAnimate'])
    .config(router)

  router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function router ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'templates/projects.html'
      })
      .state('contact', {
        url: '^/contact',
        templateUrl: 'templates/contact.html'
      })
      .state('about', {
        url: '^/about',
        templateUrl: 'templates/about.html'
      });
    // $locationProvider.html5Mode(true);
  };

})();
