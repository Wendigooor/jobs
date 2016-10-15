angular.module('agencies')

.controller('agenciesController', [
  '$scope', 'Agency', function($scope, Agency) {
    Agency.query().$promise.then( function(result) {
      $scope.agencies = JSON.parse(result.agencies);
      $scope.agencies.forEach(function(entry) {
        entry.tagNames = tagNames(entry.tags);
      });
      $scope.possibleGrades = result.grades;
    });

    $scope.agency = new Agency({});
    $scope.createAgency = function() {
      if (!$scope.isNotAbleToCreate()) {
        $scope.agency.$create( function(result) {
          result.agency = JSON.parse(result.agency)
          if (result && result.agency && result.agency.id) {
            result.agency.tagNames = tagNames(result.agency.tags);
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

    $scope.searchByTags = function (tags) {
      if (!tags) {
        tags = "";
      }

      var tags = tags.split(',');
      return function (item) {
        if (tags == "")
          return true;
        var inArray = false;
        item.tagNames.forEach( function(entryTag) {
          if (tags.indexOf(entryTag) > -1) {
            inArray = true;
          }
        });
        return inArray;
      };
    };

    var tagNames = function (tags) {
      return tags.map(function(a) { return a.name; });
    };

  }
]);
