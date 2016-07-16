// Check for palindrome.

function palindrome(str) {
  // Good luck!
  var one = str.toLowerCase().replace(/\W|_/g, '');
  var two = one.split('').reverse().join("");

  if(one == two) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
palindrome("not a palindrome");
