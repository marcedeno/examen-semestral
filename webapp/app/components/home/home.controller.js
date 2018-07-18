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
        vm.home = home;

        console.log("Cargo el home");

        function home() {
          console.log("Pagina de Inicio");
          $state.go('home');
        }

        function acceder() {
            console.log("HOLA MARIA :)");
            $state.go('login');
        }

    }
})();
