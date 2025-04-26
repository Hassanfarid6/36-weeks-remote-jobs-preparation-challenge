// -------------------------------------------
// Why Programming Languages Matter?
// -------------------------------------------

// Programming languages are the way humans communicate with computers.
// They allow us to give instructions to machines to solve problems, automate tasks, build apps, websites,
// games, and much more.

// Without programming languages:

// Computers would not understand what we want them to do.

// Technology (like mobile apps, websites, AI, and robots) would not exist.





// -------------------------------------------
// Interpreted vs Compiled Languages
// -------------------------------------------

// Aspect         | Interpreted Languages       | Compiled Languages
// How they work  | Code runs line by line      | Code is converted into machine code before running
// Speed          | Generally slower            | Generally faster
// Errors         | Found during execution      | Found at compile time
// Examples       | Python, JavaScript, Ruby    | C, C++, Java


// -------------------------------------------
// Why JavaScript Over Other Languages?
// -------------------------------------------

// Runs Everywhere: JavaScript runs in all web browsers — no setup needed.
// Full-Stack Power: You can build both frontend (React, Vue) and backend (Node.js) apps with JavaScript.
// Huge Community: Millions of developers, libraries, and tools make learning and building faster.
// Easy to Start: Simple syntax — you can see results immediately in your browser.
// Real-Time Applications: Perfect for live chats, games, and dynamic websites.
// Continuous Growth: JavaScript is still evolving (like ES6+, Deno, etc.), keeping it future-proof.


// -------------------------------------------
// Strict Typing vs Dynamic Typing in JavaScript
// -------------------------------------------
/*
| Aspect           | Strict Typing                        | Dynamic Typing                     |
|------------------|--------------------------------------|------------------------------------|
| Definition       | Variable types are fixed             | Variable types can change at runtime |
| Flexibility      | Less flexible but safer              | More flexible, may cause errors    |
| Error Detection  | Errors caught before running         | Errors caught during runtime       |
| Examples         | Java, C, C++                         | JavaScript, Python                 |
*/

// -------------------------------------------
// Simple Definitions
// -------------------------------------------

/*
Strict Typing:
- You must define what type a variable is (like int, string).

Dynamic Typing:
- Variables can hold any type and their type can change anytime.
*/

// -------------------------------------------
// One-line Summary
// -------------------------------------------

/*
Strict Typing = more control, fewer mistakes.
Dynamic Typing = more flexibility, faster coding.
*/


// -------------------------------------------
// Single-threaded Nature of JavaScript
// -------------------------------------------

/*
Definition:
- JavaScript is single-threaded, meaning it can execute only one task at a time 
  in a single sequence (one line after another).

Explanation:
- It has only ONE "call stack" — it can handle only one operation at a time.
- If a task takes too long (like a heavy calculation), it blocks the next code from running.

How JS handles multiple things:
- JavaScript uses a "Concurrency Model" based on an "Event Loop".
- It allows non-blocking operations (like setTimeout, API calls) even though it is single-threaded.

Examples:
- When you click a button or fetch data from a server, JS uses event queues 
  to wait and then handle these tasks without stopping the main thread.

One-line Summary:
- JavaScript runs code one task at a time, but smartly manages waiting tasks using an event loop.
*/

// Fun Fact:
// Even though JS is single-threaded, it feels asynchronous because of non-blocking features!


