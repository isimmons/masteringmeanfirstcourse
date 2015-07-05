angular.module('example').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'modules/example/views/example.client.view.html',
      controller: 'ExampleController',
      // resolve: {
      //     // I will cause a 1 second delay
      //     delay: function($q, $timeout) {
      //       var delay = $q.defer();
      //       $timeout(delay.resolve, 1000);
      //       return delay.promise;
      //     }
      //   }
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);