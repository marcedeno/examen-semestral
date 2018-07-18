(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('AccesoriesController', AccesoriesController);

    AccesoriesController.$inject = [
        '$state'
    ];


    function AccesoriesController(
        $state
    ) {
        var vm = this;
        vm.acceder = acceder;

        console.log("Cargo los accesorios");


        function acceder() {
            console.log("HOLA MARIA :)");
            $state.go('login');
        }

    }
})();
