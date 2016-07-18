// falsy bouncer
// skip boolean values from the array and show the remaining.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
// reesult [7, 'ate', 9]
