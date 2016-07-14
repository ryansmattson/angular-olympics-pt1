
angular.module('olympicapp').controller('ArchersController', function($scope, DataService){

  $scope.data = DataService.data;

  DataService.makeArcherCall();
});
