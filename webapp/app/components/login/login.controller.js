(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
      '$state',
      'storageFactory'
    ];

    /* @ngInject */
    function LoginController(
      $state,
      storage
    ) {

        var vm = this;
        vm.login = login;
        vm.user = undefined;
        vm.error = {
          show: false,
          msj: ''
        };


        activate();

        function activate () {
          console.log("ente en LoginController");
        }

        function login () {
          console.log("Iniciar Sesion");
          $state.go('producto');
        }

        // function login () {
        //   console.log("el usuario a logearse es ", vm.user);
        //
        //   if (vm.user.rol === 'user') {
        //
        //     storage.setUser(vm.user);
        //     $state.go('project.list');
        //
        //   } else if (vm.user.rol === 'admin') {
        //
        //     storage.setUser(vm.user);
        //     $state.go('admin');
        //
        //   } else {
        //
        //     vm.user = {};
        //     vm.error = {
        //       show: true,
        //       msj: 'Usuario invalido'
        //     };
        //
        //   }
        // }

    }
})();
