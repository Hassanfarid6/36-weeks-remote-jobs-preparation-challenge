# Week 2.4: Creating HTTP Servers with Node.js `http` Module

## Overview
This guide introduces **HTTP servers** using the Node.js `http` module. Think of an HTTP server as a friendly shopkeeper who listens for customers (web requests) and sends back what they ask for (like webpages or data). This is part of Week 2.4 of our learning journey, building on Node.js, Express, and JavaScript’s single-threaded nature. The guide is written to be clear for beginners while providing practical steps to create and understand HTTP servers.

## What is an HTTP Server?
An **HTTP server** is a program that listens for **HTTP requests** (like someone visiting a website) and sends back **HTTP responses** (like a webpage or message). HTTP (HyperText Transfer Protocol) is the language the internet uses to talk between browsers (like Chrome) and servers.

- **Why use the `http` module?** It’s the built-in Node.js tool for creating servers. Express (from earlier in Week 2.4) is built on top of the `http` module, but using `http` directly helps you understand how servers work at a lower level.
- **What can you do with it?** Build simple web servers, APIs, or learn the foundations of tools like Express.

## Prerequisites
Before starting, make sure you have:
- **Node.js** installed (with `npm`). Check with:
  ```bash
  node -v
  npm -v
  ```
  You should see versions like `v20.15.0` for Node.js and `10.8.1` for npm. If not installed, download from [nodejs.org](https://nodejs.org/).
- A **terminal** (e.g., Terminal on macOS/Linux, Command Prompt/PowerShell on Windows).
- A **text editor** (e.g., VS Code, Sublime Text, or Notepad++).
- Basic knowledge of Node.js and JavaScript (from Week 2.4, e.g., Express and single-threaded nature).

## Getting Started with the `http` Module
Let’s create a simple HTTP server that responds with “Hello, World!” when someone visits it. Follow these steps to build your first server!

### Step 1: Set Up a Project
1. Create a new folder for your project:
   ```bash
   mkdir my-http-server
   cd my-http-server
   ```
2. Initialize a Node.js project (creates a `package.json` file):
   ```bash
   npm init -y
   ```
   The `-y` flag uses default settings.

### Step 2: Create a Basic HTTP Server
1. Create a file called `server.js`:
   ```bash
   touch server.js
   ```
2. Open `server.js` in your text editor and add this code:
   ```javascript
   // Import the http module
   const http = require('http');

   // Define the port
   const port = 3000;

   // Create the server
   const server = http.createServer((req, res) => {
       // Set the response status and headers
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       // Send the response
       res.end('Hello, World!\n');
   });

   // Start the server
   server.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```
   **What’s happening here?**
   - `require('http')`: Loads Node.js’s built-in `http` module.
   - `http.createServer((req, res) => {...})`: Creates a server that runs a function for each request.
     - `req` (request): Info about the user’s request (e.g., URL, method like GET).
     - `res` (response): What you send back (e.g., text, status code).
   - `res.statusCode = 200`: Sets the HTTP status (200 means “OK”).
   - `res.setHeader('Content-Type', 'text/plain')`: Tells the browser the response is plain text.
   - `res.end('Hello, World!\n')`: Sends the response and closes the connection.
   - `server.listen(port, ...)`: Starts the server on port 3000.

### Step 3: Run the Server
1. Run your server:
   ```bash
   node server.js
   ```
   Output: `Server running at http://localhost:3000`
2. Open a web browser and visit `http://localhost:3000`. You should see “Hello, World!”.
3. Stop the server by pressing `Ctrl + C` in the terminal.

## Key Concepts of HTTP Servers
Here are the main ideas to understand when using the `http` module, explained simply:

### 1. **Requests and Responses**
- **Request (req):** What the user (or browser) sends to the server, including:
  - URL (e.g., `/` or `/about`).
  - Method (e.g., GET for fetching, POST for sending data).
  - Headers (extra info like browser type).
- **Response (res):** What the server sends back, including:
  - Status code (e.g., 200 for success, 404 for not found).
  - Headers (e.g., `Content-Type` to say it’s text or HTML).
  - Body (the actual content, like “Hello, World!”).
- Example: Check the request URL:
  ```javascript
  if (req.url === '/about') {
      res.end('This is the About page!');
  }
  ```

### 2. **Ports**
- A port is like a door number for your server (e.g., 3000). It tells the computer where to send requests.
- Common ports: 3000 (development), 80 (default for HTTP websites), 443 (HTTPS).

### 3. **Routing**
- Routing means deciding what to send based on the request’s URL.
- Unlike Express (which has `app.get('/')`), the `http` module requires you to check `req.url` manually.
- Example: Add basic routing to `server.js`:
  ```javascript
  const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      if (req.url === '/') {
          res.end('Welcome to the Homepage!\n');
      } else if (req.url === '/about') {
          res.end('This is the About page!\n');
      } else {
          res.statusCode = 404;
          res.end('Page not found!\n');
      }
  });
  ```

### 4. **Non-Blocking Nature**
- The `http` module uses JavaScript’s single-threaded, non-blocking I/O (from Week 2.4). The server can handle multiple requests without waiting, thanks to the event loop.
- Example: A slow response doesn’t block others:
  ```javascript
  if (req.url === '/slow') {
      setTimeout(() => {
          res.end('Slow response after 3 seconds!\n');
      }, 3000);
  }
  ```

## Practical Example: A Mini HTTP Server
Let’s create a small HTTP server with multiple routes and HTML responses. Replace `server.js` with:
```javascript
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Log the request
    console.log(`Request for: ${req.url}`);

    // Set default headers
    res.setHeader('Content-Type', 'text/html');

    // Handle routes
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Welcome to My Server!</h1><p>Visit <a href="/about">About</a> or <a href="/contact">Contact</a>.</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Us</h1><p>This is a simple Node.js server!</p><a href="/">Back to Home</a>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact</h1><p>Email: example@email.com</p><a href="/">Back to Home</a>');
    } else if (req.url === '/slow') {
        res.statusCode = 200;
        setTimeout(() => {
            res.end('<h1>Slow Page</h1><p>This took 3 seconds!</p><a href="/">Back to Home</a>');
        }, 3000);
    } else {
        res.statusCode = 404;
        res.end('<h1>404: Page Not Found</h1><p><a href="/">Back to Home</a></p>');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```
- **What’s new?**
  - Uses HTML responses (`text/html` content type) with links for navigation.
  - Handles multiple routes (`/`, `/about`, `/contact`, `/slow`).
  - Includes a `/slow` route to demonstrate non-blocking I/O (other routes work while `/slow` waits).
  - Returns a 404 for unknown URLs.
- Run it:
  ```bash
  node server.js
  ```
- Test it:
  1. Visit `http://localhost:3000/`—see a homepage with links.
  2. Click “About” or “Contact” to navigate.
  3. Visit `http://localhost:3000/slow`—wait 3 seconds for the response.
  4. Visit `http://localhost:3000/xyz`—see a 404 page.
  5. Check the terminal for request logs.

## Tips and Best Practices
- **Log requests:** Add `console.log(req.url)` to debug what users are visiting.
- **Set proper headers:** Always include `Content-Type` (e.g., `text/html`, `text/plain`).
- **Handle errors:** Use `res.statusCode = 404` for unknown routes.
- **Restart after changes:** Stop (`Ctrl + C`) and rerun `node server.js` when editing `server.js`.
- **Use non-blocking code:** Avoid synchronous operations (e.g., loops) to keep the server responsive.
- **Test with multiple tabs:** Open several browser tabs to see how the event loop handles concurrent requests.

## Common Pitfalls
- **Port in use:** If `port 3000` is busy, change the `port` variable (e.g., to 3001) or stop other servers.
- **Missing `res.end()`:** Always call `res.end()` to finish the response, or the browser will hang.
- **No status code:** Set `res.statusCode` (e.g., 200, 404) for proper HTTP behavior.
- **Blocking the thread:** Avoid heavy synchronous code (e.g., `while` loops) that freezes the server.

## Going Further
- **Add methods:** Check `req.method` (e.g., `GET`, `POST`) to handle form submissions.
- **Serve files:** Use `fs.readFile` to send HTML, CSS, or images.
- **Compare with Express:** Recreate this server in Express to see how it simplifies routing and headers.
- **Learn HTTPS:** Use the `https` module for secure servers (requires SSL certificates).
- **Build an API:** Return JSON with `res.setHeader('Content-Type', 'application/json')` and `res.end(JSON.stringify(data))`.

## Resources
- **Node.js Docs:** [HTTP Module](https://nodejs.org/api/http.html)
- **MDN Web Docs:** [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- **Online Tutorials:** freeCodeCamp, The Net Ninja, or Node.js official guides.
- **Practice:** Build a server that serves different content based on URL or method.

## Conclusion
Creating **HTTP servers** with the Node.js `http` module is a great way to understand how web servers work. You can handle requests, send responses, and build simple websites or APIs with just a few lines of code. The `http` module, combined with JavaScript’s single-threaded event loop and non-blocking I/O, makes servers fast and efficient. Practice with the example server, experiment with routes, and you’ll soon be a Node.js server-building superhero!