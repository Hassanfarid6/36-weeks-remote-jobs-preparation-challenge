// Week 2.5: Map Function Explained!!!

// What's the Map Function?
// Map is like a magic painter that changes every item in a list (array) into something new.
// Imagine you have a box of toys, and you want to add a shiny sticker to each one. Map takes
// each toy, transforms it, and gives you a new box with the stickered toys. In JavaScript,
// we use map to transform arrays, like making numbers bigger or words into sentences.

// How Map Works:
// array.map(item => newVersion)
// - Takes each item in the array.
// - Uses a function (often an arrow function!) to change it.
// - Returns a new array with the changed items.
// - The original array stays the same!

// Why Use Map?
// 1. Quick way to change every item in a list.
// 2. Great for making new data, like doubling points or creating messages.
// 3. Works super well with arrow functions (like item => item * 2) for short code.

// Let’s See Map in Action!

// Example 1: Double Numbers
// Turn [1, 2, 3] into [2, 4, 6]
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // Each number gets multiplied by 2
console.log(doubled); // Prints: [2, 4, 6]
console.log(numbers); // Prints: [1, 2, 3] (original array unchanged!)

// Example 2: Add Words
// Turn ["cat", "dog"] into ["I love cat!", "I love dog!"]
const animals = ["cat", "dog"];
const loveAnimals = animals.map(animal => `I love ${animal}!`);
console.log(loveAnimals); // Prints: ["I love cat!", "I love dog!"]

// Example 3: Create Objects
// Turn [1, 2] into [{ id: 1 }, { id: 2 }]
const ids = [1, 2];
const objects = ids.map(id => ({ id: id })); // Wrap object in () to return it
console.log(objects); // Prints: [{ id: 1 }, { id: 2 }]
// Note: () around { id: id } tells JavaScript it’s an object, not a code block.

// Example 4: Add Index
// Map gives you the item and its position (index) in the array
const fruits = ["apple", "banana", "orange"];
const numberedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(numberedFruits); // Prints: ["1. apple", "2. banana", "3. orange"]
// index starts at 0, so we add 1 for 1, 2, 3.

// Intermediate Example: Transform Objects
// Turn a list of people into formatted profiles with extra info
const people = [
    { name: "Alice", age: 10 },
    { name: "Bob", age: 12 },
    { name: "Charlie", age: 11 }
];
const profiles = people.map(person => ({
    fullProfile: `${person.name} is ${person.age} years old`,
    canPlay: person.age >= 11 ? "Can join the game!" : "Too young to play"
}));
console.log(profiles);
// Prints: [
//   { fullProfile: "Alice is 10 years old", canPlay: "Too young to play" },
//   { fullProfile: "Bob is 12 years old", canPlay: "Can join the game!" },
//   { fullProfile: "Charlie is 11 years old", canPlay: "Can join the game!" }
// ]
// What’s happening?
// - Takes each person object.
// - Creates a new object with a fullProfile string and a canPlay status.
// - Uses a condition (age >= 11) to decide the canPlay message.
// - Returns a new array of transformed objects.

// Example 5: Transform with Logic
// Turn scores into "Pass" or "Fail" based on a test
const scores = [85, 60, 90, 45];
const results = scores.map(score => score >= 70 ? "Pass" : "Fail");
console.log(results); // Prints: ["Pass", "Fail", "Pass", "Fail"]
// score => score >= 70 ? "Pass" : "Fail" picks a word based on the score.

// Why Map is Awesome with Arrow Functions
// Arrow functions (like item => item * 2) are short, so map looks clean.
// Compare:
const longMap = numbers.map(function(num) { return num * 2; }); // Old way
const shortMap = numbers.map(num => num * 2); // Arrow function way
// Same result, but arrow function is faster to write!

// Things to Watch Out For
// 1. Map makes a NEW array: It doesn’t change the original.
// 2. Always return something: Map needs a new value for each item.
// 3. Don’t confuse with Filter: Map transforms items; Filter picks items.
// 4. Object returns: Use () like ({ key: value }) for objects.
// Example mistake:
// const bad = ids.map(id => { id: id }); // Wrong! It’s a block, not an object
// const good = ids.map(id => ({ id: id })); // Right!

// Try It Yourself!
// Run this file with:
// node mapFunction.js
// Or copy examples into a browser console (right-click, inspect, console).

// Fun Challenges!
// 1. Map [5, 10, 15] to [25, 100, 225] (square each number).
// 2. Transform ["red", "blue"] to ["Color: red", "Color: blue"].
// 3. Map [{ name: "Sam", points: 50 }, { name: "Lily", points: 80 }]
//    to [{ name: "Sam", status: "Fail" }, { name: "Lily", status: "Pass" }]
//    based on points >= 70.

// Map is your superhero for transforming lists in fun ways! Keep practicing!