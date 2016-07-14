//client side
angular.module('olympicapp').config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/archers', {
    templateUrl: "/archers.html",  //goes to server
    controller: "ArchersController"
  })
  .when('/lifters', {
    templateUrl: "/lifters.html",
    controller: "LiftersController"
  })
  .when('/judo', {
    templateUrl: "judo.html",
    controller: "JudoController"
  })
  .when('/swimmers', {
    templateUrl: "swimmers.html",
    controller: "SwimmerController"
  })
  .when('/canoe', {
    templateUrl: "canoe.html",
    controller: "CanoeController"
  });
  $locationProvider.html5Mode(true);
});
