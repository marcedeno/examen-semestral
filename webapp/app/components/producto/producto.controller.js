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
        vm.accesorios = accesorios;

        console.log("Cargo el home");

        function accesorios() {
            console.log("HOLA MARIA :)");
            $state.go('accesorios');
        }

    }
})();
