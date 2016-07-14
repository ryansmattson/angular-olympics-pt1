
angular.module('olympicapp').controller('JudoController', function($scope, DataService){

  $scope.data = DataService.data;

  DataService.makeJudoCall();
});
