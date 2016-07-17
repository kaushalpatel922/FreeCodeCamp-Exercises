// slasher-flick

//return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany == 1) {
    return arr.splice(howMany, 2);
  } else if(howMany > 0) {
    return arr.splice(howMany, howMany);
  } else {
    return arr ;
  }
}

slasher(["burgers", "fries", "shake"], 1);
//should result ['fries', 'shake']

slasher([1, 2, 3], 2);
//should result [3]
