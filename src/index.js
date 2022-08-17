function prepend(numSpaces, inputString) {
    // your code here
    var aString = "";
    for (var i = 0; i < numSpaces; i++) {
        aString += " ";
    }
    return aString.concat(inputString);
}
console.log(prepend(5, "Hello"));
