angular.module('mgmgr').controller('placesCtrl', ['$scope', 'placesService', 'visitsFactory',
  function($scope, places, visits) {
    $scope.add = places.add;
    $scope.places = places.all;

    $scope.page = 0;
    $scope.perPage = 10;
    $scope.numPages = function() { return Math.ceil($scope.places.length/$scope.perPage); }
  }
]);

