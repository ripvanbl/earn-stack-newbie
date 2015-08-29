(function(angular) {
    'use strict';

    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'home.html',
                    controller: 'appHomeController',
                    controllerAs: 'vm'
                });
        });
})(window.angular);
