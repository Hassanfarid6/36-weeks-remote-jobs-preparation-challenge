// Exploring Synchronous JavaScript Operations
// This file demonstrates synchronous code, where tasks happen one at a time, in order,
// like following a toy-building recipe step by step.
// Part of my JavaScript Foundations learning journey (Week 1.3: Functions or Week 2).

// === What is Synchronous Code? ===
// Synchronous means the computer does one thing at a time, waiting for each task to
// finish before starting the next, like building a toy one piece at a time.
// Example: Step 1, Step 2, Step 3 – no skipping or waiting for later!

// Example 1: Synchronous steps to make a toy
function makeToy(name) {
    console.log(`Step 1: Pick ${name} pieces.`);
    console.log(`Step 2: Assemble ${name}.`);
    console.log(`Step 3: Paint ${name}.`);
    return `${name} is ready!`;
}
console.log("Making a Robot toy:");
console.log(makeToy("Robot"));
// Output:
// Making a Robot toy:
// Step 1: Pick Robot pieces.
// Step 2: Assemble Robot.
// Step 3: Paint Robot.
// Robot is ready!

// Example 2: Synchronous math calculations
function addNumbers(a, b) {
    const sum = a + b;
    console.log(`Adding ${a} + ${b} = ${sum}`);
    return sum;
}
console.log("Doing math step by step:");
const result1 = addNumbers(2, 3);
const result2 = addNumbers(result1, 4);
console.log("Final result:", result2);
// Output:
// Doing math step by step:
// Adding 2 + 3 = 5
// Adding 5 + 4 = 9
// Final result: 9

// Example 3: Synchronous loop through pets
const pets = ["Buddy", "Mittens", "Goldie"];
function greetPets() {
    console.log("Greeting pets one by one:");
    pets.forEach(pet => {
        console.log(`Hello, ${pet}!`);
    });
}
greetPets();
// Output:
// Greeting pets one by one:
// Hello, Buddy!
// Hello, Mittens!
// Hello, Goldie!

// Example 4: Synchronous shopping list check
function checkShoppingList(items) {
    console.log("Checking shopping list:");
    let i = 0;
    while (i < items.length) {
        console.log(`Item ${i + 1}: ${items[i]}`);
        i++;
    }
    return "All items checked!";
}
const shoppingList = ["Apple", "Banana", "Mango"];
console.log(checkShoppingList(shoppingList));
// Output:
// Checking shopping list:
// Item 1: Apple
// Item 2: Banana
// Item 3: Mango
// All items checked!

// === Why Use Synchronous Code? ===
// - It’s simple: one task finishes before the next starts, like following a recipe.
// - Great for tasks that need to happen in order, like math or checking lists.
// - Easy to understand, but can be slow if tasks take time (like waiting for a toy to dry).

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try adding new steps or tasks to explore synchronous code!