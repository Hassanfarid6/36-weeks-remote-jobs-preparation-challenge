        // Introduction to JavaScript Promises


// This file introduces Promises, which are like notes that promise a task will finish
// later, telling you if it worked or not.
// Part of my JavaScript Foundations learning journey (Week 2: Advanced Topics).

// === What are Promises? ===
// A Promise is like a note from a toy factory promising to deliver a toy later. It can
// either "resolve" (toy delivered!) or "reject" (sorry, no toy!). You check the note
// later to see what happened.
// Syntax: new Promise((resolve, reject) => { ... });

// Example 1: Promise to deliver a toy
function orderToy(toy) {
    return new Promise((resolve, reject) => {
        console.log(`Ordering ${toy}...`);
        setTimeout(() => {
            if (toy) {
                resolve(`${toy} delivered!`);
            } else {
                reject("No toy chosen!");
            }
        }, 2000); // Wait 2 seconds
    });
}
console.log("Checking toy order:");
orderToy("Robot")
    .then(result => console.log(result))
    .catch(error => console.log(error));
// Output (after 2 seconds):
// Checking toy order:
// Ordering Robot...
// Robot delivered!

// Example 2: Promise to bake cookies
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
console.log("Checking cookie baking:");
bakeCookies("Chocolate")
    .then(result => console.log(result))
    .catch(error => console.log(error));
bakeCookies("Burnt")
    .then(result => console.log(result))
    .catch(error => console.log(error));
// Output (after 1 second each):
// Checking cookie baking:
// Baking Chocolate cookies...
// Chocolate cookies ready!
// Baking Burnt cookies...
// Cookies burnt!

// Example 3: Promise to check fruit stock
function checkFruit(fruit) {
    return new Promise((resolve) => {
        console.log(`Checking for ${fruit}...`);
        setTimeout(() => {
            resolve(`${fruit} is in stock!`);
        }, 1500); // Wait 1.5 seconds
    });
}
console.log("Checking fruit stock:");
checkFruit("Mango")
    .then(result => console.log(result));
// Output (after 1.5 seconds):
// Checking fruit stock:
// Checking for Mango...
// Mango is in stock!

// Example 4: Chaining Promises for a pet game
function playWithPet(pet) {
    return new Promise((resolve) => {
        console.log(`Playing with ${pet}...`);
        setTimeout(() => {
            resolve(`${pet} is happy!`);
        }, 1000); // Wait 1 second
    });
}
console.log("Pet game with Promise chaining:");
playWithPet("Buddy")
    .then(result => {
        console.log(result);
        return playWithPet("Mittens"); // Chain another Promise
    })
    .then(result => console.log(result));
// Output (after 1 second each):
// Pet game with Promise chaining:
// Playing with Buddy...
// Buddy is happy!
// Playing with Mittens...
// Mittens is happy!

// === Why Use Promises? ===
// - Promises make async tasks (like waiting for a toy) easier to handle.
// - They let you know if the task worked (resolve) or failed (reject).
// - Great for things like fetching data, waiting for deliveries, or app tasks.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try changing toys or wait times to explore Promises!