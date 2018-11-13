// Making separate test files for the more complex functions

const calculatorModule = require('./calculator');
const calculator = calculatorModule.calculatorFunction;
const calc = calculator();
// calculator Tests
test('tests additiion', () => {
  expect(calc.add(1,3)).toEqual(4);
});
// 
test('tests subtraction', () => {
  expect(calc.subtract(3,7)).toEqual(-4);
});
test('tests multiplication', () => {
  expect(calc.multiply(1,3)).toEqual(3);
});
test('tests division', () => {
  expect(calc.divide(1,3)).toBeCloseTo(0.33);
});

// Test for setting limit on digits displayed
// Basic mutliplication est
// Should not allow division by 0
test('tests division', () => {
  expect(calc.divide(3,0)).toBe("You cannot divide by 0");
});

