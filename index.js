function theBeatlesPlay(musicians, instruments){
  var stuff = [];
  for (var i = 0; i < musicians.length; i++){
    stuff.push(musicians[i] + " plays " + instruments[i])
  } return stuff
}

function johnLennonFacts(){
  var facts = [    
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ];
    var i = 0
  while(i < 4){
    facts[i] + "!!!";
    i++;
  } return facts;
}