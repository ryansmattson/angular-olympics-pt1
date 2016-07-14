
angular.module('olympicapp').controller('SwimmerController', function($scope, DataService){

  $scope.data = DataService.data;

  DataService.makeSwimmerCall();
});
