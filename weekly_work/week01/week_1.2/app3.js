// javascript
// app.js: Exploring JavaScript's find() Method with Diverse Examples
// This file demonstrates the find() method, which searches an array and returns
// the first item that meets a condition, or undefined if no item is found.
// Includes simple and varied examples to show find()'s flexibility.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What is find()? ===
// find() is like a detective! It searches an array and grabs the first item
// that matches your rule, then stops. It’s perfect for finding one special thing.
// Syntax: array.find(function(item) { return condition; })

// Example 1: Find the first even number in an array
const numbers = [1, 3, 4, 6, 8];
const firstEven = numbers.find(num => num % 2 === 0);
console.log("Original numbers:", numbers); // Output: Original numbers: [1, 3, 4, 6, 8]
console.log("First even number:", firstEven); // Output: First even number: 4

// Example 2: Find a fruit starting with 'm'
const fruits = ["apple", "banana", "mango", "orange"];
const mFruit = fruits.find(fruit => fruit.startsWith("m"));
console.log("Original fruits:", fruits); // Output: Original fruits: [apple, banana, mango, orange]
console.log("First fruit starting with 'm':", mFruit); // Output: First fruit starting with 'm': mango

// Example 3: Find a student with a specific grade
const students = [
    { name: "Aisha", grade: 5 },
    { name: "Zain", grade: 3 },
    { name: "Sara", grade: 6 }
];
const gradeFiveStudent = students.find(student => student.grade === 5);
console.log("Original students:", students); // Output: Original students: [{name: "Aisha", grade: 5}, ...]
console.log("First student with grade 5:", gradeFiveStudent); 
// Output: First student with grade 5: {name: "Aisha", grade: 5}

// Example 4: Find a book with a rating above 4
const books = [
    { title: "Space Adventure", rating: 4.5 },
    { title: "Magic Forest", rating: 3.8 },
    { title: "Star Journey", rating: 4.8 }
];
const highRatedBook = books.find(book => book.rating > 4);
console.log("Original books:", books); // Output: Original books: [{title: "Space Adventure", ...}, ...]
console.log("First book with rating > 4:", highRatedBook); 
// Output: First book with rating > 4: {title: "Space Adventure", rating: 4.5}

// Example 5: Find a user by ID (Complex)
const users = [
    { id: "U001", name: "Aisha", email: "aisha@example.com" },
    { id: "U002", name: "Zain", email: "zain@example.com" },
    { id: "U003", name: "Sara", email: "sara@example.com" }
];
const userById = users.find(user => user.id === "U002");
console.log("Original users:", users); // Output: Original users: [{id: "U001", ...}, ...]
console.log("User with ID U002:", userById); 
// Output: User with ID U002: {id: "U002", name: "Zain", email: "zain@example.com"}

// Example 6: Find a product in stock with price below 50 (Complex)
const products = [
    { name: "Notebook", price: 25, inStock: true },
    { name: "Pen", price: 5, inStock: false },
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Marker", price: 15, inStock: true }
];
const affordableProduct = products.find(product => product.price < 50 && product.inStock);
console.log("Original products:", products); // Output: Original products: [{name: "Notebook", ...}, ...]
console.log("First affordable product in stock:", affordableProduct); 
// Output: First affordable product in stock: {name: "Notebook", price: 25, inStock: true}

// Example 7: Find a team with a specific member (Complex)
const teams = [
    { team: "Blue", members: [{ name: "Aisha", role: "Leader" }, { name: "Zain", role: "Member" }] },
    { team: "Red", members: [{ name: "Sara", role: "Leader" }, { name: "Omar", role: "Member" }] }
];
const teamWithAisha = teams.find(team => team.members.some(member => member.name === "Aisha"));
console.log("Original teams:", teams); // Output: Original teams: [{team: "Blue", ...}, ...]
console.log("Team with Aisha:", teamWithAisha); 
// Output: Team with Aisha: {team: "Blue", members: [{name: "Aisha", role: "Leader"}, {name: "Zain", role: "Member"}]}

// === Why Use find()? ===
// - Great for finding one specific item (e.g., a user, a product, a team).
// - Stops after the first match, making it fast.
// - Returns undefined if nothing matches, so you can handle missing items.
// - Perfect for web apps, like finding a user by ID or a product by criteria.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try modifying the conditions (e.g., find users by email, products by price) to explore find()!
