// Tests for simple functions (sum two #'s, capitalize a string, reverse a string)
const original = require('./sum');
const sum = original.sum;
const capitalize = original.capitalize;
const reverseString = original.reverseString; 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1234+2 to Be 1236', () => {
  expect(sum(1234,2)).toBe(1236);
});

// capitalize tests
test('capitalizes a string', () => {
  expect(capitalize('this is the sentence')).toEqual('This is the sentence');
});

test('returns a blank string', () => {
  expect(capitalize('')).toEqual('');
});

test('single character string just returns single capitalized character', () => {
  expect(capitalize('a')).toEqual('A');
});

// reverseString Tests
test('reverses a >1 length string', () => {
  expect(reverseString('asdf')).toEqual('fdsa');
});

// reverses a string with whitespace
test('reverses a >1 length string', () => {
  expect(reverseString('Check this Out')).toEqual('tuO siht kcehC');
});



// test basic syntax template
// test('', () => {
//   expect();
// });