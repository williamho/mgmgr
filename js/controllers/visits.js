angular.module('mgmgr').controller('visitsCtrl', ['$scope', '$stateParams', 'placesService', 'visitsFactory',
  function($scope, $stateParams, places, visitsFactory) {
    $scope.place = places.find($stateParams.placeId);
    var visits = visitsFactory($stateParams.placeId);
    $scope.newDate = {
      date: new Date()
    }

    $scope.add = visits.add;

    $scope.visits = visits.all;

    $scope.page = 0;
    $scope.perPage = 10;
    $scope.numPages = function() { return Math.ceil($scope.visits.length/$scope.perPage); }
  }
]);

