// javascript
// app.js: Exploring JavaScript's map() Method with Diverse Examples
// This file demonstrates the map() method, which transforms every item in an array
// into something new, creating a new array without changing the original.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What is map()? ===
// map() is like a magic paintbrush! It takes each item in an array, changes it
// (like painting it a new color), and puts the new version in a new array.
// Syntax: array.map(function(item) { return newItem; })

// Example 1: Double the numbers in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers); // Output: Original numbers: [1, 2, 3, 4, 5]
console.log("Doubled numbers:", doubled); // Output: Doubled numbers: [2, 4, 6, 8, 10]

// Example 2: Add "Fruit: " to each fruit in an array
const fruits = ["apple", "banana", "mango"];
const labeledFruits = fruits.map(fruit => `Fruit: ${fruit}`);
console.log("Original fruits:", fruits); // Output: Original fruits: [apple, banana, mango]
console.log("Labeled fruits:", labeledFruits); // Output: Labeled fruits: [Fruit: apple, Fruit: banana, Fruit: mango]

// Example 3: Add bonus points to scores
const scores = [10, 20, 30];
const bonusScores = scores.map(score => score + 5);
console.log("Original scores:", scores); // Output: Original scores: [10, 20, 30]
console.log("Bonus scores:", bonusScores); // Output: Bonus scores: [15, 25, 35]

// Example 4: Convert names to uppercase
const names = ["aisha", "zain", "sara"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Original names:", names); // Output: Original names: [aisha, zain, sara]
console.log("Uppercase names:", upperNames); // Output: Uppercase names: [AISHA, ZAIN, SARA]

// Example 5: Extract lengths of words
const words = ["cat", "dog", "elephant"];
const wordLengths = words.map(word => word.length);
console.log("Original words:", words); // Output: Original words: [cat, dog, elephant]
console.log("Word lengths:", wordLengths); // Output: Word lengths: [3, 3, 8]

// Example 6: Create greeting messages from an array of objects
const students = [
    { name: "Aisha", grade: 5 },
    { name: "Zain", grade: 4 },
    { name: "Sara", grade: 6 }
];
const greetings = students.map(student => `Hello, ${student.name}! You're in grade ${student.grade}.`);
console.log("Original students:", students); // Output: Original students: [{name: "Aisha", grade: 5}, ...]
console.log("Greetings:", greetings); 
// Output: Greetings: [
//   "Hello, Aisha! You're in grade 5.",
//   "Hello, Zain! You're in grade 4.",
//   "Hello, Sara! You're in grade 6."
// ]

// Example 7: Square numbers and add index
const values = [2, 3, 4];
const squaredWithIndex = values.map((value, index) => value * value + index);
console.log("Original values:", values); // Output: Original values: [2, 3, 4]
console.log("Squared plus index:", squaredWithIndex); // Output: Squared plus index: [4, 9, 16]
// Explanation: 2² + 0 = 4, 3² + 1 = 10, 4² + 2 = 18

// === Why Use map()? ===
// - Transforms arrays easily (e.g., doubling numbers, formatting text, working with objects).
// - Keeps the original array unchanged, making it safe.
// - Perfect for modern JavaScript apps, like updating web pages or processing data.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try modifying the examples (e.g., triple numbers, change greetings) to explore map()!
