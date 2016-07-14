angular.module('olympicapp').factory('DataService', function($http){

  var data = {};

  function weightSuccess(response){
    data.weight = response.data;
  }

  function judoSuccess(response){
    data.judo = response.data;
  }

  function canoeSuccess(response){
    data.canoe = response.data;
  }

  function swimmerSuccess(response){
    data.swimmer = response.data;
  }

  function archerSuccess(response){
    data.archer = response.data;
  }


  function handleFailure(response){
    console.log('Error!', response);
  }


  function makeWeightCall(){
    $http.get('/olympic/weightlifters').then(weightSuccess, handleFailure)
  }

  function makeJudoCall(){
    $http.get('/olympic/judopeeps').then(judoSuccess, handleFailure)
  }

  function makeCanoeCall(){
    $http.get('/olympic/canoepeeps').then(canoeSuccess, handleFailure)
  }

  function makeSwimmerCall(){
    $http.get('/olympic/swimmers').then(swimmerSuccess, handleFailure)
  }

  function makeArcherCall(){
    $http.get('/olympic/archers').then(archerSuccess, handleFailure)
  }


  return {
    data: data,
    makeSwimmerCall: makeSwimmerCall,
    makeJudoCall: makeJudoCall,
    makeWeightCall: makeWeightCall,
    makeCanoeCall: makeCanoeCall,
    makeArcherCall: makeArcherCall
  }

})
