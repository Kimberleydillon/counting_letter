var lighthouse = process.argv[2];
var squish = lighthouse.replace(/ /g,'');
function countLetters(theStringPassedIn) {
  var counter = {
  };
  for (var i = 0; i < theStringPassedIn.length; i++){
    counter[theStringPassedIn[i]] = 0;
     }
  for (var letter of theStringPassedIn){
    counter[letter]+= 1;
  }
  return counter;
}

console.log(countLetters(squish));


