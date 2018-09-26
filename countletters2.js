
function countLetters(string){
  var countedLetters = {};
  var newArray = string.split(' ').join('').split('');

  for(var i = 0; i < newArray.length; i++){
    countedLetters[newArray[i]] = countedLetters[newArray[i]] || [] ;
  }
  var keys = Object.keys(countedLetters);

  for(var j = 0; j < newArray.length; j++){
    for(var k = 0; k < keys.length; k++){
      if(newArray[j] === keys[k]){
        countedLetters[newArray[j]].push(j)
      }
    }
  }
  return countedLetters
}

console.log(countLetters("this string is cool"));




