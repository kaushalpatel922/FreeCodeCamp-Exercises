// writing sort method
var strArray = ["Ross", "Chandler", "Joey"]
var intArray = [1,6,11,22,92,89,8]


document.write(strArray.sort())
// will result Chandler, Joey and Ross

//For values
document.write(intArray.sort(function(a,b) {
  return a - b;
}))
//will result 1,6,8,11,22,89,92
