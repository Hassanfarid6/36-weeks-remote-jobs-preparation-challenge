// Exploring Asynchronous JavaScript Operations
// This file demonstrates asynchronous code, where tasks can start and finish later,
// like sending a toy to be painted while you do other things.
// Part of my JavaScript Foundations learning journey (Week 2: Advanced Topics).

// === What is Asynchronous Code? ===
// Asynchronous means the computer can start a task, move on to other things, and come
// back when the task is done, like baking cookies while playing with toys.
// Tools: setTimeout (waits a bit), Promises (promises to finish), async/await (waits nicely).

// Example 1: setTimeout - Delayed toy delivery
function deliverToy(name) {
    console.log(`Starting to deliver ${name}...`);
    setTimeout(() => {
        console.log(`${name} delivered!`);
    }, 2000); // Wait 2 seconds
    console.log("Moving on to other tasks...");
}
console.log("Ordering a Robot toy:");
deliverToy("Robot");
// Output (after 2 seconds for delivery):
// Ordering a Robot toy:
// Starting to deliver Robot...
// Moving on to other tasks...
// Robot delivered!

// Example 2: Promise - Bake cookies with a promise
function bakeCookies(flavor) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to bake ${flavor} cookies...`);
        setTimeout(() => {
            if (flavor) {
                resolve(`${flavor} cookies are ready!`);
            } else {
                reject("No flavor chosen!");
            }
        }, 1000); // Wait 1 second
    });
}
console.log("Baking cookies with Promise:");
bakeCookies("Chocolate")
    .then(result => console.log(result))
    .catch(error => console.log(error));
// Output (after 1 second):
// Baking cookies with Promise:
// Starting to bake Chocolate cookies...
// Chocolate cookies are ready!

// Example 3: async/await - Order a fruit smoothly
async function orderFruit(fruit) {
    console.log(`Ordering ${fruit}...`);
    const delivery = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${fruit} delivered!`);
        }, 1500); // Wait 1.5 seconds
    });
    const result = await delivery; // Wait for delivery
    console.log(result);
}
console.log("Using async/await for fruit:");
orderFruit("Mango");
// Output (after 1.5 seconds):
// Using async/await for fruit:
// Ordering Mango...
// Mango delivered!

// Example 4: Combining callbacks and Promises - Pet game
function playWithPet(pet, callback) {
    console.log(`Starting to play with ${pet}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            callback(`Played with ${pet}!`);
            resolve(`${pet} is happy!`);
        }, 1000); // Wait 1 second
    });
}
const cheer = (message) => console.log(message);
console.log("Playing with pet:");
playWithPet("Buddy", cheer).then(result => console.log(result));
// Output (after 1 second):
// Playing with pet:
// Starting to play with Buddy...
// Played with Buddy!
// Buddy is happy!

// === Why Use Asynchronous Code? ===
// - Lets you do other tasks while waiting, like playing while cookies bake.
// - Great for slow tasks, like fetching data, delivering toys, or waiting for clicks.
// - Makes apps faster and smoother, but needs care to handle results.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try changing wait times or tasks to explore async code!