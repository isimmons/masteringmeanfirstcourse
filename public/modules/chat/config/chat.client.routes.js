angular.module('chat').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/chat', {
      templateUrl: 'modules/chat/views/chat.client.view.html',
      controller: 'ChatController'
    });
  }
]);