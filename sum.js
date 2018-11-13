// Sums numbers a, b
function sum(a, b) {
  return a + b;
}

// Takes a string and returns w 1st char capitalized
function capitalize(str) {
  if(str.length>1) {
    return(str.charAt(0).toUpperCase() + str.slice(1,str.length));
  }
  if (str.length==1) {
    return str.toUpperCase();
  }
  if (str.length==0) {
    return str;
  }
}

// Takes a String
// Returns the string in reverse
function reverseString(str) {
  let copyStr = str.split("");
  let newStr='';
  for (i=str.length-1;i>=0;i--)  {
    newStr += copyStr[i];
  }
  return newStr;
}

module.exports = {sum, capitalize, reverseString}
