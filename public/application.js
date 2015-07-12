var ApplicationModuleName = 'mean';

var ApplicationModule = angular.module( ApplicationModuleName,
    ['ngResource', 'ngRoute', 'users', 'example', 'articles', 'chat']
);

//fix hash mark for SEO
ApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

//fix facebook oauth redirect jacked up url hash
if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
    angular.bootstrap(document, [ApplicationModuleName]);
});