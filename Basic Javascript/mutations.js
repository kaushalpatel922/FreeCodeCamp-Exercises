// Mutations - Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
  var value = arr[0].toLowerCase();
  var check = arr[1].toLowerCase();

  for (var i = 0; i < check.length; i++) {
    if(value.indexOf(check[i]) < 0)
      return false;
  }
   return true;
}

mutation(["hello", "hey"]);
// false

mutation(["hello", "Hello"])
// true
