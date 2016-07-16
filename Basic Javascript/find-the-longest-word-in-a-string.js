// Find the longest word in a string.

function findLongestWord(str) {
  var result = [];
  
  var one = str.split(" ");

   for (var i = 0; i < one.length; i++) {
    result[i] = one[i].length;
     result.reverse().sort(function(a,b) {
       return b-a;
     });
   }
  return result[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
