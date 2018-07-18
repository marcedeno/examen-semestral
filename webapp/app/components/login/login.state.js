(function() {
    'use strict';

    angular
        .module('mitchapp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        var loginStage = {
            name: 'login',
            url: '/login',
            views: {
              'allView@': {
                  templateUrl: '/webapp/app/components/login/login.html',
                  controller: 'LoginController',
                  controllerAs: 'vm'
              }
            }
        };

        $stateProvider.state(loginStage);
    }

})();
