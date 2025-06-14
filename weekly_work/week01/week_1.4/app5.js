
// Callback Hell vs Promises
// This file compares Callback Hell (messy nested callbacks) with Promises (cleaner async
// code), like a tangled toy delivery vs a clear promise note.
// Part of my JavaScript Foundations learning journey (Week 2: Advanced Topics).

// === Callback Hell vs Promises: What’s the Difference? ===
// - Callback Hell: Using nested callbacks for async tasks, making code hard to read,
//   like a long, tangled list of toy delivery instructions.
// - Promises: A cleaner way to handle async tasks, like a simple note promising a result
//   (success or failure), easier to read and manage.

// Example 1: Callback Hell - Toy delivery with nested callbacks
function deliverToyCallback(toy, callback) {
    console.log(`Ordering ${toy}...`);
    setTimeout(() => {
        callback(`${toy} delivered!`);
    }, 2000); // Wait 2 seconds
}
console.log("Callback Hell: Toy delivery chain:");
deliverToyCallback("Robot", (result1) => {
    console.log(result1);
    deliverToyCallback("Doll", (result2) => {
        console.log(result2);
        deliverToyCallback("Car", (result3) => {
            console.log(result3);
            console.log("Finally done!");
        });
    });
});
// Output (after 2 seconds each):
// Callback Hell: Toy delivery chain:
// Ordering Robot...
// Robot delivered!
// Ordering Doll...
// Doll delivered!
// Ordering Car...
// Car delivered!
// Finally done!

// Example 2: Promises - Toy delivery with Promises
function deliverToyPromise(toy) {
    return new Promise((resolve) => {
        console.log(`Ordering ${toy}...`);
        setTimeout(() => {
            resolve(`${toy} delivered!`);
        }, 2000); // Wait 2 seconds
    });
}
console.log("Promises: Toy delivery chain:");
deliverToyPromise("Robot")
    .then(result => {
        console.log(result);
        return deliverToyPromise("Doll");
    })
    .then(result => {
        console.log(result);
        return deliverToyPromise("Car");
    })
    .then(result => {
        console.log(result);
        console.log("All toys delivered!");
    });
// Output (after 2 seconds each):
// Promises: Toy delivery chain:
// Ordering Robot...
// Robot delivered!
// Ordering Doll...
// Doll delivered!
// Ordering Car...
// Car delivered!
// All toys delivered!

// Example 3: Callback Hell - Baking with nested callbacks
function bakeCallback(item, callback) {
    console.log(`Baking ${item}...`);
    setTimeout(() => {
        if (item === "Burnt Cookies") {
            callback(null, "Baking failed!");
        } else {
            callback(`${item} ready!`, null);
        }
    }, 1000); // Wait 1 second
}
console.log("Callback Hell: Baking chain:");
bakeCallback("Cookies", (result, error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(result);
    bakeCallback("Cake", (result, error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(result);
        bakeCallback("Burnt Cookies", (result, error) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(result);
        });
    });
});
// Output (after 1 second each):
// Callback Hell: Baking chain:
// Baking Cookies...
// Cookies ready!
// Baking Cake...
// Cake ready!
// Baking Burnt Cookies...
// Baking failed!

// Example 4: Promises - Baking with Promises and error handling
function bakePromise(item) {
    return new Promise((resolve, reject) => {
        console.log(`Baking ${item}...`);
        setTimeout(() => {
            if (item === "Burnt Cookies") {
                reject("Baking failed!");
            } else {
                resolve(`${item} ready!`);
            }
        }, 1000); // Wait 1 second
    });
}
console.log("Promises: Baking chain with error handling:");
bakePromise("Cookies")
    .then(result => {
        console.log(result);
        return bakePromise("Cake");
    })
    .then(result => {
        console.log(result);
        return bakePromise("Burnt Cookies");
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Oops!", error);
    });
// Output (after 1 second each):
// Promises: Baking chain with error handling:
// Baking Cookies...
// Cookies ready!
// Baking Cake...
// Cake ready!
// Baking Burnt Cookies...
// Oops! Baking failed!

// === Why Use Promises Over Callback Hell? ===
// - Callback Hell makes code messy and hard to follow, like a tangled toy delivery list.
// - Promises are cleaner, easier to read, and handle errors better with .catch().
// - Promises are great for async tasks like fetching data or waiting for deliveries.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try adding more tasks or changing wait times to explore!
