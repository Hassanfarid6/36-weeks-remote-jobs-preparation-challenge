# Week 2.4: Express Basics

## Overview
This guide introduces **Express**, a super cool tool for building web apps with Node.js. Think of Express as a magic toolbox that helps you create websites or apps that can talk to users over the internet. This is part of Week 2.4 of our learning journey, and it’s written to be clear for beginners while providing practical steps to get started with Express.

## What is Express?
Express is a framework for **Node.js**, which is a tool that lets you run JavaScript on your computer (not just in a browser). Express makes it easy to build web servers—think of a server as a friendly robot that listens for requests (like someone visiting your website) and sends back responses (like showing a webpage).

- **Why use Express?** It simplifies tasks like handling web requests, creating routes (paths like `/home` or `/about`), and sending data to users.
- **What can you do with it?** Build websites, APIs (ways for apps to share data), or even backend services for mobile apps.

## Prerequisites
Before starting, make sure you have:
- **Node.js** installed (with `npm`, the Node.js package manager). Check with:
  ```bash
  node -v
  npm -v
  ```
  You should see versions like `v20.15.0` for Node.js and `10.8.1` for npm. If not installed, follow the Node.js installation steps from a guide like [nodejs.org](https://nodejs.org/).
- A **terminal** (e.g., Terminal on macOS/Linux, Command Prompt/PowerShell on Windows).
- A **text editor** (e.g., VS Code, Sublime Text, or Notepad++).

## Getting Started with Express
Let’s create a simple Express app that says “Hello, World!” when someone visits it. Follow these steps to build your first web server!

### Step 1: Set Up a Project
1. Create a new folder for your project:
   ```bash
   mkdir my-express-app
   cd my-express-app
   ```
2. Initialize a Node.js project (creates a `package.json` file to manage dependencies):
   ```bash
   npm init -y
   ```
   The `-y` flag skips questions and uses default settings.

### Step 2: Install Express
1. Install Express using `npm`:
   ```bash
   npm install express
   ```
   This adds Express to your project (check the `node_modules` folder and `package.json`).

### Step 3: Create a Basic Express Server
1. Create a file called `app.js`:
   ```bash
   touch app.js
   ```
2. Open `app.js` in your text editor and add this code:
   ```javascript
   // Import Express
   const express = require('express');
   // Create an Express app
   const app = express();
   // Define a port
   const port = 3000;

   // Create a route for the homepage
   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```
   **What’s happening here?**
   - `require('express')`: Loads the Express toolbox.
   - `express()`: Creates an app to handle requests.
   - `app.get('/', ...)`: Sets up a route (like a web address) for the homepage (`/`).
   - `res.send('Hello, World!')`: Sends “Hello, World!” to anyone visiting the homepage.
   - `app.listen(port, ...)`: Starts the server on port 3000 (like opening a shop at a specific address).

### Step 4: Run the Server
1. Run your app:
   ```bash
   node app.js
   ```
   Output: `Server running at http://localhost:3000`
2. Open a web browser and visit `http://localhost:3000`. You should see “Hello, World!”.
3. Stop the server by pressing `Ctrl + C` in the terminal.

## Key Express Concepts
Here are the main ideas to understand Express, explained simply:

### 1. **Routes**
- Routes are like addresses on your website (e.g., `/`, `/about`, `/contact`).
- Use `app.get(path, (req, res) => {...})` to handle requests to a path.
- **Example:** Add an `/about` route to `app.js`:
  ```javascript
  app.get('/about', (req, res) => {
      res.send('This is the About page!');
  });
  ```
  Restart the server (`node app.js`) and visit `http://localhost:3000/about` to see “This is the About page!”.

### 2. **Request (req) and Response (res)**
- **req** (request): Information about what the user wants (e.g., the URL they visited).
- **res** (response): What you send back (e.g., text, HTML, or data).
- Example: Send HTML instead of plain text:
  ```javascript
  app.get('/', (req, res) => {
      res.send('<h1>Welcome to my Express app!</h1>');
  });
  ```
  Restart and visit `http://localhost:3000` to see a big “Welcome” heading.

### 3. **Port**
- A port is like a door number for your server (e.g., 3000). It tells the computer where to listen for visitors.
- Common ports: 3000 (development), 80 (default for websites), 8080 (alternative).

### 4. **Middleware (Bonus Concept)**
- Middleware is like a helper that runs before or after your routes. It can check things, modify requests, or add features.
- Example: Add middleware to log requests:
  ```javascript
  app.use((req, res, next) => {
      console.log(`Someone visited: ${req.url}`);
      next();
  });
  ```
  Add this before your routes. It logs every visit (e.g., `Someone visited: /`) and calls `next()` to continue to the route.

## Practical Example: A Mini Website
Let’s expand `app.js` to create a tiny website with multiple pages. Replace the contents of `app.js` with:
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Log every request
app.use((req, res, next) => {
    console.log(`Visited: ${req.url}`);
    next();
});

// Homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Website!</h1><p>Visit <a href="/about">About</a> or <a href="/contact">Contact</a>.</p>');
});

// About page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>We love building web apps!</p><a href="/">Back to Home</a>');
});

// Contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: example@email.com</p><a href="/">Back to Home</a>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```
- **What’s new?**
  - Added `/about` and `/contact` routes.
  - Used HTML with links (`<a href="...">`) to navigate between pages.
  - Kept the middleware to log visits.
- Run it:
  ```bash
  node app.js
  ```
- Visit `http://localhost:3000`, click the links to explore the pages, and check the terminal for visit logs.

## Tips and Best Practices
- **Organize your code:** Keep routes clear and grouped (e.g., all `app.get` calls together).
- **Restart after changes:** Stop (`Ctrl + C`) and rerun `node app.js` when you edit `app.js`.
- **Use a development tool:** Install `nodemon` to auto-restart on changes:
  ```bash
  npm install -g nodemon
  nodemon app.js
  ```
- **Test routes:** Use a browser or tools like Postman to visit your routes.
- **Practice safely:** Work in a project folder (`my-express-app`) to keep files organized.

## Common Pitfalls
- **Port in use:** If `port 3000` is busy, change the `port` variable (e.g., to 3001) or stop other servers.
- **Missing Express:** If `require('express')` fails, ensure you ran `npm install express`.
- **Syntax errors:** Double-check commas, parentheses, and quotes in `app.js`.
- **No response:** If a page is blank, check that your route sends a response (e.g., `res.send()`).

## Going Further
- **Add more routes:** Create routes like `/users` or `/products`.
- **Handle POST requests:** Use `app.post()` for forms or data submission (requires `express.urlencoded` middleware).
- **Serve static files:** Use `app.use(express.static('public'))` to serve images or CSS.
- **Learn middleware:** Explore built-in middleware like `express.json()` for APIs.
- **Build an API:** Return JSON with `res.json({ key: value })` for app data.

## Resources
- **Express Docs:** [expressjs.com](https://expressjs.com/)
- **Node.js Docs:** [nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- **Online Tutorials:** freeCodeCamp, MDN Web Docs, or The Net Ninja’s Express series.
- **Practice:** Build a to-do list app or a simple API with Express.

## Conclusion
Express is a powerful and fun way to build web apps with Node.js. With just a few lines, you can create a server, set up routes, and send responses to users. Start with the basics—creating a server and handling routes—then experiment with more pages or features. Practice in your `my-express-app` folder, and you’ll soon be building awesome websites like a web development superhero!