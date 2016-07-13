var router = require('express').Router();

var weightlifters = [{name:"Jenny Arthur", home:"Gainesville, Georgia"}, {name:"Kendrick Farris", home:"Shreveport, Louisiana"}, {name:"Morghan King", home:"Redmond, Washington"}, {name:"Sarah Robles", home:"Desert Hot Springs, California"}]
var archers = [{name: "Mackenzie Brown", home:"Flint, Texas"}, {name: "Brady Ellison", home:"Globe, Arizona"}, {name:"Zach Garrett", home:"Wellington, Missouri"}, {name:"Jake Kaminski", home:"Gainesville, Florida"}]
var canoerizers = [{name:"Casey Eichfeld", home:"Drums, Pennsylvania"}, {name:"Maggie Hogan", home:"Huntington Beach, Florida"}, {name:"Devin McEwan", home:"Salisbury, Conneticut"}, {name:"Ashley Nee", home:"Darnestown, Maryland"}, {name:"Michael Smolen", home:"Gastonia, North Carolina"}]
var judoizers = [{name:"Colton Brown", home:"Piscataway, New Jersey"}, {name:"Angelica Delgado", home:"Miami, Florida"}, {name:"Nick Delpopolo", home:"Davie, Florida"}, {name:"Kayla Harrison", home:"Middletown, Ohio"}, {name:"Marti Malloy", home:"Oak Harbor, Washington"}, {name:"Travis Stevens", home:"Tacoma, Washington"}]
var synchronizedswimmers = [{name:"Anita Alvarez", home:"Kenmore, New York"}, {name:"Mariya Koroleva", home:"Concord, California"}]



var randomindex = function getrandomindex(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  }





router.get('/weightlifters', function(request, response){
  var randomlifter = weightlifters[randomindex(0, weightlifters.length)];
  response.send(randomlifter);
  console.log(randomlifter)
});

router.get('/archers', function(request, response){
  var randomarcher = archers[randomindex(0, archers.length)];
  response.send(randomarcher);
  console.log(randomarcher)
});

router.get('/canoepeeps', function(request, response){
  var randomcanoe = canoerizers[randomindex(0,canoerizers.length)];
  response.send(randomcanoe);
});

router.get('/judopeeps', function(request, response){
  var randomjudo = judoizers[randomindex(0, judoizers.length)];
  response.send(randomjudo);
});

router.get('/swimmers', function(request, response){
  var randomswimmer = synchronizedswimmers[randomindex(0, synchronizedswimmers.length)];
  response.send(randomswimmer);
});


module.exports = router;
