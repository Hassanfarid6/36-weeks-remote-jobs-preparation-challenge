// javascript
// app.js: Exploring JavaScript's filter() Method
// This file demonstrates the filter() method, which picks items from an array that
// meet a condition, creating a new array without changing the original.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What is filter()? ===
// filter() is like a treasure hunter! It looks at each item in an array and keeps
// only the ones that pass a test (like finding treasures that shine).
// Syntax: array.filter(function(item) { return condition; })

// Example 1: Keep even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log("Original numbers:", numbers); // Output: Original numbers: [1, 2, 3, 4, 5, 6]
console.log("Even numbers:", evens); // Output: Even numbers: [2, 4, 6]

// Example 2: Pick fruits starting with 'b'
const fruits = ["apple", "banana", "mango", "blueberry"];
const bFruits = fruits.filter(fruit => fruit.startsWith("b"));
console.log("Original fruits:", fruits); // Output: Original fruits: [apple, banana, mango, blueberry]
console.log("Fruits starting with 'b':", bFruits); // Output: Fruits starting with 'b': [banana, blueberry]

// Example 3: Find students with grade above 4
const students = [
    { name: "Aisha", grade: 5 },
    { name: "Zain", grade: 3 },
    { name: "Sara", grade: 6 }
];
const topStudents = students.filter(student => student.grade > 4);
console.log("Original students:", students); // Output: Original students: [{name: "Aisha", grade: 5}, ...]
console.log("Top students (grade > 4):", topStudents); 
// Output: Top students (grade > 4): [{name: "Aisha", grade: 5}, {name: "Sara", grade: 6}]



// Example 4: Filter books by genre and rating (Complex)
const books = [
    { title: "Space Adventure", genre: "Sci-Fi", rating: 4.5 },
    { title: "Magic Forest", genre: "Fantasy", rating: 3.8 },
    { title: "Star Journey", genre: "Sci-Fi", rating: 4.8 },
    { title: "Dragon Tale", genre: "Fantasy", rating: 4.2 },
    { title: "Mystery Island", genre: "Mystery", rating: 4.0 }
];
const topSciFiBooks = books.filter(book => book.genre === "Sci-Fi" && book.rating >= 4.5);
console.log("Original books:", books); // Output: Original books: [{title: "Space Adventure", ...}, ...]
console.log("Top Sci-Fi books (rating >= 4.5):", topSciFiBooks); 
// Output: Top Sci-Fi books (rating >= 4.5): [{title: "Space Adventure", genre: "Sci-Fi", rating: 4.5}, {title: "Star Journey", genre: "Sci-Fi", rating: 4.8}]

// Example 5: Filter students with multiple conditions (Complex)
const classRoster = [
    { name: "Aisha", age: 10, grade: 5, hasAward: true },
    { name: "Zain", age: 11, grade: 4, hasAward: false },
    { name: "Sara", age: 12, grade: 6, hasAward: true },
    { name: "Omar", age: 10, grade: 3, hasAward: false }
];
const honorStudents = classRoster.filter(student => 
    student.grade >= 5 && student.age <= 11 && student.hasAward
);
console.log("Original roster:", classRoster); // Output: Original roster: [{name: "Aisha", ...}, ...]
console.log("Honor students (grade >= 5, age <= 11, has award):", honorStudents); 
// Output: Honor students (grade >= 5, age <= 11, has award): [{name: "Aisha", age: 10, grade: 5, hasAward: true}]

// Example 6: Filter nested data (Complex)
const teams = [
    { team: "Blue", members: [{ name: "Aisha", score: 90 }, { name: "Zain", score: 85 }] },
    { team: "Red", members: [{ name: "Sara", score: 95 }, { name: "Omar", score: 70 }] },
    { team: "Green", members: [{ name: "Lila", score: 88 }, { name: "Ali", score: 92 }] }
];
const highScoringTeams = teams.filter(team => 
    team.members.some(member => member.score >= 90)
);
console.log("Original teams:", teams); // Output: Original teams: [{team: "Blue", ...}, ...]
console.log("Teams with at least one score >= 90:", highScoringTeams); 
// Output: Teams with at least one score >= 90: [
//   {team: "Blue", members: [{name: "Aisha", score: 90}, {name: "Zain", score: 85}]},
//   {team: "Red", members: [{name: "Sara", score: 95}, {name: "Omar", score: 70}]},
//   {team: "Green", members: [{name: "Lila", score: 88}, {name: "Ali", score: 92}]}
// ]

// === Why Use filter()? ===
// - Perfect for selecting items that match a rule (e.g., even numbers, specific names).
// - Keeps the original array unchanged, so your data stays safe.
// - Great for building interactive apps, like showing only certain items on a webpage.
// - Ideal for selecting items based on rules (e.g., high grades, specific genres).
// - Handles complex conditions, like multiple criteria or nested data.
// - Keeps the original array safe, perfect for web apps or data processing.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try modifying the conditions (e.g., filter by different genres, scores) to explore filter()!

