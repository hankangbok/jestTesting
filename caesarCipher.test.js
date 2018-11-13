const caesarSource = require('./caesarCipher.js');
const caesarCipher = caesarSource.caesarCipher;

// test('caesarCipher test that it runs', () => {
//   expect(caesarCipher("Testing", 4)).toBe("it runs"); 
// });
// Okay, so the module has been pulled over correctly 

// For now, we are assuming there are no special characters in the the string
// Also, starting with a string that does not have whitespace
test('caesarCipher test that it runs', () => {
  expect(caesarCipher("e", 10)).toBe("o"); 
});

test('encrypt lowercase string no whitespace no punctuation', () => {
  expect(caesarCipher("easdf", 27)).toBe("fbteg"); 
});

test('encrypt lowercase string no whitespace no punctuation', () => {
  expect(caesarCipher("easdfasdf", 2)).toBe("gcufhcufh"); 
});

test('encrypt lowercase string WITH whitespace no punctuation', () => {
  expect(caesarCipher("easd fasdf", 2)).toBe("gcuf hcufh"); 
});

test('encrypt mixed case string no whitespace', () => {
  expect(caesarCipher("eaDDSDXfasdf", 2)).toBe("gcDDSDXhcufh"); 
});


// Should not allow 0 shift

// Should not allow blank original text

// Should allow whitespace

// Should allow capital letters