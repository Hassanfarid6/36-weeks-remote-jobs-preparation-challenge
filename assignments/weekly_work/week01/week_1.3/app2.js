// Exploring JavaScript's forEach() Method
// This file demonstrates the forEach() method, which lets you do something with
// every item in an array, like giving each toy a quick check.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What is forEach()? ===
// forEach() is like a toy inspector! It goes through every item in a list (array)
// and does something with it, like saying something about each toy.
// Syntax: array.forEach(function(item) { ... });

// Example 1: Say hello to each pet
const pets = ["Buddy", "Mittens", "Goldie"];
console.log("Greeting all pets:");
pets.forEach(pet => console.log(`Hello, ${pet}!`));
// Output:
// Greeting all pets:
// Hello, Buddy!
// Hello, Mittens!
// Hello, Goldie!

// Example 2: Double each number
const numbers = [1, 2, 3, 4];
console.log("Doubling numbers:");
numbers.forEach(num => console.log(`${num} doubled is ${num * 2}`));
// Output:
// Doubling numbers:
// 1 doubled is 2
// 2 doubled is 4
// 3 doubled is 6
// 4 doubled is 8

// Example 3: Show fruit details
const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Mango", color: "Orange" }
];
console.log("Fruit details:");
fruits.forEach(fruit => console.log(`${fruit.name} is ${fruit.color}.`));
// Output:
// Fruit details:
// Apple is Red.
// Banana is Yellow.
// Mango is Orange.

// Example 4: Add scores to a total
const scores = [90, 85, 95];
let total = 0;
console.log("Adding scores:");
scores.forEach(score => {
    total += score;
    console.log(`Added ${score}, total is now ${total}`);
});
console.log("Final total:", total);
// Output:
// Adding scores:
// Added 90, total is now 90
// Added 85, total is now 175
// Added 95, total is now 270
// Final total: 270

// === Why Use forEach()? ===
// - It’s an easy way to do something with every item in a list.
// - Perfect for tasks like showing messages or updating values.
// - Doesn’t create a new array, just works with each item.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try changing what forEach() does (e.g., say something else about pets) to explore!
