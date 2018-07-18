(function() {
    'use strict';

    angular
        .module('mitchapp')
        .config(stateConfig);

    stateConfig.$inject = [
        '$stateProvider'
    ];

    function stateConfig (
        $stateProvider
    ) {

        var state = {
            name: 'accesorios',
            url: '/accesorios',
            views: {
              "allView@":{
                templateUrl: '/webapp/app/components/producto/accesorios/accesorios.html',
                controller: 'AccesoriesController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
