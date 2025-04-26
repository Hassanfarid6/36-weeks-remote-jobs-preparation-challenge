         // Synchronous vs Asynchronous JavaScript

// This file compares synchronous code (step-by-step tasks) with asynchronous code
// (tasks that start and finish later), like building a toy vs ordering one online.
// Part of my JavaScript Foundations learning journey (Week 2: Advanced Topics).

// === Synchronous vs Asynchronous: What’s the Difference? ===
// - Synchronous: Tasks happen one at a time, like building a toy step by step, waiting
//   for each step to finish before the next.
// - Asynchronous: Tasks can start, and the computer moves on while waiting for them to
//   finish, like ordering a toy and playing while it’s delivered.

// Example 1: Synchronous - Build a toy step by step
function buildToySync(name) {
    console.log(`Step 1: Pick ${name} pieces.`);
    console.log(`Step 2: Assemble ${name}.`);
    console.log(`Step 3: Paint ${name}.`);
    return `${name} is ready!`;
}
console.log("Synchronous: Building a Robot toy:");
console.log(buildToySync("Robot"));
// Output:
// Synchronous: Building a Robot toy:
// Step 1: Pick Robot pieces.
// Step 2: Assemble Robot.
// Step 3: Paint Robot.
// Robot is ready!

// Example 2: Asynchronous - Order a toy with setTimeout
function orderToyAsync(name) {
    console.log(`Starting to order ${name}...`);
    setTimeout(() => {
        console.log(`${name} delivered!`);
    }, 2000); // Wait 2 seconds
    console.log("Playing while waiting for delivery...");
}
console.log("Asynchronous: Ordering a Robot toy:");
orderToyAsync("Robot");
// Output (delivery after 2 seconds):
// Asynchronous: Ordering a Robot toy:
// Starting to order Robot...
// Playing while waiting for delivery...
// [after 2 seconds]
// Robot delivered!

// Example 3: Synchronous - Add numbers in order
function addNumbersSync(a, b) {
    const sum = a + b;
    console.log(`Adding ${a} + ${b} = ${sum}`);
    return sum;
}
console.log("Synchronous: Adding numbers step by step:");
const sum1 = addNumbersSync(2, 3);
const sum2 = addNumbersSync(sum1, 4);
console.log("Final sum:", sum2);
// Output:
// Synchronous: Adding numbers step by step:
// Adding 2 + 3 = 5
// Adding 5 + 4 = 9
// Final sum: 9

// Example 4: Asynchronous - Bake cookies with Promise
function bakeCookiesAsync(flavor) {
    return new Promise((resolve) => {
        console.log(`Starting to bake ${flavor} cookies...`);
        setTimeout(() => {
            resolve(`${flavor} cookies are ready!`);
        }, 1000); // Wait 1 second
    });
}
console.log("Asynchronous: Baking cookies with Promise:");
bakeCookiesAsync("Chocolate")
    .then(result => console.log(result))
    .catch(error => console.log(error));
console.log("Doing other tasks while cookies bake...");
// Output (cookies ready after 1 second):
// Asynchronous: Baking cookies with Promise:
// Starting to bake Chocolate cookies...
// Doing other tasks while cookies bake...
// [after 1 second]
// Chocolate cookies are ready!

// === Why Use Synchronous vs Asynchronous? ===
// - Synchronous: Simple and predictable, great for tasks that must happen in order
//   (like math or building things), but can be slow if tasks take time.
// - Asynchronous: Faster for waiting tasks (like deliveries or baking), lets you do
//   other things, but needs tools like Promises to handle results.
// - Use sync for quick, ordered tasks; async for slow tasks like fetching data.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try changing tasks or wait times to explore sync vs async!