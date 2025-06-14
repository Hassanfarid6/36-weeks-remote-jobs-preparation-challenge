// asyncAwait.js

// === Exploring Async/Await ===
// This file explores `async/await` syntax in JavaScript for cleaner asynchronous code, as part 
// of Week 2.1 (Revision of Promises, Async JS).
// `async/await` makes asynchronous code look and behave like synchronous code, improving readability.

// === What is Async/Await? ===
// - `async`: Declares a function as asynchronous, ensuring it returns a Promise.
// - `await`: Pauses execution inside an `async` function until a Promise resolves.
// Analogy: It’s like ordering food and waiting calmly at your table until it’s ready, while the kitchen
//  handles other tasks.

// === Why Use Async/Await? ===
// JavaScript is single-threaded, so async tasks (e.g., API calls, timers) must be non-blocking.
// `async/await` simplifies Promise handling, avoiding complex `.then()` chains and callback hell, resulting
// in cleaner, more readable code.

// === Example 1: Basic Async/Await with Timer ===
async function cookFood(food) {
    console.log(`Cooking ${food}...`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    console.log(`${food} is ready!`);
    return `Served ${food}`;
}

// Run the async function
async function runCookFood() {
  try {
    const result = await cookFood("Pizza");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
runCookFood();
// Output:
// Cooking Pizza...
// (2-second pause)
// Pizza is ready!
// Served Pizza

// === Example 2: Fetching User Data (Simulated API Call) ===
async function fetchUserData(userId) {
  console.log(`Fetching data for user ${userId}...`);
  const user = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof userId !== 'number' || userId < 0) {
        reject("Invalid user ID!");
      } else {
        resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
      }
    }, 1500); // Wait 1.5 seconds
  });
  console.log("Data retrieved!");
  return user;
}

// Run the async function
async function runFetchUser() {
  try {
    const user = await fetchUserData(101);
    console.log(`User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`);
  } catch (error) {
    console.error("Error:", error);
  }
}
runFetchUser();
// Output:
// Fetching data for user 101...
// (1.5-second pause)
// Data retrieved!
// User Info: ID=101, Name=User 101, Email=user101@example.com

// === Example 3: Error Handling with Async/Await ===
async function readFile(fileName) {
  console.log(`Reading file: ${fileName}...`);
  const content = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileName === "error.txt") {
        reject("File not found!");
      } else {
        resolve(`Content of ${fileName}: Hello, this is a sample file!`);
      }
    }, 1000); // Wait 1 second
  });
  console.log("File read successfully!");
  return content;
}

// Run the async function (successful case)
async function runReadFileSuccess() {
  try {
    const content = await readFile("sample.txt");
    console.log(content);
  } catch (error) {
    console.error("Error:", error);
  }
}
runReadFileSuccess();
// Output:
// Reading file: sample.txt...
// (1-second pause)
// File read successfully!
// Content of sample.txt: Hello, this is a sample file!

// Run the async function (error case)
async function runReadFileError() {
  try {
    const content = await readFile("error.txt");
    console.log(content);
  } catch (error) {
    console.error("Error:", error);
  }
}
runReadFileError();
// Output:
// Reading file: error.txt...
// (1-second pause)
// Error: File not found!

// === Example 4: Sequential Async Operations ===
async function performTasks() {
  console.log("Starting tasks...");
  const pizzaResult = await cookFood("Burger");
  console.log(pizzaResult);
  const user = await fetchUserData(102);
  console.log(`Fetched user: ${user.name}`);
  const fileContent = await readFile("data.txt");
  console.log(fileContent);
  console.log("All tasks complete!");
}

// Run the async function
async function runPerformTasks() {
  try {
    await performTasks();
  } catch (error) {
    console.error("Error in tasks:", error);
  }
}
runPerformTasks();
// Output:
// Starting tasks...
// Cooking Burger...
// (2-second pause)
// Burger is ready!
// Served Burger
// Fetching data for user 102...
// (1.5-second pause)
// Data retrieved!
// Fetched user: User 102
// Reading file: data.txt...
// (1-second pause)
// File read successfully!
// Content of data.txt: Hello, this is a sample file!
// All tasks complete!

// === Example 5: Parallel Async Operations with Promise.all ===
async function fetchMultipleUsers() {
  console.log("Fetching multiple users...");
  const users = await Promise.all([
    fetchUserData(103),
    fetchUserData(104),
    fetchUserData(105)
  ]);
  console.log("All users fetched!");
  users.forEach(user => {
    console.log(`User: ID=${user.id}, Name=${user.name}`);
  });
}

