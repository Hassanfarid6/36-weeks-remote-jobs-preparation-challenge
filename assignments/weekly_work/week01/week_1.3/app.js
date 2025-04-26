// ```javascript
// app.js: Working with JavaScript Objects Using For Loops
// This file demonstrates how to create objects and use for loops to explore their
// properties, values, or key-value pairs, like opening a toy box and checking each item.
// Part of my JavaScript Foundations learning journey (Week 1.1: Complex Primitives).

// === What are Objects and For Loops? ===
// An object is like a toy box with labeled compartments (properties) to store things
// like names or numbers. For loops (like for...in or for...of) let you look at each
// item in the box one by one, like checking every toy inside!
// Syntax: for (let key in obj) { ... } or for (let [key, value] of Object.entries(obj)) { ... }

// Example 1: Use for...in to list pet properties
let pet = {
    name: "Buddy",
    type: "dog",
    age: 3
};
console.log("Pet details (using for...in):");
for (let key in pet) {
    console.log(`${key}: ${pet[key]}`);
}
// Output:
// Pet details (using for...in):
// name: Buddy
// type: dog
// age: 3

// Example 2: Use for...of with Object.entries() to show toy details
let toy = {
    name: "Robot",
    price: 25,
    color: "blue"
};
console.log("Toy details (using for...of):");
for (let [key, value] of Object.entries(toy)) {
    console.log(`The toy's ${key} is ${value}.`);
}
// Output:
// Toy details (using for...of):
// The toy's name is Robot.
// The toy's price is 25.
// The toy's color is blue.

// Example 3: Loop through an object with a method
let student = {
    name: "Aisha",
    scores: [90, 85, 95],
    getAverage: function() {
        const sum = this.scores.reduce((a, b) => a + b, 0);
        return sum / this.scores.length;
    }
};
console.log("Student info (using for...in):");
for (let key in student) {
    if (typeof student[key] !== "function") {
        console.log(`${key}: ${student[key]}`);
    } else {
        console.log(`${key}: This is a method!`);
    }
}
console.log("Aisha's average score:", student.getAverage());
// Output:
// Student info (using for...in):
// name: Aisha
// scores: 90,85,95
// getAverage: This is a method!
// Aisha's average score: 90

// Example 4: Count properties in a fruit object
let fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet",
    weight: "200g"
};
let count = 0;
for (let key in fruit) {
    count++;
}
console.log("Fruit object has", count, "properties:", fruit);
// Output: Fruit object has 4 properties: {name: "Mango", color: "Yellow", taste: "Sweet", weight: "200g"}

// === Why Use Objects with For Loops? ===
// - Objects store related data (like a toy’s name and price) in one place.
// - For loops let you check or use every piece of data in the object.
// - Great for apps, like showing all details of a product or student.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new objects or changing the loops to explore objects!




