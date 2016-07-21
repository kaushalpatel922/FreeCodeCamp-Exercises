// Write a function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      product *= (arr[i][j]);
    }
  }

  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
// will result 5040

multiplyAll([[1,2,3],[2,3],[10,20,30]]);
// will result 21600
