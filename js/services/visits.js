angular.module('mgmgr').factory('visitsFactory', ['$firebase', 'firebaseUrl', 'placesService',
  function($firebase, firebaseUrl, places) {
    function visitsForPlace(id) {
      var sync = $firebase(new Firebase(firebaseUrl + '/visits/' + id))
      var visits = sync.$asArray();
      return visits;
    }

    return function(placeId) {
      var visits = visitsForPlace(placeId);

      var updateLastVisit = function() {
        places.updateLastVisit(placeId, visits.sort()[0].$value);
      };

      return {
        add: function(visit) {
          visits.$add(visit.date.getTime()).then(updateLastVisit)
        },
        remove: function(visit) {
          visits.$remove(visit).then(updateLastVisit)
        },
        update: updateLastVisit,
        all: visits
      };
    };
  }
]);

