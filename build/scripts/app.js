(function(angular){
    'use strict';

    angular.module('app', ['ui.router']);

})(window.angular);
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

(function(angular) {
    'use strict';

    angular.module('app').controller('appHomeController', HomeController);

    function HomeController($http) {
        var vm = this;

        vm.item = '';
        vm.items = [];
        vm.save = save;

        activate();

        //////////

        function activate() {
            fetchItems();
        }

        function fetchItems() {
            $http.get('/api').success(success).catch(failed);

            function success(data) {
                vm.items = data.sort();
            }

            function failed() {
                vm.items = [];
            }
        }

        function save() {
            var data = {
                'item': vm.item
            };

            $http.post('/api', data)
                .finally(function() {
                    vm.item = '';
                    fetchItems();
                });
        }
    }

    HomeController.$inject = ['$http'];

})(window.angular);
