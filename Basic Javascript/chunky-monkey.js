// chunky monkey - break into arrays

function chunkArrayInGroups(arr, size) {
  var result = [];
  var newResult = [];

  for (var i = 0; i < arr.length; i = i+size) {

    result = newResult.push(arr.slice(i, i+size));

  }
  return newResult;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//should result [['a','b'], ['c','d']]

chunkArrayInGroups([0,1,2,3,4,5], 3);
//should result [[0,1,2], [3,4,5]]
