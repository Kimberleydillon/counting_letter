var lighthouse = process.argv[2];
var squish = lighthouse.replace(/ /g,'');

function countLetters(theStringPassedIn) {
  var position = {};
  for (var i = 0; i < theStringPassedIn.length; i++){
      position[theStringPassedIn[i]] = [];
  }
  for (var i = 0; i < theStringPassedIn.length; i++){
      position[theStringPassedIn[i]].push(i);
  }
 return position;
 }


console.log(countLetters(squish));


//the requirement has changed to return all the indices (zero-based positions)
//in the string where each character is found. So for each letter,
//we're no longer returning just one number to represent its number of occurrences,
// but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

