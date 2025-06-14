# Week 2.4: Setting Up a Basic Express HTTP Server and Routes

## Overview

This guide shows you how to create a **basic HTTP server** using **Express.js** and set up **routes** with `app.get('/route', (req, res) => {})`. Think of an Express server as a friendly robot that listens for visitors (web requests) and sends back messages or pages. Routes are like signs that tell the robot what to show when someone visits a specific web address. This is part of Week 2.4, building on Node.js and Express basics. The guide is written to be clear for beginners while providing practical steps to create a server and routes.

## What is an Express HTTP Server?

An **Express HTTP server** is a program built with Express.js, a Node.js framework, that listens for **HTTP requests** (like someone visiting a website) and sends back **responses** (like a webpage or message). Express makes it easy to create servers and define **routes**, which are paths (like `/` or `/about`) that trigger specific actions.

- **Why use Express for this?** It simplifies setting up a server and handling routes compared to Node.js’s raw `http` module, with less code and more features.
- **What are routes?** Routes are like instructions that say, “If someone visits this address, show them this!” For now, we’ll focus on **GET routes** (used to fetch data or pages).

## Prerequisites

Before starting, make sure you have:

- **Node.js** installed (with `npm`). Check with:

  ```bash
  node -v
  npm -v
  ```

  Expect versions like `v20.15.0` for Node.js and `10.8.1` for npm. If not installed, download from nodejs.org.
- A **terminal** (e.g., Terminal on macOS/Linux, Command Prompt/PowerShell on Windows).
- A **text editor** (e.g., VS Code, Sublime Text, or Notepad++).
- Basic knowledge of Node.js and Express (from Week 2.4, e.g., Express introduction).

## Setting Up a Basic Express Server with Routes

Let’s create an Express server with a few GET routes to serve different pages. Follow these steps to build your server!

### Step 1: Set Up a Project

1. Create a new folder for your project:

   ```bash
   mkdir express-routes
   cd express-routes
   ```
2. Initialize a Node.js project (creates a `package.json` file):

   ```bash
   npm init -y
   ```

   The `-y` flag uses default settings.

### Step 2: Install Express

1. Install Express using `npm`:

   ```bash
   npm install express
   ```

   This adds Express to your project (check `node_modules` and `package.json`).

### Step 3: Create the Express Server

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
   
   // Route for the homepage
   app.get('/', (req, res) => {
       res.send('Welcome to my Express server!');
   });
   
   // Route for an about page
   app.get('/about', (req, res) => {
       res.send('This is the About page!');
   });
   
   // Start the server
   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```

   **What’s happening here?**
   - `require('express')`: Loads the Express framework.
   - `express()`: Creates an app to handle requests.
   - `app.get('/route', (req, res) => {...})`: Defines a GET route for a specific path:
     - `req` (request): Info about the visitor’s request (e.g., URL).
     - `res` (response): What you send back (e.g., text or HTML).
     - `/` is the homepage, `/about` is another page.
   - `res.send()`: Sends a response to the visitor.
   - `app.listen(port, ...)`: Starts the server on port 3000 to listen for requests.

### Step 4: Run the Server

1. Run your server:

   ```bash
   node server.js
   ```

   Output: `Server running at http://localhost:3000`
2. Open a web browser and test:
   - Visit `http://localhost:3000/`—see “Welcome to my Express server!”.
   - Visit `http://localhost:3000/about`—see “This is the About page!”.
3. Stop the server by pressing `Ctrl + C` in the terminal.

## Understanding Routes

Routes tell your Express server what to do when someone visits a specific web address (URL). Here’s how GET routes work:

- **Syntax:** `app.get('/route', (req, res) => { res.send('Response'); })`
  - `/route`: The URL path (e.g., `/`, `/about`, `/contact`).
  - `(req, res) => {...}`: A function that runs when the route is visited.
  - `res.send()`: Sends the response (can be text, HTML, or JSON).
