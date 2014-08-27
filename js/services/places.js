angular.module('mgmgr').service('placesService', ['$firebase', 'firebaseUrl',
  function($firebase, firebaseUrl) {
    var sync = $firebase(new Firebase(firebaseUrl + '/places'))
    var places = sync.$asArray();

    this.add = function(place) { places.$add(place); };
    this.save = function(place) { places.$save(place); };
    this.updateLastVisit = function(id, when) {
      var place = places.$getRecord(id);
      place.lastVisited = when;
      places.$save(place);
    };
    this.find = places.$getRecord;
    this.all = places;
  }
]);

