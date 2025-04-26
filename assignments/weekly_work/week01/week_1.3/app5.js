// Exploring JavaScript Callback Functions and Use Cases
// This file demonstrates callback functions, which are functions passed to other
// functions to be used later, like giving a toy a special instruction.
// Part of my JavaScript Foundations learning journey (Week 1.3: Functions).

// === What are Callback Functions? ===
// A callback function is like a toy instruction you give to another toy to use when
// it’s ready. You pass it to a function, and it gets called at the right time.
// Syntax: function main(callback) { callback(); }

// Example 1: Callback with array forEach (Use Case: Process each item)
const pets = ["Buddy", "Mittens", "Goldie"];
const greetPet = (pet) => console.log(`Hello, ${pet}!`);
console.log("Greeting pets with forEach callback:");
pets.forEach(greetPet);
// Output:
// Greeting pets with forEach callback:
// Hello, Buddy!
// Hello, Mittens!
// Hello, Goldie!

// Example 2: Callback with a custom function (Use Case: Finish a task)
const doHomework = (subject, callback) => {
    console.log(`Doing ${subject} homework...`);
    callback();
};
const finishHomework = () => console.log("All done!");
doHomework("Math", finishHomework);
// Output:
// Doing Math homework...
// All done!

// Example 3: Callback with array map (Use Case: Transform items)
const numbers = [1, 2, 3];
const doubleNumber = (num) => num * 2;
console.log("Doubling numbers with map callback:");
const doubled = numbers.map(doubleNumber);
console.log("Doubled numbers:", doubled);
// Output:
// Doubling numbers with map callback:
// Doubled numbers: [2, 4, 6]

// Example 4: Callback for a toy button (Use Case: Handle events)
const pressButton = (callback) => {
    console.log("Button pressed!");
    callback();
};
const makeSound = () => console.log("Beep boop!");
pressButton(makeSound);
// Output:
// Button pressed!
// Beep boop!

// === Why Use Callback Functions? ===
// - They let you tell other functions what to do later, like giving instructions.
// - Perfect for array methods (forEach, map), finishing tasks, or handling button clicks.
// - Make code flexible, like swapping toy actions without changing the toy.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new callbacks or changing what they do to explore!
