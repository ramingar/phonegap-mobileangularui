angular.module('PhonegapMobileangularui.controllers.Main', [
    'PhonegapMobileangularui.services.Geolocation',
    'PhonegapMobileangularui.services.Forecast'
])

.controller('MainController', function($scope, getCurrentPosition, getWeather){
    getCurrentPosition(function(position){
        getWeather(
            position.coords.latitude,
            position.coords.longitude,
            function(location, weather){
                $scope.location = location;
                $scope.weather = weather;
            });
    });
});