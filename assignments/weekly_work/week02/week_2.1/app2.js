// promises.js

// === Understanding Promises ===
// This file explains Promises in JavaScript as part of Week 2.1 (Revision of Promises, Async JS).
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// === What is a Promise? ===
// A Promise is like a placeholder for a future result. It’s like ordering food online:
// - You place the order (start an async task).
// - You get a receipt (the Promise) that promises your food will arrive.
// - Later, the food is either delivered (resolved) or there’s an issue (rejected).

// A Promise can be in one of three states:
// 1. **Pending**: The task is ongoing (e.g., food is being cooked).
// 2. **Fulfilled**: The task completed successfully (e.g., food is delivered).
// 3. **Rejected**: The task failed (e.g., restaurant is closed).

// === Why Use Promises? ===
// JavaScript is single-threaded, so async tasks (e.g., API calls, timers) must be handled without blocking.
// Promises provide a cleaner way to handle async results compared to callbacks, avoiding "callback hell."

// === Key Syntax ===
// - `new Promise((resolve, reject) => {...})`: Creates a Promise.
// - `resolve(value)`: Marks the Promise as fulfilled with a value.
// - `reject(error)`: Marks the Promise as rejected with an error.
// - `.then(result => {...})`: Handles the fulfilled result.
// - `.catch(error => {...})`: Handles errors.
// - `.finally(() => {...})`: Runs regardless of success or failure.

// === Example 1: Basic Promise with Timer ===
function cookFood(food) {
    return new Promise((resolve, reject) => {
      console.log(`Cooking ${food}...`);
      setTimeout(() => {
        resolve(`${food} is ready!`); // Success after 2 seconds
      }, 2000);
    });
}
  
// Run the Promise
cookFood("Pizza")
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
// Output:
// Cooking Pizza...
// (2-second pause)
// Pizza is ready!

// === Example 2: Promise with Error Handling ===
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for user ${userId}...`);
    setTimeout(() => {
      if (userId < 0) {
        reject("Invalid user ID!"); // Error case
      } else {
        resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
      }
    }, 1500); // Simulate 1.5-second delay
  });
}

// Run the Promise
fetchUserData(101)
  .then(user => console.log(`User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`))
  .catch(error => console.error("Error:", error));
// Output:
// Fetching data for user 101...
// (1.5-second pause)
// User Info: ID=101, Name=User 101, Email=user101@example.com

// Test error case
fetchUserData(-1)
  .then(user => console.log(user))
  .catch(error => console.error("Error:", error));
// Output:
// Fetching data for user -1...
// (1.5-second pause)
// Error: Invalid user ID!

// === Example 3: Chaining Promises ===
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    console.log(`Reading file: ${fileName}...`);
    setTimeout(() => {
      if (fileName === "error.txt") {
        reject("File not found!");
      } else {
        resolve(`Content of ${fileName}: Hello, this is a sample file!`);
      }
    }, 1000); // Simulate 1-second delay
  });
}

// Chain Promises to process file content
readFile("sample.txt")
  .then(content => {
    console.log(content);
    return content.toUpperCase(); // Pass result to next .then
})
.then(upperContent => console.log("Uppercase content:", upperContent))
.catch(error => console.error("Error:", error))
.finally(() => console.log("File operation complete!"));
// Output:
// Reading file: sample.txt...
// (1-second pause)
// Content of sample.txt: Hello, this is a sample file!
// Uppercase content: CONTENT OF SAMPLE.TXT: HELLO, THIS IS A SAMPLE FILE!
// File operation complete!

// === Example 4: Sequential Promises ===
function performTasks() {
  console.log("Starting tasks...");
  cookFood("Burger")
    .then(result => {
      console.log(result);
      return fetchUserData(102); // Next task
    })
    .then(user => {
      console.log(`Fetched user: ${user.name}`);
      return readFile("data.txt"); // Next task
    })
    .then(content => {
      console.log(content);
      console.log("All tasks complete!");
    })
    .catch(error => console.error("Error in tasks:", error));
}

// Run the sequential tasks
performTasks();
// Output:
// Starting tasks...
// Cooking Burger...
// (2-second pause)
// Burger is ready!
// Fetching data for user 102...
// (1.5-second pause)
// Fetched user: User 102
// Reading file: data.txt...
// (1-second pause)
// Content of data.txt: Hello, this is a sample file!
// All tasks complete!

// === Example 5: Parallel Promises with Promise.all ===
function fetchMultipleUsers() {
  console.log("Fetching multiple users...");
  const userPromises = [
    fetchUserData(103),
    fetchUserData(104),
    fetchUserData(105)
  ];
  Promise.all(userPromises)
    .then(users => {
      console.log("All users fetched!");
      users.forEach(user => console.log(`User: ID=${user.id}, Name=${user.name}`));
    })
    .catch(error => console.error("Error:", error));
}

// Run the parallel tasks
fetchMultipleUsers();
// Output:
// Fetching multiple users...
// Fetching data for user 103...
// Fetching data for user 104...
// Fetching data for user 105...
// (1.5-second pause, since they run in parallel)
// All users fetched!
// User: ID=103, Name=User 103
// User: ID=104, Name=User 104
// User: ID=105, Name=User 105

// === Key Points ===
// - A Promise represents a future result of an async operation.
// - States: Pending, Fulfilled, Rejected.
// - Use `.then()` for success, `.catch()` for errors, `.finally()` for cleanup.
// - `Promise.all` runs multiple Promises in parallel, resolving when all complete.
// - Promises are cleaner than callbacks for handling async tasks.

// === Common Pitfall ===
// - Forgetting to handle errors with `.catch()` can lead to uncaught Promise rejections.
// - Chaining too many `.then()` calls can make code complex (use `async/await` for cleaner syntax, covered in the course).

// === Try It Yourself ===
// 1. Create a new Promise-based function (e.g., `downloadFile` or `sendEmail`).
// 2. Chain multiple Promises to process data step-by-step.
// 3. Use `Promise.all` to run several async tasks in parallel.

// === Running This File ===
// Run in Node.js: `node promises.js` (ensure Node.js is installed, Week 2.2).
// Save this file in your Git repository and push to GitHub (Week 2.6). 