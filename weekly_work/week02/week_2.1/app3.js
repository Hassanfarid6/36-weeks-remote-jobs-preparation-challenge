// promisified Vs NonPromisified in js

// === Promisified vs. Non-Promisified Functions ===
// This file explains the difference between promisified and non-promisified functions in JavaScript,
// as part of Week 2.1 (Revision of Promises, Async JS).

// === What are Promisified and Non-Promisified Functions? ===
// - **Non-Promisified Functions**: Use callbacks to handle asynchronous results. They pass results or errors 
// to a callback function.
// - **Promisified Functions**: Return a Promise, allowing use of `.then()`, `.catch()`, or `async/await` for 
// cleaner async handling.
// Analogy:
// - Non-Promisified: You ask a chef to cook and give them a phone number to call when done (callback).
// - Promisified: You get a ticket (Promise) that you can check later for the food or an error message.

// === Why Compare Them? ===
// Non-promisified functions often lead to "callback hell" (nested callbacks), making code hard to read.
// Promisified functions simplify async code with Promises, enabling chaining or `async/await` for better 
// readability and error handling.

// === Example 1: Non-Promisified vs. Promisified Timer ===
// Non-Promisified: Callback-based timer
function delayCallback(ms, callback) {
    console.log(`Waiting for ${ms}ms (callback)...`);
    setTimeout(() => {
      callback(null, `Waited ${ms}ms`); // First arg is error (null if none), second is result
    }, ms);
}

// Promisified: Promise-based timer
function delayPromise(ms) {
  console.log(`Waiting for ${ms}ms (Promise)...`);
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
}

// Run non-promisified
delayCallback(1000, (error, result) => {
  if (error) console.error("Error:", error);
  else console.log(result);
});
// Output:
// Waiting for 1000ms (callback)...
// (1-second pause)
// Waited 1000ms

// Run promisified
delayPromise(1000)
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
// Output:
// Waiting for 1000ms (Promise)...
// (1-second pause)
// Waited 1000ms

// === Example 2: Non-Promisified vs. Promisified File Reading ===
// Non-Promisified: Callback-based file reading
function readFileCallback(fileName, callback) {
  console.log(`Reading file ${fileName} (callback)...`);
  setTimeout(() => {
    if (fileName === "error.txt") {
      callback(new Error("File not found!"), null);
    } else {
      callback(null, `Content of ${fileName}: Hello, this is a sample file!`);
    }
  }, 1000); // Simulate 1-second delay
}

// Promisified: Promise-based file reading
function readFilePromise(fileName) {
  console.log(`Reading file ${fileName} (Promise)...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileName === "error.txt") {
        reject(new Error("File not found!"));
      } else {
        resolve(`Content of ${fileName}: Hello, this is a sample file!`);
      }
    }, 1000); // Simulate 1-second delay
  });
}

// Run non-promisified
readFileCallback("sample.txt", (error, content) => {
  if (error) console.error("Error:", error.message);
  else console.log(content);
});
// Output:
// Reading file sample.txt (callback)...
// (1-second pause)
// Content of sample.txt: Hello, this is a sample file!

// Run promisified with async/await
async function runReadFilePromise() {
  try {
    const content = await readFilePromise("sample.txt");
    console.log(content);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
runReadFilePromise();
// Output:
// Reading file sample.txt (Promise)...
// (1-second pause)
// Content of sample.txt: Hello, this is a sample file!

// Test error case
readFileCallback("error.txt", (error, content) => {
  if (error) console.error("Error:", error.message);
  else console.log(content);
});
// Output:
// Reading file error.txt (callback)...
// (1-second pause)
// Error: File not found!

runReadFilePromise("error.txt");
// Output:
// Reading file error.txt (Promise)...
// (1-second pause)
// Error: File not found!

// === Example 3: Non-Promisified vs. Promisified API Call ===
// Non-Promisified: Callback-based API call
function fetchUserCallback(userId, callback) {
  console.log(`Fetching user ${userId} (callback)...`);
  setTimeout(() => {
    if (typeof userId !== 'number' || userId < 0) {
      callback(new Error("Invalid user ID!"), null);
    } else {
      callback(null, { id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
    }
  }, 1500); // Simulate 1.5-second delay
}

// Promisified: Promise-based API call
function fetchUserPromise(userId) {
  console.log(`Fetching user ${userId} (Promise)...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof userId !== 'number' || userId < 0) {
        reject(new Error("Invalid user ID!"));
      } else {
        resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
      }
    }, 1500); // Simulate 1.5-second delay
  });
}

