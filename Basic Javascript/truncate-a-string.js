//truncate a string

function truncateString(str, num) {

  if (num < 3) {
    return str.slice(0, num) + "...";
  } else if (str.length > num) {
    return str.slice(0,num-3) + "...";
  } else {
    return str.slice(0,num);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
//should result: A-tisket...
