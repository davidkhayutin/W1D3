
function countLetters(string){
  var countedLetters = {};
  var newArray = string.split(' ').join('').split('');
  for(var i = 0; i < newArray.length; i++){
    countedLetters[newArray[i]] = countedLetters[newArray[i]] || 0 ;
    countedLetters[newArray[i]]++;
  }
   return countedLetters;
}

console.log(countLetters("this is a snew string of strings"));

