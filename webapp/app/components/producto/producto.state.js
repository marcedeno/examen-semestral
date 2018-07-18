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
            name: 'producto',
            url: '/producto',
            views: {
              "allView@":{
                templateUrl: '/webapp/app/components/producto/producto.html',
                controller: 'ProductController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
