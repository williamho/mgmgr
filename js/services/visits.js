angular.module('mgmgr').factory('visitsFactory', ['$firebase', 'firebaseUrl', 'placesService',
  function($firebase, firebaseUrl, places) {
    function visitsForPlace(id) {
      var sync = $firebase(new Firebase(firebaseUrl + '/visits/' + id))
      var visits = sync.$asArray();
      return visits;
    }

    return function(placeId) {
      var visits = visitsForPlace(placeId);

      return {
        add: function(visit) {
          visits.$add(visit.date.getTime());
          places.updateLastVisit(placeId, visit.date.getTime());
        },
        all: visits
      };
    };
  }
]);

