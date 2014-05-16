'use strict';

angular
  .module('ngTutorialApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ssh', {
        templateUrl: 'views/ssh.html',
        controller: 'SshCtrl'
      })
      .when('/shiftedit', {
        templateUrl: 'views/shiftedit.html',
        controller: 'ShifteditCtrl'
      })
      .when('/yeoman', {
        templateUrl: 'views/yeoman.html',
        controller: 'YeomanCtrl'
      })
      .when('/yeoman-test', {
        templateUrl: 'views/yeoman-test.html',
        controller: 'YeomanTestCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/pbr', {
        templateUrl: 'views/pbr.html',
        controller: 'PbrCtrl'
      })
      .when('/history-repeats', {
        templateUrl: 'views/history-repeats.html',
        controller: 'HistoryRepeatsCtrl'
      })
      .when('/tooling', {
        templateUrl: 'views/tooling.html',
        controller: 'ToolingCtrl'
      })
      .when('/cookie', {
        templateUrl: 'views/cookie.html',
        controller: 'CookieCtrl'
      })
      .when('/knight', {
        templateUrl: 'views/knight.html',
        controller: 'KnightCtrl'
      })
      .when('/angular-strengths', {
        templateUrl: 'views/angular-strengths.html',
        controller: 'AngularStrengthsCtrl'
      })
      .when('/scaffold-app', {
        templateUrl: 'views/scaffold-app.html',
        controller: 'ScaffoldAppCtrl'
      })
      .when('/main-route', {
        templateUrl: 'views/main-route.html',
        controller: 'MainRouteCtrl'
      })
      .when('/espn-factory', {
        templateUrl: 'views/espn-factory.html',
        controller: 'EspnFactoryCtrl'
      })
      .when('/headlines', {
        templateUrl: 'views/headlines.html',
        controller: 'HeadlinesCtrl'
      })
      .when('/wire-headlines', {
        templateUrl: 'views/wire-headlines.html',
        controller: 'WireHeadlinesCtrl'
      })
      .when('/yo-directives', {
        templateUrl: 'views/yo-directives.html',
        controller: 'YoDirectivesCtrl'
      })
      .when('/espn-factory-resources', {
        templateUrl: 'views/espn-factory-resources.html',
        controller: 'EspnFactoryResourcesCtrl'
      })
      .when('/spa-index', {
        templateUrl: 'views/spa-index.html',
        controller: 'SpaIndexCtrl'
      })
      .when('/ror', {
        templateUrl: 'views/ror.html',
        controller: 'RorCtrl'
      })
      .when('/ctrl-fn-call', {
        templateUrl: 'views/ctrl-fn-call.html',
        controller: 'CtrlFnCallCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
