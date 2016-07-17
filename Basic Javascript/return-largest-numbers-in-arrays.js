// Return Largest Numbers in Arrays.

function largestOfFour(arr) {
  // You can do this!
  var result = [];
  var newArray = [];

  for(var i = 0; i < arr.length; i++) {
    result = arr[i].sort(function(a,b) {
      return b - a;
    });
   newArray[i] = result.shift(0);
   
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//should result [5,27,39,1001]
