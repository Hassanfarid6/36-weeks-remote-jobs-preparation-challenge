// callbacks.js

// === Understanding Callbacks ===
// This file explains callbacks in JavaScript as part of Week 2.1 (Revision of Promises, Async JS).
// A callback is a function passed as an argument to another function, which is executed after the main task is done.

// === What is a Callback? ===
// A callback is like giving someone a task and saying, "Call me when you're done!"
// Example analogy:
// - You (the program) ask a chef (a function) to cook a meal.
// - You give the chef a note (the callback function) saying, "Call me when the food is ready."
// - The chef finishes cooking and follows your note by calling you.

// In JavaScript, callbacks are used for **asynchronous operations** (tasks that take time, like fetching data or reading files)
// to prevent blocking the program since JavaScript is single-threaded (can only do one thing at a time).

// === Simple Example ===
// A function that simulates cooking and uses a callback
function cookFood(food, callback) {
    console.log(`Cooking ${food}...`);
    setTimeout(() => {
      console.log(`${food} is ready!`);
      callback(); // Run the callback function after cooking is done
    }, 2000); // Simulate 2 seconds of cooking
  }
  
  // The callback function
  function serveFood() {
    console.log("Serving the food to the customer!");
  }
  
  // Run the example
  cookFood("Pizza", serveFood);
  // Output:
  // Cooking Pizza...
  // (Pause for 2 seconds)
  // Pizza is ready!
  // Serving the food to the customer!
  
  // === How It Works ===
  // 1. `cookFood` starts cooking and uses `setTimeout` to mimic a delay (like waiting for an API response).
  // 2. After 2 seconds, it calls the `callback` function (`serveFood`).
  // 3. The callback runs only after the main task (cooking) is complete.
  
  // === Another Example: Event Listener ===
  // Callbacks are also used for events, like a button click in the browser.
  // Example (this works in a browser, not Node.js):
  /*
  document.querySelector("button").addEventListener("click", function () {
    console.log("Button clicked!");
  });
  */
  // Here, the anonymous function `function () { console.log("Button clicked!"); }` is a callback that runs when the button is clicked.
  
  // === Key Points ===
  // - A callback is a function passed to another function to be executed later.
  // - Callbacks are crucial for asynchronous tasks (e.g., API calls, timers, file operations).
  // - They ensure JavaScript remains non-blocking despite being single-threaded.
  // - The callback runs only after the main task is complete.
  
  // === Common Pitfall: Callback Hell ===
  // When you nest multiple callbacks, the code can become messy and hard to read, known as "callback hell":
  /*
  doTask1(() => {
    doTask2(() => {
      doTask3(() => {
        console.log("All tasks done!");
      });
    });
  });
  */
  // To avoid callback hell, use Promises or async/await (covered later in the course).
  
  // === Try It Yourself ===
  // Modify the `cookFood` function to cook a different food item or add more steps in the callback.
  // Example:
  cookFood("Pasta", () => {
    console.log("Serving the pasta with sauce!");
  });
  // === Running This File ===
  // Run in Node.js: `node callbacks.js`
  // Or copy the examples into a browser console (for event listener example, use a browser).



  // === Example 2: Fetching User Data (Simulated API Call) ===
// Simulate fetching user data from a server
function fetchUserData(userId, callback) {
    console.log(`Fetching data for user ${userId}...`);
    setTimeout(() => {
      const user = { id: userId, name: `User ${userId}`, email: `user${userId}@example.com` };
      console.log("Data retrieved!");
      callback(user); // Pass the user data to the callback
    }, 1500); // Simulate 1.5-second delay
  }
  
  // Callback to process the user data
  function displayUser(user) {
    console.log(`User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`);
  }
  
  // Run the example
  fetchUserData(101, displayUser);
  // Output:
  // Fetching data for user 101...
  // (1.5-second pause)
  // Data retrieved!
  // User Info: ID=101, Name=User 101, Email=user101@example.com
  
  // === Example 3: File Reading (Simulated File System) ===
  // Simulate reading a file
  function readFile(fileName, callback) {
    console.log(`Reading file: ${fileName}...`);
    setTimeout(() => {
      const content = `Content of ${fileName}: Hello, this is a sample file!`;
      console.log(`Finished reading ${fileName}`);
      callback(content); // Pass file content to callback
    }, 1000); // Simulate 1-second delay
  }
  
  // Callback to process the file content
  function processFileContent(content) {
    console.log(`File Content: ${content}`);
  }
  
  // Run the example
  readFile("sample.txt", processFileContent);
  // Output:
  // Reading file: sample.txt...
  // (1-second pause)
  // Finished reading sample.txt
  // File Content: Content of sample.txt: Hello, this is a sample file!
  
  // === Example 4: Event Listener (Browser Example) ===
  // Callbacks are common in event handling, like button clicks.
  // This example works in a browser (not Node.js). Uncomment to test in a browser console with an HTML button.
  /*
  function setupButton() {
    document.querySelector("button").addEventListener("click", function () {
      console.log("Button clicked! This is a callback in action.");
    });
  }
  // To test: Add a <button> in an HTML file and run this in the browser console.
  */
  
  // === Example 5: Chaining Callbacks (Multiple Tasks) ===
  // Perform tasks in sequence using callbacks
  function taskOne(callback) {
    console.log("Starting Task 1...");
    setTimeout(() => {
      console.log("Task 1 complete!");
      callback(); // Run the next task
    }, 1000);
  }
  
  function taskTwo(callback) {
    console.log("Starting Task 2...");
    setTimeout(() => {
      console.log("Task 2 complete!");
      callback(); // Run the final callback
    }, 1000);
  }
  
  function allTasksDone() {
    console.log("All tasks are complete!");
  }
  
  // Run tasks in sequence
  taskOne(() => {
    taskTwo(allTasksDone);
  });
  // Output:
  // Starting Task 1...
  // (1-second pause)
  // Task 1 complete!
  // Starting Task 2...
  // (1-second pause)
  // Task 2 complete!
  // All tasks are complete!
  
  // === Key Points ===
  // - A callback is a function passed as an argument to be executed later.
  // - Used for asynchronous tasks (e.g., API calls, file reading, timers, events).
  // - Ensures JavaScript remains non-blocking despite being single-threaded.
  // - Callbacks run only after the main task is complete.
  
  // === Common Pitfall: Callback Hell ===
  // Nesting too many callbacks makes code hard to read, called "callback hell":
  /*
  taskOne(() => {
    taskTwo(() => {
      taskThree(() => {
        console.log("All tasks done!");
      });
    });
  });
  */
  // Solution: Use Promises or async/await (covered later in the course).
  
    
  // === Running This File ===
  // Run in Node.js: `node callbacks.js` (ensure Node.js is installed, Week 2.2).
  // For the event listener (Example 4), test in a browser console with an HTML button.
  // Save this file in your Git repository and push to GitHub (Week 2.6).
  