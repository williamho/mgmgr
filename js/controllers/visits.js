angular.module('mgmgr').controller('visitsCtrl', ['$scope', '$firebase', 'firebaseUrl',
  function($scope, $firebase, firebaseUrl) {
    var sync = $firebase(new Firebase(firebaseUrl + '/visits'))
    var places = sync.$asArray();

    $scope.add = function(visit) { visits.$add(visit); };
    $scope.remove = function(visit) { visits.$remove(visit); };

    $scope.visits = visits;;
  }
]);