// Run non-promisified
fetchUserCallback(101, (error, user) => {
  if (error) console.error("Error:", error.message);
  else console.log(`User: ID=${user.id}, Name=${user.name}`);
});
// Output:
// Fetching user 101 (callback)...
// (1.5-second pause)
// User: ID=101, Name=User 101

// Run promisified with async/await
async function runFetchUserPromise() {
  try {
    const user = await fetchUserPromise(101);
    console.log(`User: ID=${user.id}, Name=${user.name}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
runFetchUserPromise();
// Output:
// Fetching user 101 (Promise)...
// (1.5-second pause)
// User: ID=101, Name=User 101

// === Example 4: Converting Non-Promisified to Promisified (Manual Promisification) ===
// Non-Promisified function
function getDataCallback(id, callback) {
  console.log(`Getting data for ID ${id} (callback)...`);
  setTimeout(() => {
    callback(null, `Data for ID ${id}`);
  }, 800); // Simulate 0.8-second delay
}

// Manual promisification
function getDataPromise(id) {
  return new Promise((resolve, reject) => {
    getDataCallback(id, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

// Run non-promisified
getDataCallback(1, (error, data) => {
  if (error) console.error("Error:", error);
  else console.log(data);
});
// Output:
// Getting data for ID 1 (callback)...
// (0.8-second pause)
// Data for ID 1

// Run promisified
async function runGetDataPromise() {
  try {
    const data = await getDataPromise(1);
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
runGetDataPromise();
// Output:
// Getting data for ID 1 (callback)...
// (0.8-second pause)
// Data for ID 1

// === Example 5: Chaining Promisified Functions vs. Nested Callbacks ===
// Non-Promisified: Nested callbacks (callback hell)
function processDataCallback(id, callback) {
  getDataCallback(id, (error, data) => {
    if (error) return callback(error, null);
    console.log(`Processing ${data} (callback)...`);
    setTimeout(() => {
      callback(null, `Processed ${data}`);
    }, 1000); // Simulate 1-second delay
  });
}

// Promisified: Chained Promises
async function processDataPromise(id) {
  const data = await getDataPromise(id);
  console.log(`Processing ${data} (Promise)...`);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1-second delay
  return `Processed ${data}`;
}

// Run non-promisified (nested callbacks)
processDataCallback(2, (error, result) => {
  if (error) console.error("Error:", error);
  else console.log(result);
});
// Output:
// Getting data for ID 2 (callback)...
// (0.8-second pause)
// Processing Data for ID 2 (callback)...
// (1-second pause)
// Processed Data for ID 2

// Run promisified with async/await
async function runProcessDataPromise() {
  try {
    const result = await processDataPromise(2);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
runProcessDataPromise();
// Output:
// Getting data for ID 2 (callback)...
// (0.8-second pause)
// Processing Data for ID 2 (Promise)...
// (1-second pause)
// Processed Data for ID 2

// === Key Points ===
// - **Non-Promisified**: Use callbacks, which can lead to nested, hard-to-read code (callback hell).
// - **Promisified**: Return Promises, enabling `.then()`, `.catch()`, or `async/await` for cleaner code.
// - Promisified functions are easier to chain and handle errors consistently.
// - You can convert non-promisified functions to promisified using manual promisification or utilities like `util.promisify` (Node.js).

// === Common Pitfalls ===
// - Non-promisified functions require manual error checking in callbacks, which is error-prone.
// - Promisified functions must handle Promise rejections with `.catch()` or `try/catch` to avoid uncaught errors.
// - Mixing callbacks and Promises in the same workflow can lead to confusion.

// === Try It Yourself ===
// 1. Create a new non-promisified function (e.g., `sendEmailCallback`) and convert it to a promisified version.
// 2. Chain multiple promisified functions using `async/await`.
// 3. Test error handling in both non-promisified and promisified versions.

// === Running This File ===
// Run in Node.js: `node promisifiedVsNonPromisified.js` (ensure Node.js is installed, Week 2.2).
// Save this file in your Git repository and push to GitHub (Week 2.6).