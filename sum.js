function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  // Takes a string and returns w 1st char capitalized
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

function reverseString(str) {
  let copyStr = str.split("");
  let newStr='';
  for (i=str.length-1;i>=0;i--)  {
    newStr += copyStr[i];
  }
  return newStr;
}

function calculator() {

}
// Should be able to add subtract divide and multiply

function caesarCipher() {

}
// Each letter of the alphabet is shifted a certain # of places
// should take the # of places shifted
// The cipher is 3(x) = (x+k) (mod26)
// Test keeping same case
// Test punctuation


// module.exports = {sum:sum,capitalize:capitalize, reverseString:reverseString, calculator:calculator, caesarCipher:caesarCipher}
module.exports = {sum, capitalize, reverseString,calculator, caesarCipher}
