//forEach function

// forEach(func, obj) accepts two arguments your custom function and object.

var arrayOne = ['foo1', 'foo2', 'foo3'];

function myFunc(elem, index, array) {
    array[index] = '<' + this.tag + '>';
    array[index] += elem;
    array[index] += '</' + this.tag + '>';

    document.write(array[index] + "<br />");
}

thisObj = {
  tag: "i"
}

arrayOne.forEach(myFunc, thisObj);
//will display arrayOne elements in to Italic tags.
//foo1
//foo2
//foo3
