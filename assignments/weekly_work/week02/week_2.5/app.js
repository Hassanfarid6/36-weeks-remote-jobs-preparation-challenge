// Arrow Functions Explained!!!

// What's an Arrow Function?
// An arrow function is a short, cool way to write functions in JavaScript. Functions are like
// little machines that do jobs, like saying hi, adding numbers, or making a webpage do stuff.
// Arrow functions use => (an arrow!) to make writing these machines faster and cleaner than
// old-style functions. They were added to JavaScript in 2015 (ES6) to make coding easier.

// Why Are They Special?
// 1. Shorter: They skip words like "function" and sometimes even "return" or curly braces.
// 2. Clear: They make your code look neat, like a tidy toy box.
// 3. Handy: They’re great for quick tasks, like working with lists or web servers.

// Let’s Compare Old and New Ways!
// Old way (regular function):
function addNumbers(a, b) {
    return a + b;
}

// New way (arrow function):
const addNumbersArrow = (a, b) => a + b;

// See? The arrow function is shorter! No "function", no "return", no curly braces for
// simple stuff. But both do the same job: add two numbers.

// Syntax Breakdown
// Arrow functions look like this: (parameters) => whatToDo
// - Parameters: Inputs (like numbers or names) go in ().
// - =>: The arrow says, “Here’s what the function does!”
// - What to do: Can be one line (no braces) or many lines (with braces and return).

// Lots of Examples to Make It Fun!

// Example 1: No Inputs (Super Simple)
// A machine that always says the same thing
const sayHello = () => "Hello, world!";
console.log(sayHello()); // Prints: Hello, world!
// No () needed for no inputs, and no braces/return for one line.

// Example 2: One Input
// A machine that makes a greeting for a name
const greetPerson = name => `Hi, ${name}!`; // No () for one parameter
console.log(greetPerson("Bob")); // Prints: Hi, Bob!
// Notice: No parentheses around "name" since it’s just one input.

// Example 3: Two or More Inputs
// A machine that multiplies two numbers
const multiply = (x, y) => x * y; // () needed for multiple parameters
console.log(multiply(4, 5)); // Prints: 20

// Example 4: Multiple Lines
// A machine that builds a longer message
const describeToy = (toyName, toyColor) => {
    const message = `${toyName} is a ${toyColor} toy!`;
    const funFact = `It’s super fun to play with ${toyName}!`;
    return message + " " + funFact;
};
console.log(describeToy("Teddy", "brown")); // Prints: Teddy is a brown toy! It’s super fun to play with Teddy!
// Uses curly braces {} and return because it has multiple lines.

// Example 5: Arrow Function in a List
// Imagine a list of numbers, and we want to double each one
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // Arrow function in map!
console.log(doubled); // Prints: [2, 4, 6]
// Arrow functions are awesome for short tasks like this in lists.

// Example 6: Arrow Function with an Object
// A machine that makes a person object
const makePerson = (name, age) => ({ name: name, age: age });
console.log(makePerson("Alice", 10)); // Prints: { name: 'Alice', age: 10 }
// Note: Wrap the object in () to return it directly, or JavaScript gets confused!

// When to Use Arrow Functions
// 1. Short tasks: Like doubling numbers or making quick messages.
// 2. Lists: Great with .map(), .filter(), or .forEach() for working with arrays.
// 3. Web stuff: Used in Express.js (like in Week 2.4) for handling web requests.
// Example in Express (you’ll see this later):
// app.get('/home', (req, res) => res.send('Welcome!'));

// When NOT to Use Arrow Functions
// 1. Big, complex functions: Regular functions are clearer for lots of steps.
// 2. Special cases: Arrow functions don’t work well with "this" in some old-style code
// (don’t worry about "this" yet—it’s for advanced stuff!).

// Cool Details
// - No "function" keyword: Saves typing!
// - Single line? Skip curly braces and "return" (it’s automatic).
// - One parameter? Skip the parentheses around it.
// - Returning an object? Wrap it in () like ({ key: value }).
// - Arrow functions are "anonymous" (no name unless you assign them to a variable like const fn).

// Common Mistakes (Watch Out!)
// 1. Forgetting () for objects:
// const bad = () => { name: 'Oops' }; // Wrong! JavaScript thinks it’s a block
// const good = () => ({ name: 'Yay' }); // Right! Returns an object
// 2. Using them for everything: If your function is long, use a regular function for clarity.
// 3. Not ending with a semicolon: Always end lines with ; to avoid sneaky bugs.

// Try It Yourself!
// Run this file with:
// node arrowFunctions.js
// Or copy these examples into a browser console (right-click, inspect, console).

// Fun Challenges!
// 1. Make an arrow function called subtract that takes two numbers and returns their difference.
// 2. Create an arrow function that takes a name and returns a message like "Welcome, [name]!".
// 3. Use .map() with an arrow function to turn [10, 20, 30] into [11, 21, 31].

// Arrow functions are like magic shortcuts that make coding fun and fast!