- **Examples:**
  - Homepage: `app.get('/', ...)` handles `http://localhost:3000/`.
  - Custom route: `app.get('/contact', ...)` handles `http://localhost:3000/contact`.
- **Why GET?** GET is used to fetch data or pages (like viewing a webpage). Other methods (like POST) are for sending data, but we’re focusing on GET for now.

## Practical Example: A Mini Website with Routes

Let’s expand `server.js` to create a small website with multiple GET routes and HTML responses. Replace `server.js` with:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Log every request
app.use((req, res, next) => {
    console.log(`Visited: ${req.url}`);
    next();
});

// Homepage route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Website!</h1><p>Check out <a href="/about">About</a> or <a href="/contact">Contact</a>.</p>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>We love building web apps!</p><a href="/">Back to Home</a>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: example@email.com</p><a href="/">Back to Home</a>');
});

// Books route (JSON response)
app.get('/books', (req, res) => {
    res.send([
        { id: 1, title: 'The Great Gatsby' },
        { id: 2, title: '1984' }
    ]);
});

// Fallback for unknown routes
app.get('*', (req, res) => {
    res.status(404).send('<h1>404: Page Not Found</h1><p><a href="/">Back to Home</a></p>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

- **What’s new?**
  - Added routes for `/`, `/about`, `/contact`, and `/books`.
  - Used HTML responses with navigation links (`<a href="...">`).
  - Added a `/books` route that returns JSON (like an API).
  - Included middleware (`app.use`) to log every request URL.
  - Added a wildcard route (`*`) to handle unknown URLs with a 404 response.
- **Run it:**

  ```bash
  node server.js
  ```
- **Test it:**
  1. Visit `http://localhost:3000/`—see a homepage with links.
  2. Click “About” or “Contact” to navigate.
  3. Visit `http://localhost:3000/books`—see a JSON list of books.
  4. Visit `http://localhost:3000/xyz`—see a 404 page.
  5. Check the terminal for logs (e.g., `Visited: /about`).

## Tips and Best Practices

- **Keep routes clear:** Organize routes logically (e.g., group by purpose like `/books`, `/users`).
- **Use descriptive paths:** Make URLs intuitive (e.g., `/about` for about page, `/data` for data).
- **Test routes:** Open multiple browser tabs or use tools like Postman to check each route.
- **Restart after changes:** Stop (`Ctrl + C`) and rerun `node server.js` when editing.
- **Use** `nodemon` **for development:** Install it to auto-restart:

  ```bash
  npm install -g nodemon
  nodemon server.js
  ```

## Common Pitfalls

- **Port conflicts:** If `port 3000` is in use, change to another port (e.g., 3001) or stop other servers.
- **Missing Express:** If `require('express')` fails, ensure `npm install express` was run.
- **Route typos:** Check for correct paths (e.g., `/About` vs. `/about`—case matters).
- **No response:** Ensure every route calls `res.send()` or `res.status().send()` to avoid browser hangs.

## Going Further

- **Add dynamic routes:** Use parameters like `app.get('/books/:id', ...)` to handle specific items (e.g., `/books/1`).
- **Explore other methods:** Try `app.post()` or `app.put()` for creating or updating data (requires `express.json()` middleware).
- **Serve static files:** Use `app.use(express.static('public'))` for CSS or images.
- **Build an API:** Expand the `/books` route to return more complex JSON data.
- **Learn middleware:** Add custom logic (e.g., authentication) before routes.

## Resources

- **Express Docs:** expressjs.com (see Routing)
- **Node.js Docs:** nodejs.org/en/docs/
- **Online Tutorials:** freeCodeCamp, MDN Web Docs, or The Net Ninja’s Express series.
- **Practice:** Build a server with 5+ GET routes for a blog or store.

## Conclusion

Setting up a **basic Express HTTP server** and creating **GET routes** with `app.get('/route', (req, res) => {})` is a fun way to build web servers. Routes let you define what happens when users visit different URLs, from showing webpages to sending data. Practice with the mini-website example, add new routes, and you’ll soon be creating awesome Express servers like a web development superhero!