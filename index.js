function theBeatlesPlay(musicians, instruments){
  var stuff = [];
  for (var i = 0; i < musicians.length; i++){
    stuff.push(musicians[i] + " plays " + instruments[i])
  } return stuff
}

function johnLennonFacts(facts){
    var i = 0;
    var array = [];
  while(i < 4){
    array.push(facts[i] + "!!!")
    i++;
  } return array;
}