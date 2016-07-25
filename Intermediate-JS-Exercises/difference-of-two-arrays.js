// create two arrays and return a new array with items only found in one array.

function diffArray(arr1, arr2) {
  var newArr = [];
  var arrOneLength = arr1.length;
  var arrTwoLength = arr2.length;

  // Same, same; but different.

  if(arrTwoLength > arrOneLength) {

    for(var i = 0; i < arrTwoLength; i++) {
      if(arr1.indexOf(arr2[i]) == -1) {
        newArr.push(arr2[i]);
      }
    }

    return newArr;

  } else if (arrTwoLength < arrOneLength) {

    for(var i = 0; i < arrOneLength; i++) {
      if(arr2.indexOf(arr1[i]) == -1) {
        newArr.push(arr1[i]);
      }
    }

    return newArr;

  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//should result [4]

diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
//should result []
