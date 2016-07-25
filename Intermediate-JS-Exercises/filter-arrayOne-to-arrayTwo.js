// Filter arrayOne from arrayTwo and find the common values between two arrays

var arrOne = [1,2,3,5,11,22];
var arrTwo = [3,5,8,11,22];

var result = [];

for (var i = 0; i < arrTwo.length; i++){
  if(arrOne.indexOf(arrTwo[i]) > -1) {
    result.push(arrTwo[i]);
  }
}

console.log(result);
//[3,5,11,22]
