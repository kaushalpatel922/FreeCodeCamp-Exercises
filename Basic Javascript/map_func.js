var cars = [
  {name: "Toyota", color: "Black"},
  {name: "Chevrolet", color: "Blue"},
  {name: "Tesla", color: "Red"},
  {name: "Honda", color: "Green"}
];

var carColor = cars.map(function(x) {
  return x.name + " is color " + x.color;
})

console.log(carColor);
//will result ["Toyota is color Black", "Chevrolet is color Blue", "Tesla is color Red", "Honda is color Green"]




// ----ECMA------
var carColor = cars.map((x) => x.name);
//will result ["Toyota", "Chevrolet", "Tesla", "Honda"]




// --------Writing with for loop -----------

var carColor = [];

for(var i=0; i < cars.length; i++) {
  carColor.push(cars[i].name)
}

console.log(carColor);
//will result ["Toyota", "Chevrolet", "Tesla", "Honda"]
