var app = angular.module('mgmgr', ['firebase', 'ui.router', 'ui.bootstrap']);

app.value('firebaseUrl', 'https://mgmgr.firebaseio.com');

app.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('places', {
        url: '',
        templateUrl: 'templates/places.html'
      })
      .state('visits', {
        url: '/places/:placeId',
        templateUrl: 'templates/visits.html'
      })
      ;
  }
]);

app.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});

