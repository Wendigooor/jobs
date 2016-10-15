angular.module('agencies')

.directive('tags', function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function replace(text) {
        var transformedInput = text.replace(/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?.\/]/g, '');
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(replace);
    }
  }; 
});
