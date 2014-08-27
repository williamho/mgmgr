var app = angular.module('mgmgr', ['firebase', 'ngRoute']);

app.value('firebaseUrl', 'https://mgmgr.firebaseio.com');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/places', {
        templateUrl: 'templates/places.html',
        controller: 'placesCtrl'
      })
      .when('/visits/:placeId', {
        templateUrl: 'templates/visitsCtrl.html',
        controller: 'visitsCtrl'
      })
      .otherwise({
        redirectTo: '/places'
      })
  }
]);

app.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});

