angular.module('mgmgr').controller('placesCtrl', ['$scope', 'placesService', 'visitsFactory',
  function($scope, places, visits) {
    $scope.add = places.add;
    $scope.places = places.all;
  }
]);

