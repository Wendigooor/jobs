angular.module('agencies')

.controller('agenciesController', [
  '$scope', 'Agency', function($scope, Agency) {
    Agency.query().$promise.then( function(result) {
      $scope.agencies = result.agencies;
      $scope.possibleGrades = result.grades;
    });

    $scope.agency = new Agency({});
    $scope.createAgency = function() {
      if (!$scope.isNotAbleToCreate()) {
        $scope.agency.$create( function(result) {
          if (result && result.agency && result.agency.id) {
            $scope.agencies.push(result.agency);
          }
          $scope.agency = new Agency({});
        });
      }
    };


    var labelMap = {
      jedi: "label-warning",
      padawan: "label-danger",
      master: "label-success"
    };

    $scope.agencyClass = function(agency) {
      return labelMap[agency.grade];
    };

    $scope.isNotAbleToCreate = function() {
      return $scope.agency == null ||
             !$scope.agency.name ||
             !$scope.agency.description ||
             $scope.agency.grade == null;
    };

  }
]);
