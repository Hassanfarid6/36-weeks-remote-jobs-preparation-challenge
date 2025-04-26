// Exploring JavaScript Function Declarations & Expressions
// This file demonstrates two ways to create functions in JavaScript: declarations
// and expressions, which are like recipes for doing tasks.
// Part of my JavaScript Foundations learning journey (Week 1.3: Functions).

// === What are Function Declarations & Expressions? ===
// A function is like a recipe for a toy machine—it tells the computer what to do.
// - Declaration: Like naming a recipe directly (function name() {}).
// - Expression: Like saving a recipe in a box (const name = function() {}).

// Example 1: Function Declaration - Greet a pet
function greetPet(name) {
    return `Hello, ${name}!`;
}
console.log(greetPet("Buddy")); // Output: Hello, Buddy!
console.log(greetPet("Mittens")); // Output: Hello, Mittens!

// Example 2: Function Expression - Double a number
const doubleNumber = function(num) {
    return num * 2;
};
console.log("2 doubled:", doubleNumber(2)); // Output: 2 doubled: 4
console.log("5 doubled:", doubleNumber(5)); // Output: 5 doubled: 10

// Example 3: Function Declaration - Describe a fruit
function describeFruit(fruit, color) {
    return `${fruit} is ${color}.`;
}
console.log(describeFruit("Apple", "Red")); // Output: Apple is Red.
console.log(describeFruit("Banana", "Yellow")); // Output: Banana is Yellow.

// Example 4: Function Expression - Add scores
const addScores = function(scores) {
    let total = 0;
    scores.forEach(score => total += score);
    return total;
};
const studentScores = [90, 85, 95];
console.log("Total score:", addScores(studentScores)); // Output: Total score: 270

// === Why Use Function Declarations & Expressions? ===
// - Declarations are simple and can be used anywhere in your code.
// - Expressions are flexible and can be stored in variables or passed around.
// - Both help you reuse recipes for tasks, like greeting or calculating.
// - Perfect for apps, like making buttons do things or calculating scores.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new functions or changing what they do to explore!