// Run the async function
async function runFetchMultipleUsers() {
  try {
    await fetchMultipleUsers();
  } catch (error) {
    console.error("Error:", error);
  }
}
runFetchMultipleUsers();
// Output:
// Fetching multiple users...
// Fetching data for user 103...
// Fetching data for user 104...
// Fetching data for user 105...
// (1.5-second pause, since they run in parallel)
// Data retrieved! (x3)
// All users fetched!
// User: ID=103, Name=User 103
// User: ID=104, Name=User 104
// User: ID=105, Name=User 105

// === Example 6: Sending Email (Simulated Email Service) ===
async function sendEmail(recipient, message) {
  console.log(`Sending email to ${recipient}...`);
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!recipient.includes('@')) {
        reject("Invalid email address!");
      } else {
        resolve(`Email sent to ${recipient}: ${message}`);
      }
    }, 1200); // Wait 1.2 seconds
  });
  console.log("Email sent successfully!");
  return response;
}

// Run the async function
async function runSendEmail() {
  try {
    const result = await sendEmail("user@example.com", "Hello, this is a test email!");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
runSendEmail();
// Output:
// Sending email to user@example.com...
// (1.2-second pause)
// Email sent successfully!
// Email sent to user@example.com: Hello, this is a test email!

// === Example 7: Downloading File (Simulated Download) ===
async function downloadFile(fileUrl) {
  console.log(`Downloading file from ${fileUrl}...`);
  const file = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fileUrl.startsWith("http")) {
        reject("Invalid URL!");
      } else {
        resolve(`Downloaded file: ${fileUrl.split("/").pop()}`);
      }
    }, 1800); // Wait 1.8 seconds
  });
  console.log("Download complete!");
  return file;
}

// Run the async function
async function runDownloadFile() {
  try {
    const result = await downloadFile("http://example.com/document.pdf");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
runDownloadFile();
// Output:
// Downloading file from http://example.com/document.pdf...
// (1.8-second pause)
// Download complete!
// Downloaded file: document.pdf

// === Example 8: Processing Multiple Files with Promise.allSettled ===
async function processFiles(fileNames) {
  console.log("Processing multiple files...");
  const results = await Promise.allSettled(fileNames.map(fileName => readFile(fileName)));
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`File ${fileNames[index]}: ${result.value}`);
    } else {
      console.log(`File ${fileNames[index]} failed: ${result.reason}`);
    }
  });
}

// Run the async function
async function runProcessFiles() {
  try {
    await processFiles(["sample.txt", "error.txt", "data.txt"]);
  } catch (error) {
    console.error("Error:", error);
  }
}
runProcessFiles();
// Output:
// Processing multiple files...
// Reading file: sample.txt...
// Reading file: error.txt...
// Reading file: data.txt...
// (1-second pause, since they run in parallel)
// File read successfully! (x2)
// File sample.txt: Content of sample.txt: Hello, this is a sample file!
// File error.txt failed: File not found!
// File data.txt: Content of data.txt: Hello, this is a sample file!

// === Key Points ===
// - `async` functions return a Promise, enabling `await` for async tasks.
// - `await` pauses execution until a Promise resolves, making code appear synchronous.
// - Use `try/catch` for robust error handling in `async/await`.
// - `Promise.all` runs multiple async tasks in parallel for efficiency.
// - `Promise.allSettled` handles multiple tasks, reporting success or failure for each.
// - `async/await` provides cleaner code compared to callbacks or raw Promises.

// === Common Pitfalls ===
// - Using `await` outside an `async` function causes a syntax error.
// - Not handling errors with `try/catch` can lead to uncaught Promise rejections.
// - Overusing sequential `await` for independent tasks can slow down execution (use `Promise.all` instead).

// === Try It Yourself ===
// 1. Modify `sendEmail` to include additional validation (e.g., message length).
// 2. Create a new `async` function for a task like `uploadFile` or `scheduleEvent`.
// 3. Combine `downloadFile` and `sendEmail` in a single `async` function.

// === Running This File ===
// Run in Node.js: `node asyncAwait.js` (ensure Node.js is installed, Week 2.2).
// Save this file in your Git repository and push to GitHub (Week 2.6).