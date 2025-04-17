/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += number;
      return this;
  }

  subtract(number) {
      this.result -= number;
      return this;
  }

  multiply(number) {
      this.result *= number;
      return this;
  }

  divide(number) {
      if (number === 0) {
          throw new Error("Division by zero is not allowed");
      }
      this.result /= number;
      return this;
  }

  clear() {
      this.result = 0;
      return this;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Extra spaces ko Remove krega or trim
      const cleanedExpression = expression.replace(/\s+/g, ' ').trim();

      // Invalid characters ko check krega
      if (!/^[0-9+\-*/().\s]+$/.test(cleanedExpression)) {
          throw new Error("Invalid characters in expression");
      }

      try {
          // Check for division by zero
          if (cleanedExpression.includes('/ 0')) {
              throw new Error("Division by zero is not allowed");
          }

          // eval use krte arithmetic operations in javaScript ko hendle krega like adding or subtracting etc..
          this.result = eval(cleanedExpression);
          
          // Validate the result is a finite number
          if (!Number.isFinite(this.result)) {
              throw new Error("Invalid expression");
          }

          return this;
      } catch (error) {
          throw new Error("Invalid expression");
      }
  }
}

let num = new Calculator(4)
console.log(num.add(2));
console.log(num.multiply(5));
num.add(10).getResult(); // Returns 10
num.subtract(3).getResult(); // Returns 7
num.multiply(2).getResult(); // Returns 14
num.divide(2).getResult(); // Returns 7
num.clear().getResult(); // Returns 0
num.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7').getResult(); // Returns 19.5
num.calculate('3 + 4').getResult(); // Returns 7
console.log(num)
module.exports = Calculator;
