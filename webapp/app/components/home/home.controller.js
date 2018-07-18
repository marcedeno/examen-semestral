(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$state'
    ];


    function HomeController(
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
