(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('ProductController', ProductController);

    ProductController.$inject = [
        '$state'
    ];


    function ProductController(
        $state
    ) {
        var vm = this;
        vm.acceder = acceder;

        console.log("Cargo el home");


        function acceder() {
            console.log("HOLA MARIA :)");
            $state.go('login');
        }

    }
})();
