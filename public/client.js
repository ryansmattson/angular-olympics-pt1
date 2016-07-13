angular.module('olympicapp', ['ngRoute']);

angular.module('olympicapp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/archers', {
    templateUrl: "/archers.html",
    controller: "archerscontroller"
  })
  .when('/lifters', {
    templateUrl: "/lifters.html",
    controller: "lifterscontroller"
  })
  .when('/judo', {
    templateUrl: "judo.html",
    controller: "judocontroller"
  })
  .when('/swimmers', {
    templateUrl: "swimmers.html",
    controller: "swimmerscontroller"
  })
  .when('/canoe', {
    templateUrl: "canoe.html",
    controller: "canoecontroller"
  });
  $locationProvider.html5Mode(true);
});

var weightlifters = [{name:"Jenny Arthur", home:"Gainesville, Georgia"}, {name:"Kendrick Farris", home:"Shreveport, Louisiana"}, {name:"Morghan King", home:"Redmond, Washington"}, {name:"Sarah Robles", home:"Desert Hot Springs, California"}]
var archers = [{name: "Mackenzie Brown", home:"Flint, Texas"}, {name: "Brady Ellison", home:"Globe, Arizona"}, {name:"Zach Garrett", home:"Wellington, Missouri"}, {name:"Jake Kaminski", home:"Gainesville, Florida"}]
var canoerizers = [{name:"Casey Eichfeld", home:"Drums, Pennsylvania"}, {name:"Maggie Hogan", home:"Huntington Beach, Florida"}, {name:"Devin McEwan", home:"Salisbury, Conneticut"}, {name:"Ashley Nee", home:"Darnestown, Maryland"}, {name:"Michael Smolen", home:"Gastonia, North Carolina"}]
var judoizers = [{name:"Colton Brown", home:"Piscataway, New Jersey"}, {name:"Angelica Delgado", home:"Miami, Florida"}, {name:"Nick Delpopolo", home:"Davie, Florida"}, {name:"Kayla Harrison", home:"Middletown, Ohio"}, {name:"Marti Malloy", home:"Oak Harbor, Washington"}, {name:"Travis Stevens", home:"Tacoma, Washington"}]
var synchronizedswimmers = [{name:"Anita Alvarez", home:"Kenmore, New York"}, {name:"Mariya Koroleva", home:"Concord, California"}]

var randomindex = function getrandomindex(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  };


//ARCHERS
angular.module('olympicapp').controller('archerscontroller', function($scope, $http){
  var randomarcher = archers[randomindex(0, archers.length)];

  var configObjectArcher = {
    method: "GET",
    url:"archers.html"
  };
  function successArcher(response){
    $scope.archer = randomarcher;
    console.log('Success!');
  };
  function failureArcher(response){
    console.log('Fail!', response)
  };
  function getarchers(){
    $http(configObjectArcher).then(successArcher, failureArcher);
  };
  getarchers();
});


// WEIGHTLIFTERS
angular.module('olympicapp').controller('lifterscontroller', function($scope, $http){
  var randomlifter = weightlifters[randomindex(0, weightlifters.length)];

  var configObjectLifter = {
    method: "GET",
    url:"/lifters.html"
  }
  function successLifter(response){
    $scope.weightlifter = randomlifter;
    console.log('Success!');
  };
  function failureLifter(response){
    console.log('Fail!', response)
  };
  function getlifter(){
    $http(configObjectLifter).then(successLifter, failureLifter);
  };
  getlifter();
});
// JUDO PEEPS
angular.module('olympicapp').controller('judocontroller', function($scope, $http){
var randomjudo = judoizers[randomindex(0, judoizers.length)];
var configObjectJudo = {
  method: "GET",
  url:"/judo.html"
}
function successJudo(response){
  $scope.judoer = randomjudo;
  console.log('Success!');
};
function failureJudo(response){
  console.log('Fail!', response)
};
function getjudo(){
  $http(configObjectJudo).then(successJudo, failureJudo);
};
getjudo();
});
// SYNCHRONIZED SWIMMERS
angular.module('olympicapp').controller('swimmerscontroller', function($scope, $http){
  var randomswimmer = synchronizedswimmers[randomindex(0, synchronizedswimmers.length)];

var configObjectSwimmers = {
  method: "GET",
  url:"/swimmers.html"
}
function successSwimmer(response){
  $scope.swimmer = randomswimmer;
  console.log('Success!');
};
function failureSwimmer(response){
  console.log('Fail!', response)
};
function getswimmers(){
  $http(configObjectSwimmers).then(successSwimmer, failureSwimmer);
};
getswimmers();
});
//CANOERS
angular.module('olympicapp').controller('canoecontroller', function($scope, $http){
  var randomcanoe = canoerizers[randomindex(0,canoerizers.length)];

var configObjectCanoer = {
  method: "GET",
  url:"/canoe.html"
}
function successCanoe(response){
  $scope.canoer = randomcanoe;
  console.log('Success!');
};
function failureCanoe(response){
  console.log('Fail!', response)
};
function getcanoers(){
  $http(configObjectCanoer).then(successCanoe, failureCanoe);
};
getcanoers();
});


// What to do when button clicked
//
//   $scope.handleClick = function(){
//     getarchers();
//     getlifter();
//     getjudo();
//     getswimmers();
//     getcanoers();
//     $scope.toggle = true;
//     console.log('button clicked');
//   }

// });
// $http.get('/hockey').then(function(response){
// $scope.player = response.data
// })
