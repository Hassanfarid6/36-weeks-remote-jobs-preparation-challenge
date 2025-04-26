// app.js: Working with JavaScript Objects Using While Loops
// This file demonstrates how to create objects and use while loops to explore or
// process their properties, like checking items in a toy box until you're done.
// Part of my JavaScript Foundations learning journey (Week 1.1: Complex Primitives).

// === What are Objects and While Loops? ===
// An object is like a toy box with labeled compartments (properties) to store things
// like names or numbers. A while loop keeps doing something until a condition is met,
// like checking toys in a box one by one until you’ve seen them all!
// Syntax: while (condition) { ... }

// Example 1: Use while loop to list pet properties
let pet = {
    name: "Buddy",
    type: "dog",
    age: 3
};
const petKeys = Object.keys(pet); // Get array of property names: ["name", "type", "age"]
let i = 0;
console.log("Pet details (using while):");
while (i < petKeys.length) {
    let key = petKeys[i];
    console.log(`${key}: ${pet[key]}`);
    i++;
}
// Output:
// Pet details (using while):
// name: Buddy
// type: dog
// age: 3

// Example 2: Use while loop to process toy inventory
let toy = {
    name: "Robot",
    price: 25,
    quantity: 5
};
console.log("Selling toys until none left:");
while (toy.quantity > 0) {
    console.log(`Sold 1 ${toy.name}! ${toy.quantity - 1} left.`);
    toy.quantity--; // Reduce quantity
}
console.log(`No more ${toy.name}s in stock!`);
// Output:
// Selling toys until none left:
// Sold 1 Robot! 4 left.
// Sold 1 Robot