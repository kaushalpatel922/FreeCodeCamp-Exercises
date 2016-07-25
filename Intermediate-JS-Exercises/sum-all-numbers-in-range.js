function sumAll(arr) {

  var x = arr[0];
  var y = arr[1];
  var result=[];

  if(x < y) {
    for (var i=x; i<=y; i++) {
      result[i-1] = i;
    }
    var finalResult=result.reduce(function(a,b) {
      return a+b;
    });
    return finalResult;

  } else {
    var x = arr[1];
    var y = arr[0];

    for (var i=y; i>=x; i--) {
      result[i-1] = i;
    }
    var finalResult=result.reduce(function(a,b) {
      return a+b;
    });
    return finalResult;
  }
}

sumAll([4, 1]);
//will result 10

sumAll([1,4]);
// will result 10

sumAll([3,8]);
// will result 33
