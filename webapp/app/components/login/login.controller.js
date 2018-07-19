(function() {
  'use strict';

  angular
    .module('mitchapp')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$state',
    '$firebaseArray'
  ];

  /* @ngInject */
  function LoginController(
    $state,
    $firebaseArray
  ) {

    var vm = this;
    vm.login = login;
    vm.registry = registry;
    vm.user = undefined;
    vm.error = {
      show: false,
      msj: ''
    };

    var ref = new Firebase('https://just-buy-bd2.firebaseio.com').child("tcliente");

    //LOAD
    vm.clientes = $firebaseArray(ref);
    vm.clientes.$loaded()
      .then(function(x) {
        x === vm.clientes; // true
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

    console.log("LISTA, ", vm.clientes);

    activate();

    function activate() {
      console.log("ente en LoginController");
    }

    function login() {
      console.log("Iniciar Sesion dentro del login", vm.clientes);

      for (var i = 0; i < vm.clientes.length; i++) {
        if (vm.clientes[i].pass == vm.pass_user && vm.clientes[i].user == vm.login_user) {
          console.log("Entro al login");
          $state.go('producto');
        } else {
          console.log("Denegado");
        }
      }
    }

    function registry() {
      console.log("Registrarse a la pagina");

      if (vm.genero_user == 'F') {
        vm.clientes.$add({
          user: vm.new_user,
          pass: vm.new_pass,
          edad: vm.age_user,
          email: vm.user_email,
          sex: vm.genero_user
        });

        $state.reload('login');
        alert("¡Cliente creado satisfactoriamente!, Inicie Sesión");
      } else {
        alert("Cliente requerido, femenino");
      }

      console.log("Registros Nuevos", vm.clientes);
    }

  }
})();
