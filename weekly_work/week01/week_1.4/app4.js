           // Using async and await for Cleaner Async Code


// This file demonstrates async and await, which make asynchronous code easier to read,
// like politely waiting for a toy delivery before playing with it.
// Part of my JavaScript Foundations learning journey (Week 2: Advanced Topics).

// === What are async and await? ===
// - async: Marks a function as special, so it can handle Promises and return one.
// - await: Pauses the function to wait for a Promise to finish, like waiting for a toy
//   to arrive before opening it. Makes code look like regular (synchronous) code!
// Syntax: async function myFunction() { let result = await myPromise; }

// Example 1: async/await to order a toy
function deliverToy(toy) {
    return new Promise((resolve) => {
        console.log(`Ordering ${toy}...`);
        setTimeout(() => {
            resolve(`${toy} delivered!`);
        }, 2000); // Wait 2 seconds
    });
}
async function orderToy() {
    console.log("Starting toy order:");
    const result = await deliverToy("Robot");
    console.log(result);
}
orderToy();
// Output (after 2 seconds):
// Starting toy order:
// Ordering Robot...
// Robot delivered!

// Example 2: async/await to bake cookies with error handling
function bakeCookies(flavor) {
    return new Promise((resolve, reject) => {
        console.log(`Baking ${flavor} cookies...`);
        setTimeout(() => {
            if (flavor === "Burnt") {
                reject("Cookies burnt!");
            } else {
                resolve(`${flavor} cookies ready!`);
            }
        }, 1000); // Wait 1 second
    });
}
async function makeCookies() {
    console.log("Starting cookie baking:");
    try {
        const result = await bakeCookies("Chocolate");
        console.log(result);
        const burntResult = await bakeCookies("Burnt");
        console.log(burntResult);
    } catch (error) {
        console.log("Oops!", error);
    }
}
makeCookies();
// Output (after 1 second each):
// Starting cookie baking:
// Baking Chocolate cookies...
// Chocolate cookies ready!
// Baking Burnt cookies...
// Oops! Cookies burnt!

// Example 3: async/await to check fruit stock
function checkFruit(fruit) {
    return new Promise((resolve) => {
        console.log(`Checking for ${fruit}...`);
        setTimeout(() => {
            resolve(`${fruit} is in stock!`);
        }, 1500); // Wait 1.5 seconds
    });
}
async function getFruit() {
    console.log("Checking fruit stock:");
    const mangoResult = await checkFruit("Mango");
    console.log(mangoResult);
    const appleResult = await checkFruit("Apple");
    console.log(appleResult);
}
getFruit();
// Output (after 1.5 seconds each):
// Checking fruit stock:
// Checking for Mango...
// Mango is in stock!
// Checking for Apple...
// Apple is in stock!

// Example 4: async/await with Promise.all for multiple pets
function playWithPet(pet) {
    return new Promise((resolve) => {
        console.log(`Playing with ${pet}...`);
        setTimeout(() => {
            resolve(`${pet} is happy!`);
        }, 1000); // Wait 1 second
    });
}
async function petParty() {
    console.log("Starting pet party:");
    const results = await Promise.all([
        playWithPet("Buddy"),
        playWithPet("Mittens")
    ]);
    results.forEach(result => console.log(result));
}
petParty();
// Output (after 1 second):
// Starting pet party:
// Playing with Buddy...
// Playing with Mittens...
// Buddy is happy!
// Mittens is happy!

// === Why Use async and await? ===
// - Makes async code look like regular code, easier to read than .then() chains.
// - Great for waiting for tasks like deliveries, baking, or fetching data.
// - Use with try/catch to handle errors, like catching a burnt cookie.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try changing toys, wait times, or adding new async tasks to explore!
