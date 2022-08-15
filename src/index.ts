function prepend(numSpaces: number, inputString: string) {
  // your code here
let aString:string = "";

  for(let i = 0; i<numSpaces;i++)
  {
    aString+=" ";
  }
  return aString.concat(inputString);
}


console.log(prepend(5,"Hello"));

