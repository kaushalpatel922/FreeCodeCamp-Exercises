// Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of array. The nextInLine function should then return the element that was removed.


function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var firstItem = arr.shift(arr);

  return firstItem;  // Change this line
}
