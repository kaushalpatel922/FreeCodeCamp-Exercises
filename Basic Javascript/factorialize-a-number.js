//factorialize-a-number

function factorialize(num) {

  for (var  i = num-1; i > 0; i--) {
   num = num * i;
  }
  return num;
}

factorialize(5);
