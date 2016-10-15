(function(){    

  angular.module('agencies', []);
  angular.module('sortlist', ['ui.router', 'ngResource', 'agencies']);

  angular.module('sortlist').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('agencies', {
          abstract: true,
          template: '<ui-view/>'
        })
          .state('agencies.list', {
            url: '/',
            templateUrl: '/app/views/agencies/index.html',
            controller: 'agenciesController'
          })
    }
  ])
  .run(function($state) {
  
  });

})(); 
