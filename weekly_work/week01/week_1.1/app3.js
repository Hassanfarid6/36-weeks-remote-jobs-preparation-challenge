// javascript
// app.js: Exploring JavaScript Functions (Declaration, Expression, Arrow)
// This file demonstrates three ways to create functions in JavaScript, showcasing
// their syntax and use cases. Functions are like reusable helpers that perform tasks.
// Part of my JavaScript Foundations learning journey (Week 1.1/1.3).

// === Function Declaration ===
// A function declaration defines a named function using the 'function' keyword.
// It can be called anywhere in the code (hoisted) and is great for reusable tasks.
// Example: A greeting function that welcomes a user by name.
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}
console.log(greet("Aisha")); // Output: Hello, Aisha! Welcome to JavaScript!

// === Function Expression ===
// A function expression stores an anonymous function in a variable.
// It’s not hoisted, so it must be defined before use. Useful for dynamic logic.
// Example: A function to add two numbers, stored in a variable.
const add = function(a, b) {
    return a + b;
};
console.log("5 + 3 =", add(5, 3)); // Output: 5 + 3 = 8

// === Arrow Function ===
// An arrow function uses a concise '=>' syntax, introduced in ES6.
// Ideal for short functions and has a different 'this' behavior.
// Example: A function to multiply two numbers, written compactly.
const multiply = (x, y) => x * y;
console.log("4 * 2 =", multiply(4, 2)); // Output: 4 * 2 = 8

// === Combining Functions ===
// Let’s use all three functions together to create a fun message!
// We’ll greet a user, add their scores, and multiply a bonus.
const user = "Zain";
const score1 = 10;
const score2 = 20;
const bonus = 3;

console.log(greet(user)); // Output: Hello, Zain! Welcome to JavaScript!
console.log(`${user}'s total score:`, add(score1, score2)); // Output: Zain's total score: 30
console.log(`Bonus points:`, multiply(add(score1, score2), bonus)); // Output: Bonus points: 90

// === Why Functions Matter ===
// - Function Declaration: Easy to read, reusable, and callable anywhere.
// - Function Expression: Flexible for passing functions or dynamic use.
// - Arrow Function: Short and modern, great for quick tasks.
// These are building blocks for creating interactive web apps!

// Run this file with Node.js (`node app.js`) or in a browser console.
// Explore and modify the examples to learn more about functions!


// --------------------------------------------------
// Callback Functions in JavaScript
// --------------------------------------------------

/*
| Concept            | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| What is it?         | A function passed as an argument to another function                    |
| Purpose             | To execute code AFTER something else finishes                          |
| Common Usage        | Handling asynchronous operations like API calls, event listeners       |
| Benefit             | Helps in writing non-blocking, flexible code                           |
| Problem (sometimes) | Can lead to "Callback Hell" if overused                                 |
*/

// --------------------------------------------------
// Simple Example
// --------------------------------------------------

// A normal function
function greet(name) {
    console.log("Hello, " + name);
}

// A function that uses a callback
function processUserInput(callback) {
    let name = "Hasan";
    callback(name);
}

// Passing greet as a callback
processUserInput(greet);

// Output:
// Hello, Hasan

/*
Summary:
- A callback is just a function that gets called later.
- In JavaScript, callbacks are heavily used for async programming (like setTimeout, APIs, etc).
*/
