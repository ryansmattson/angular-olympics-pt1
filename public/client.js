angular.module('olympicapp', []);

angular.module('olympicapp').controller('maincontroller', function($scope, $http){
//ARCHERS
  var configObjectArcher = {
    method: "GET",
    url:"/olympic/archers"
  }
  function successArcher(response){
    $scope.archer = response.data;
    console.log('Success!');
  };
  function failureArcher(response){
    console.log('Fail!', response)
  };
  function getarchers(){
    $http(configObjectArcher).then(successArcher, failureArcher);
  };
// WEIGHTLIFTERS
  var configObjectLifter = {
    method: "GET",
    url:"/olympic/weightlifters"
  }
  function successLifter(response){
    $scope.weightlifter = response.data;
    console.log('Success!');
  };
  function failureLifter(response){
    console.log('Fail!', response)
  };
  function getlifter(){
    $http(configObjectLifter).then(successLifter, failureLifter);
  };
// JUDO PEEPS
var configObjectJudo = {
  method: "GET",
  url:"/olympic/judopeeps"
}
function successJudo(response){
  $scope.judoer = response.data;
  console.log('Success!');
};
function failureJudo(response){
  console.log('Fail!', response)
};
function getjudo(){
  $http(configObjectJudo).then(successJudo, failureJudo);
};
// SYNCHRONIZED SWIMMERS
var configObjectSwimmers = {
  method: "GET",
  url:"/olympic/swimmers"
}
function successSwimmer(response){
  $scope.swimmer = response.data;
  console.log('Success!');
};
function failureSwimmer(response){
  console.log('Fail!', response)
};
function getswimmers(){
  $http(configObjectSwimmers).then(successSwimmer, failureSwimmer);
};
//CANOERS
var configObjectCanoer = {
  method: "GET",
  url:"/olympic/canoepeeps"
}
function successCanoe(response){
  $scope.canoer = response.data;
  console.log('Success!');
};
function failureCanoe(response){
  console.log('Fail!', response)
};
function getcanoers(){
  $http(configObjectCanoer).then(successCanoe, failureCanoe);
};



//What to do when button clicked

  $scope.handleClick = function(){
    getarchers();
    getlifter();
    getjudo();
    getswimmers();
    getcanoers();
    $scope.toggle = true;
    console.log('button clicked');
  }

});
