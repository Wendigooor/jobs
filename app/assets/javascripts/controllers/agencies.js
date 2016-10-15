angular.module('agencies')

.controller('agenciesController', [
  '$scope', 'Agency', function($scope, Agency) {
    $scope.agencies = Agency.query();
    console.log($scope.agencies)
  }
]);
