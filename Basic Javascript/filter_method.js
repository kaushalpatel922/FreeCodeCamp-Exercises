var strArray = ["Chandler", "Ross", "Joey"]
var numArray = [1,6,11,22,92,89,11,22]

function isEven(value, index, array) {
  if(value == "Ross") {
    return false;
  } else {
    return true;
  }
}

document.write(strArray.filter(isEven));
//will result Chandler,Joey

function isEven(value, index, array) {
  if(value == 22) {
    return false;
  } else {
    return true;
  }
}

document.write(numArray.filter(isEven));
//will result 1,6,11,92,89,11
