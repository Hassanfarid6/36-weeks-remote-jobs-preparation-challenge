// - Simple primitives: variables, loops, conditionals  


// javascript
// app.js: Demonstrating Simple Primitives in JavaScript

// 1. Variables: Storing data
let namE = "Aisha"; // String variable
const age = 10; // Number variable (constant)
var score = 95; // Number variable (older way)

// Print variables
console.log("Name:", namE); // Output: Name: Aisha
console.log("Age:", age); // Output: Age: 10
console.log("Score:", score); // Output: Score: 95

// 2. Conditionals: Making decisions
if (age >= 10) {
    console.log(namE + " is old enough to play the game!");
} else {
    console.log(namE + " is too young to play.");
}
// Output: Aisha is old enough to play the game!

if (score >= 90) {
    console.log("Great job, " + namE + "! You got an A!");
} else if (score >= 80) {
    console.log("Good work, " + namE + "! You got a B.");
} else {
    console.log("Keep trying, " + namE + "!");
}
// Output: Great job, Aisha! You got an A!

// 3. Loops: Repeating tasks
// For loop: Print numbers 1 to 5
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5

// While loop: Print even numbers from 2 to 10
console.log("Even numbers from 2 to 10:");
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2; // Add 2 to get the next even number
}
// Output:
// 2
// 4
// 6
// 8
// 10