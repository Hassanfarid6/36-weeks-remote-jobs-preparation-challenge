# 36-Weeks Remote Jobs Preparation Challenge: Weeks 3.0.1 to 3.3

## Overview
Welcome to **Weeks 3.0.1 to 3.3** of the **36-Weeks Remote Jobs Preparation Challenge**! This guide covers foundational JavaScript (JS) revision, Node.js, Express, databases (MongoDB and PostgreSQL), authentication, authorization, and more. These topics are key to building backend web applications, a critical skill for remote tech jobs. Each week is explained like you’re 10, with examples to make you job-ready!

## Why This Matters
In remote tech jobs, you’ll:
- Write JavaScript to create dynamic apps.
- Use Node.js and Express to build servers.
- Manage databases to store data.
- Secure apps with authentication and authorization.
- Handle errors and validate data like a pro.

## Week 3.0.1 | JS Foundation Revision
### Overview
Revise core JavaScript concepts to solidify your coding foundation. JS is like the magic wand for building websites and apps.

### Key Concepts (Recap)
- **Variables**: Store data (e.g., `let name = "Alex";`).
- **Data Types**: Numbers, strings, booleans, arrays, objects.
- **Functions**: Reusable code blocks (e.g., `function add(a, b) { return a + b; }`).
- **Loops**: Repeat tasks (e.g., `for (let i = 0; i < 5; i++) { console.log(i); }`).
- **Conditionals**: Make decisions (e.g., `if (age > 18) { console.log("Adult"); }`).
- **Arrays/Objects**: Store lists or key-value pairs (e.g., `let user = { name: "Alex", age: 20 };`).
- **ES6+**: Arrow functions, destructuring, `map`, `filter`, promises, async/await.

### Example
```javascript
// Simple JS recap
let users = ["Alex", "Bob"];
const greet = (name) => `Hello, ${name}!`;
users.map(name => console.log(greet(name))); // Hello, Alex! Hello, Bob!
```

### Job Tip
Strong JS skills are a must for full-stack or backend roles. Practice on freeCodeCamp or LeetCode.

## Week 3.0.2 | Node.js Runtime
### What is Node.js?
Node.js is a tool that lets you run JavaScript outside a browser, like building a server to handle website requests. It’s like a kitchen where JS cooks backend magic!

### Installing Node.js
1. **Download**: Go to [nodejs.org](https://nodejs.org), get the LTS version.
2. **Install**:
   - **Windows/macOS**: Run the installer, follow prompts.
   - **Linux**: `sudo apt install nodejs` (Ubuntu) or equivalent.
3. **Verify**: `node -v` (e.g., `v18.16.0`) and `npm -v` (Node’s package manager).

### Example
```javascript
// hello.js
console.log("Hello from Node.js!");
```
Run: `node hello.js` → Outputs: `Hello from Node.js!`

### Job Tip
Node.js is widely used for backend development. Knowing it opens doors to server-side roles.

## Week 3.0.3 | Express Basics
### What is Express?
Express is a simple Node.js framework for building web servers, like a LEGO kit for creating APIs (ways for apps to talk to each other).

### Why It’s Useful
- **Easy routing**: Handle requests (e.g., `/users` returns user data).
- **Fast setup**: Create servers with less code.
- **Middleware**: Add features like logging or authentication.

### Example
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, Express!'));
app.listen(3000, () => console.log('Server on port 3000'));
```
Run: `node app.js`, visit `http://localhost:3000` → See: `Hello, Express!`

### Job Tip
Express is a go-to for building APIs. Learn it to create backend services for apps.

## Week 3.0.4 | Express Advance Intro
### Authentication (Theory)
- **What**: Checking if a user is who they say they are (e.g., logging in with a password).
- **Like**: Showing your ID to enter a club.

### Authorization (Theory)
- **What**: Deciding what a user can do (e.g., only admins can delete posts).
- **Like**: Getting a VIP pass to access special areas in the club.

### Difference
- **Authentication**: Proves identity (e.g., “I’m Alex”).
- **Authorization**: Sets permissions (e.g., “Alex can edit posts”).
- **Example**: Logging into a site (auth) and accessing an admin dashboard (authz).

### Job Tip
Understanding auth concepts is key for securing apps, a must for backend roles.

## Week 3.0.5 | Database Intro
### What are Databases? (Theory)
- **What**: Organized storage for data, like a giant filing cabinet for your app








Week 3.0.1 | JS Foundation Revision
-  Just revise previous all JS concept

- Week 3.0.2 | Node.JS Runtime
    - What is node js
    - Install Node Js

- Week 3.0.3 | Express Basics
    - What is express
    - Why its useful

- Week 3.0.4 | Express Advance Intro
    - What is authentication (Theory)
    - What is authorization (Theory)
    - What is difference between both (Theory)

- Week 3.0.5 | Database Intro
    - What are Databases (Theory)
    - SQL VS NO SQL Databases (Theory)

- Week 3.0.6 | Mongo Installation
    - Install Mongoo DB Compass
    - Make a new project on Mongoo DB Clustor

- Week 3.0.7 | Postgres Installation
    - Install Postgres

- Week 3.1 | Middlewares And Global Catches, Zod
    - What is route in Express and How basic routing works
    - What are middlewares
    - What is app.use and how its works
    - What error middlewares
    - What is Global Catches
    - How zod works and how to use it in express

- Week 3.2 | Databases And Authentication
    - Intro to fetch API
    - Creating a fetch API
    - Intro to authentication
    - Imp Cryptography concepts
    - HASHING
    - ENCRYPTION
    - JSON web tokens
    - Local Storage
    - Intro to Databases and why we use them
    - MongoDB
    - Creating a database in mongoo db (code)
    - How to connect backend to database?
    - Mongoose
    - Sending data through an HTTP server
    
- Week 3.3 | JWT And Auth
    - How Authentication and Authorization works
    - What is JWT and how it works
    - JWT.sign and JWT.verify methods