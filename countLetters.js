// // write a function that returns all the unique characters that exist in a string
// // and reports how many instances each letter is found in the string
// //returns an object that can represent the stats for the sentence it is given: all characters found in
// //input string.
//hint: perhaps return an object where each unique character is a property of an
// object. and the value for that
//property/key should be the number of occurences for that character.
var lighthouse = process.argv[2];
var squish = lighthouse.replace(/ /g,'');
//console.log(lighthouse);
//console.log(squish);

function countLetters(theStringPassedIn) {
  var counter = {
    'n':'n'
  };
  for (var i = 0; i < theStringPassedIn.length; i++){ // Do a clever thing with a loop
    counter[theStringPassedIn[i]] = 0;
   //console.log(theStringPassedIn[1])
  }
  for (var letter of theStringPassedIn){
    counter[letter]+= 1;
    //console.log(counter[letter]);
  }
  return counter;
}

console.log(countLetters(squish));



//The point is to get you to think about the problem and strip it to it's bare essentials
//For example in this, they give you a string and you give them back an object.