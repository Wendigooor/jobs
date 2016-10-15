angular.module('agencies')

.factory('Agency', [
  '$resource', function($resource) {
    var url;
    url = '/api/agencies/:id';
    return $resource(url, {}, {
      get: {method:'GET'},
      query: {method:'GET', isArray:true},
      create: {method:'POST'},
      update: {method:'PATCH'},
      remove: {method:'DELETE'}
    });
  }
]);
