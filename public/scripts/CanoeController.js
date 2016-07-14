
angular.module('olympicapp').controller('CanoeController', function($scope, DataService){

  $scope.data = DataService.data;

  DataService.makeCanoeCall();
});
