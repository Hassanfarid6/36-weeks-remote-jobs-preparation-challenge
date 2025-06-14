# Week 2.4: Introduction to Express.js for Building Web Servers

## Overview
This guide introduces **Express.js**, a super fun and easy tool for building web servers with Node.js. Imagine Express as a magic toolbox that helps you create websites or apps that talk to people over the internet. This is part of Week 2.4 of our learning journey, building on Node.js and the `http` module. The guide is written to be clear for beginners while providing practical steps to start using Express.

## What is Express.js?
**Express.js** (or just Express) is a framework for **Node.js**, which lets you run JavaScript on your computer to build servers. A web server is like a friendly shopkeeper who listens for visitors (web requests) and sends back what they want (like webpages or data). Express makes building servers easier than using Node.js’s raw `http` module by providing simple tools for handling requests, creating routes, and sending responses.

- **Why use Express?**
  - It’s fast and lightweight, perfect for building websites or APIs (ways for apps to share data).
  - It simplifies complex tasks like routing (e.g., `/home`, `/about`) and handling different types of requests (GET, POST).
  - It’s widely used, so you’ll find tons of tutorials and tools to help you.
- **What can you do with it?** Create websites, APIs for mobile apps, or backend services for games.

## Prerequisites
Before starting, make sure you have:
- **Node.js** installed (with `npm`, the Node.js package manager). Check with:
  ```bash
  node -v
  npm -v
  ```
  You should see versions like `v20.15.0` for Node.js and `10.8.1` for npm. If not installed, download from [nodejs.org](https://nodejs.org/).
- A **terminal** (e.g., Terminal on macOS/Linux, Command Prompt/PowerShell on Windows).
- A **text editor** (e.g., VS Code, Sublime Text, or Notepad++).
- Basic knowledge of Node.js and JavaScript (from Week 2.4, e.g., `http` module and single-threaded nature).

## Getting Started with Express
Let’s create a simple Express web server that says “Welcome to Express!” when someone visits it. Follow these steps to build your first server!

### Step 1: Set Up a Project
1. Create a new folder for your project:
   ```bash
   mkdir my-express-server
   cd my-express-server
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
   This adds Express to your project (check `node_modules` and `package.json` for updates).

### Step 3: Create a Basic Express Server
1. Create a file called `server.js`:
   ```bash
   touch server.js
   ```
2. Open `server.js` in your text editor and add this code:
   ```javascript
   // Import Express
   const express = require('express');
   // Create an Express app
   const app = express();
   // Define a port
   const port = 3000;

   // Create a route for the homepage
   app.get('/', (req, res) => {
       res.send('Welcome to Express!');
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```
   **What’s happening here?**
   - `require('express')`: Loads the Express framework.
   - `express()`: Creates an app to handle web requests.
   - `app.get('/', ...)`: Sets up a route for the homepage (`/`) that responds to GET requests (like visiting a webpage).
   - `res.send('Welcome to Express!')`: Sends the message to the visitor.
   - `app.listen(port, ...)`: Starts the server on port 3000, ready to listen for visitors.

### Step 4: Run the Server
1. Run your server:
   ```bash
   node server.js
   ```
   Output: `Server running at http://localhost:3000`
2. Open a web browser and visit `http://localhost:3000`. You should see “Welcome to Express!”.
3. Stop the server by pressing `Ctrl + C` in the terminal.

## Key Express Concepts
Here are the main ideas to understand Express, explained simply:

### 1. **Routes**
- Routes are like addresses on your website (e.g., `/`, `/about`, `/contact`).
- Use `app.get(path, (req, res) => {...})` to handle GET requests to a specific path.
- **Example:** Add an `/about` route to `server.js`:
  ```javascript
  app.get('/about', (req, res) => {
      res.send('This is the About page!');
  });
  ```
  Restart the server (`node server.js`) and visit `http://localhost:3000/about` to see “This is the About page!”.

### 2. **Request (req) and Response (res)**
- **req** (request): Info about what the user wants, like the URL (`req.url`) or method (`req.method`).
- **res** (response): What you send back, like text, HTML, or data.
- **Example:** Send HTML:
  ```javascript
  app.get('/', (req, res) => {
      res.send('<h1>Welcome to My Express Server!</h1><p>Check out our <a href="/about">About</a> page.</p>');
  });
  ```
  Restart and visit `http://localhost:3000` to see a heading with a link.

### 3. **Ports**
- A port is like a door number for your server (e.g., 3000). It tells the computer where to send requests.
- Common ports: 3000 (development), 80 (default for HTTP), 443 (HTTPS).

### 4. **Express vs. Node.js `http` Module**
- The `http` module (from Week 2.4) is like building a server with basic tools—you have to do everything manually (e.g., check `req.url`, set headers).
- Express is like a fancy toolkit built on top of `http`. It simplifies tasks like:
  - Routing (e.g., `app.get('/')` instead of `if (req.url === '/')`).
  - Handling headers and status codes automatically.
  - Adding features like middleware (helpers that run before routes).

## Practical Example: A Mini Website
Let’s expand `server.js` to create a small website with multiple pages. Replace `server.js` with:
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
    res.send('<h1>Welcome to My Express Server!</h1><p>Visit <a href="/about">About</a> or <a href="/contact">Contact</a>.</p>');
});

// About page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>We love building web apps with Express!</p><a href="/">Back to Home</a>');
});

// Contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: example@email.com</p><a href="/">Back to Home</a>');
});

// 404 for unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>404: Page Not Found</h1><p><a href="/">Back to Home</a></p>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```
- **What’s new?**
  - Added `/about` and `/contact` routes with HTML responses and navigation links.
  - Used `app.use` for middleware to log every request (shows URLs in the terminal).
  - Added a 404 middleware to handle unknown routes (e.g., `/xyz`).
- Run it:
  ```bash
  node server.js
  ```
- Test it:
  1. Visit `http://localhost:3000/`—see a homepage with links.
  2. Click “About” or “Contact” to navigate.
  3. Visit `http://localhost:3000/xyz`—see a 404 page.
  4. Check the terminal for request logs (e.g., `Visited: /about`).

## Tips and Best Practices
- **Keep routes organized:** Group similar routes (e.g., all `app.get` calls) for clarity.
- **Restart after changes:** Stop (`Ctrl + C`) and rerun `node server.js` when editing `server.js`.
- **Use `nodemon` for development:** Install it to auto-restart on changes:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```
- **Test routes:** Use a browser or tools like Postman to check your routes.
- **Start simple:** Focus on GET routes before adding POST or complex logic.

## Common Pitfalls
- **Port in use:** If `port 3000` is busy, change the `port` variable (e.g., to 3001) or stop other servers.
- **Missing Express:** If `require('express')` fails, ensure you ran `npm install express`.
- **No response:** Ensure every route calls `res.send()` or similar to avoid browser hangs.
- **404 errors:** Check for typos in route paths (e.g., `/About` vs. `/about`).

## Going Further
- **Add POST routes:** Use `app.post()` for forms or data submission (requires `express.urlencoded` middleware).
- **Serve static files:** Use `app.use(express.static('public'))` to serve CSS, images, or JavaScript files.
- **Build an API:** Use `res.json({ key: value })` to return JSON data for apps.
- **Learn middleware:** Explore `express.json()` for APIs or custom middleware for authentication.
- **Compare with `http`:** Recreate this server with the `http` module to appreciate Express’s simplicity.

## Resources
- **Express Docs:** [expressjs.com](https://expressjs.com/)
- **Node.js Docs:** [nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- **Online Tutorials:** freeCodeCamp, MDN Web Docs, or The Net Ninja’s Express series.
- **Practice:** Build a small website or API with multiple routes.

## Conclusion
**Express.js** is a powerful and beginner-friendly framework for building web servers with Node.js. It simplifies creating routes, handling requests, and sending responses compared to the raw `http` module. With just a few lines, you can build a website or API that responds to users. Practice with the example mini-website, experiment with new routes, and you’ll soon be an Express web server superhero!