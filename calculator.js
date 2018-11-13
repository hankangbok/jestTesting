// Make a factory function that will allow the user to add, subtract, multiply, and 
// Divide two numbers. 

let calculatorFunction = () => {
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => {
    if (num2!=0) {
      return num1 / num2;
    }
    else {
      return "You cannot divide by 0";
    }
  };
  return { add, subtract, multiply, divide };
};

module.exports = { calculatorFunction };
