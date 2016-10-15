(function(){    

  angular.module('sortlist', ['ui.router', 'ngResource']);

  angular.module('sortlist').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

    }
  ])
  .run(function($state) {
  
  });

})(); 
