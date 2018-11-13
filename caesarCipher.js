function caesarCipher(testString, shiftQuantity) {
  console.log(testString);
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
  let splitString = testString.toLowerCase();
  let splitString2 = splitString.split("");
  let indexVal= 0;
  let shiftedVal=0;
  let shiftedStringSplit = [];
  for (i=0;i<splitString2.length; i++) {
    indexVal = alphabet.indexOf(splitString2[i]);
    shiftedVal= indexVal+ shiftQuantity;
    shiftedStringSplit.push(alphabet[shiftedVal%26]);
  }
  return shiftedStringSplit.join("");
}

module.exports = {caesarCipher}