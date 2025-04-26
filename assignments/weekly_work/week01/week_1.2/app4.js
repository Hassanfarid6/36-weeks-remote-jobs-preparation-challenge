

// Exploring JavaScript's sort() Method
// This file demonstrates the sort() method, which arranges items in an array
// in a specific order, like alphabetical or numerical.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What is sort()? ===
// sort() is like a toy organizer! It takes a messy list (array) and puts the items
// in order, like lining up toys from smallest to biggest or A to Z.
// Syntax: array.sort() or array.sort((a, b) => a - b) for numbers.

// Example 1: Sort numbers from smallest to biggest
const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Original numbers:", numbers); // Output: Original numbers:   [5, 2, 8, 1, 9]
console.log("Sorted numbers:", sortedNumbers); // Output: Sorted numbers: [1, 2, 5, 8, 9]

// Example 2: Sort fruits alphabetically (A to Z)
const fruits = ["banana", "apple", "mango", "orange"];
const sortedFruits = fruits.sort();
console.log("Original fruits:", fruits); // Output: Original fruits:   [banana, apple, mango, orange]
console.log("Sorted fruits:", sortedFruits); // Output: Sorted fruits: [apple, banana, mango, orange]

// Example 3: Sort names in reverse order (Z to A)
const names = ["Aisha", "Zain", "Sumair"];
const reverseNames = names.sort().reverse();
console.log("Original names:", names); // Output: Original names: [Aisha, Zain, Sumair]
console.log("Reverse sorted names:", reverseNames); // Output: Reverse sorted names: [Zain, Sumair, Aisha]

// Example 4: Sort students by grade (highest to lowest)
const students = [
    { name: "Aisha", grade: 5 },
    { name: "Zain", grade: 3 },
    { name: "Sumair", grade: 6 }
];
const sortedStudents = students.sort((a, b) => b.grade - a.grade);
console.log("Original students:", students); // Output: Original students: [{name: "Sumair", grade: 6}, ...]
console.log("Sorted students by grade (high to low):", sortedStudents); 
// Output: Sorted students by grade (high to low): [{name: "Sumair", grade: 6}, {name: "Aisha", grade: 5}, {name: "Zain", grade: 3}]

// === Why Use sort()? ===
// - Organizes lists in a specific order (e.g., numbers, names, grades).
// - Changes the original array, so be careful or make a copy first.
// - Perfect for making lists look neat, like sorting scores or names on a webpage.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try modifying the sorting (e.g., sort fruits Z to A, grades low to high) to explore sort()!
