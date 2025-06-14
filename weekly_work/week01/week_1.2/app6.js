// app.js: Working with JavaScript Objects
// This file demonstrates how to create, access, modify, and use objects in JavaScript.
// Objects are like toy boxes that store related information (like names and numbers).
// Part of my JavaScript Foundations learning journey (Week 1.1: Complex Primitives).

// === What are Objects? ===
// An object is like a toy box with labeled compartments (properties) to store things
// like names, numbers, or even lists. You can add, change, or check what’s inside!
// Syntax: let obj = { key: value, key2: value2 };

// Example 1: Create and access an object (Simple)
let pet = {
    name: "Buddy",
    type: "dog",
    age: 3
};
console.log("Pet object:", pet); // Output: Pet object: {name: "Buddy", type: "dog", age: 3}
console.log("Pet name:", pet.name); // Output: Pet name: Buddy
console.log("Pet type:", pet["type"]); // Output: Pet type: dog

// Example 2: Modify and add properties (Simple)
let toy = {
    name: "Robot",
    price: 20
};
toy.price = 25; // Update price
toy.color = "blue"; // Add new property
console.log("Updated toy:", toy); // Output: Updated toy: {name: "Robot", price: 25, color: "blue"}

// Example 3: Object with methods (Simple)
let student = {
    name: "Aisha",
    scores: [90, 85, 95],
    getAverage: function() {
        const sum = this.scores.reduce((a, b) => a + b, 0);
        return sum / this.scores.length;
    }
};
console.log("Student object:", student); // Output: Student object: {name: "Aisha", scores: [90, 85, 95], getAverage: [Function]}
console.log("Aisha's average score:", student.getAverage()); // Output: Aisha's average score: 90

// Example 4: Loop through object properties (Simple)
let fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet"
};
console.log("Fruit details:");
for (let key in fruit) {
    console.log(`${key}: ${fruit[key]}`);
}
// Output:
// Fruit details:
// name: Mango
// color: Yellow
// taste: Sweet

// === Why Use Objects? ===
// - Objects organize related data (like a pet’s name and age) in one place.
// - You can add, change, or check properties easily.
// - Methods let objects do things, like calculating an average.
// - Perfect for apps, like storing user info or product details.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new objects or adding properties to explore objects!
