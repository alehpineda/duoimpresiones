var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      title: 'Usuarios',
      templateUrl: 'partials/products.html',
      controller: 'usuariosCtrl'
    })
    //Pulseras eventos
    .when('/pulseras_eventos', {
      title: 'Pulseras',
      templateUrl: 'pulseras/pulseras.html',
      controller: 'pulserasCtrl'
    })
    //Tarjetas presentacion
    .when('/tarjetas_presentacion', {
      title: 'Tarjetas',
      templateUrl: 'tarjetas/tarjetas.html',
      controller: 'tarjetasCtrl'
    })
    //Prueba
    .when('/prueba', {
      title: 'Pulseras',
      template: "<h1>prueba!!!</h1>"
    })
    /*
    when('/tid', {
      title: 'Tipo de usuarios',
      templateUrl: 'partials/tipoUsuarios.html',
      controller: 'tipoUsuariosCtrl'
    }) */
    .otherwise({
      redirectTo: '/'
    });;
}]);
