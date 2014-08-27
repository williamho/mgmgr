angular.module('mgmgr').factory('visitsFactory', ['$firebase', 'firebaseUrl', 'placesService',
  function($firebase, firebaseUrl, places) {
    function visits(id) {
      var sync = $firebase(new Firebase(firebaseUrl + '/visits/' + id))
      var visits = sync.$asArray();
      return visits;
    }

    return function(placeId) {
      var visits = visits(placeId);
      this.add = function(visit) {
        visits.$add(visit);
        places.updateLastVisit(placeId, visit.when);
      }
      this.all = visits;
    };
  }
]);

