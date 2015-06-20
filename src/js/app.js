angular.module('PhonegapMobileangularui', [
  'ngRoute',
  'mobile-angular-ui',
  'PhonegapMobileangularui.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});