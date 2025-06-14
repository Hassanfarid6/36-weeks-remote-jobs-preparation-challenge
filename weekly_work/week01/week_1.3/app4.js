// Exploring JavaScript Arrow Functions
// This file demonstrates arrow functions, a short and fun way to write functions
// in JavaScript, like quick recipes for tasks.
// Part of my JavaScript Foundations learning journey (Week 1.3: Functions).

// === What are Arrow Functions? ===
// An arrow function is like a super quick recipe for a toy machine. It uses => to
// tell the computer what to do in a shorter way than regular functions.
// Syntax: const name = () => { ... }; or (param) => expression;

// Example 1: Arrow function to greet a pet
const greetPet = (name) => `Hello, ${name}!`;
console.log(greetPet("Buddy")); // Output: Hello, Buddy!
console.log(greetPet("Mittens")); // Output: Hello, Mittens!

// Example 2: Arrow function to triple a number
const tripleNumber = (num) => num * 3;
console.log("2 tripled:", tripleNumber(2)); // Output: 2 tripled: 6
console.log("5 tripled:", tripleNumber(5)); // Output: 5 tripled: 15

// Example 3: Arrow function to describe a fruit
const describeFruit = (fruit, color) => `${fruit} is ${color}.`;
console.log(describeFruit("Apple", "Red")); // Output: Apple is Red.
console.log(describeFruit("Mango", "Orange")); // Output: Mango is Orange.

// Example 4: Arrow function to find the highest score
const findHighestScore = (scores) => {
    let max = scores[0];
    scores.forEach(score => {
        if (score > max) max = score;
    });
    return max;
};
const studentScores = [90, 85, 95];
console.log("Highest score:", findHighestScore(studentScores)); // Output: Highest score: 95

// === Why Use Arrow Functions? ===
// - They’re short and easy to write, like quick notes for tasks.
// - Great for simple jobs, like greeting or calculating.
// - Often used in array methods (like forEach, map) or app buttons.
// - Make your code look neat and modern.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new arrow functions or changing what they do to explore!