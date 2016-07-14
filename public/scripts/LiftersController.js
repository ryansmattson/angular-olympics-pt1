
angular.module('olympicapp').controller('LiftersController', function($scope, DataService){

  $scope.data = DataService.data;

  DataService.makeWeightCall();
});
