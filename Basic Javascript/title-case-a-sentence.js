// title case a sentence.

function titleCase(str) {
  var splitSentence = str.toLowerCase().split(' ');
  var result = [];

  for (var i=0; i < splitSentence.length; i++) {
    var letter = splitSentence[i].charAt(0).toUpperCase();
    result.push(letter + splitSentence[i].slice(1));
  }

  return result.join(' ');
}

titleCase("I'm a little tea pot");
