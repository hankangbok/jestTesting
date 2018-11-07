const original = require('./sum');
const sum = original.sum;
const capitalize = original.capitalize;
const reverseString = original.reverseString; 
const calculator = original.calculator;
const caesarCipher = original.caesarCipher;

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

// calculator Tests

// cipher tests

// test basic syntax template
// test('', () => {
//   expect();
// });