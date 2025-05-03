# Week 2.4: HTTP Methods, Status Codes, and Postman for API Testing

## Overview
This guide explores **HTTP request methods** and their use cases, **common HTTP status codes** (e.g., `200`, `404`, `500`), and **using Postman** to test APIs in Express.js. HTTP methods are like instructions for a server, status codes show what happened, and Postman is a tool to send and check requests. This is part of Week 2.4, building on Node.js and Express.

## 1. HTTP Request Methods
HTTP methods tell a server what to do. Key methods and use cases:

- **GET**: Fetch data (e.g., list products at `/products`).
- **POST**: Create new data (e.g., add a user at `/users`).
- **PUT**: Fully update an item (e.g., update product details at `/products/1`).
- **DELETE**: Remove an item (e.g., delete a user at `/users/1`).
- **PATCH**: Partially update an item (e.g., change a user’s email at `/users/1`).

## 2. HTTP Status Codes
Status codes show the result of a request:

- **200 (OK)**: Success (e.g., data fetched).
- **201 (Created)**: New resource created (e.g., after POST).
- **400 (Bad Request)**: Invalid input (e.g., missing data).
- **404 (Not Found)**: Resource not found (e.g., wrong URL).
- **500 (Internal Server Error)**: Server error (e.g., code crash).

## 3. Using Postman for API Testing
**Postman** lets you test APIs by sending HTTP requests and viewing responses.

- **Setup**:
  1. Download from [postman.com](https://www.postman.com/downloads/).
  2. Install and open Postman.
- **Testing**:
  1. Create a request.
  2. Choose a method (e.g., GET, POST).
  3. Set the URL (e.g., `http://localhost:3000/users`).
  4. For POST/PUT, add JSON body (e.g., `{"name":"Alice"}`) in “Body” > “raw” > “JSON”.
  5. Click “Send” to check the response.

## Example Express Server
1. **Create project**:
   ```bash
   mkdir express-api-test
   cd express-api-test
   npm init -y
   npm install express
   ```
2. **Create `server.js`**:
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.use(express.json());

   // GET: List users
   app.get('/users', (req, res) => {
       res.status(200).json([{ id: 1, name: 'Alice' }]);
   });

   // POST: Create user
   app.post('/users', (req, res) => {
       if (!req.body.name) return res.status(400).json({ error: 'Name required' });
       res.status(201).json({ message: 'User created', user: req.body });
   });

   // PUT: Update user
   app.put('/users/:id', (req, res) => {
       if (!req.body.name) return res.status(400).json({ error: 'Name required' });
       res.status(200).json({ message: `User ${req.params.id} updated`, user: req.body });
   });

   // DELETE: Delete user
   app.delete('/users/:id', (req, res) => {
       res.status(200).json({ message: `User ${req.params.id} deleted` });
   });

   app.use((req, res) => res.status(404).json({ error: 'Not found' }));

   app.listen(port, () => console.log(`Server at http://localhost:${port}`));
   ```
3. **Run**:
   ```bash
   node server.js
   ```
4. **Test with Postman**:
   - GET `http://localhost:3000/users` → `200`, `[{"id":1,"name":"Alice"}]`.
   - POST `http://localhost:3000/users`, body: `{"name":"Bob"}` → `201`, `{"message":"User created","user":{"name":"Bob"}}`.
   - PUT `http://localhost:3000/users/1`, body: `{"name":"Bob"}` → `200`, `{"message":"User 1 updated","user":{"name":"Bob"}}`.
   - DELETE `http://localhost:3000/users/1` → `200`, `{"message":"User 1 deleted"}`.
   - GET `http://localhost:3000/xyz` → `404`, `{"error":"Not found"}`.

## Tips
- Match methods to tasks (e.g., GET for fetch, POST for create).
- Use correct status codes (e.g., `201` for POST, `404` for missing resources).
- Test all routes in Postman for accurate responses.
- Validate inputs to prevent `400` errors.

## Common Pitfalls
- Using wrong method (e.g., GET for updates).