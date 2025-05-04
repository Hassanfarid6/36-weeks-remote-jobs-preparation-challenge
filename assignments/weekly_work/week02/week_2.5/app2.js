// Week 2.5: Filter Function Explained!!

// What's the Filter Function?
// Filter is like a magic sieve that picks out only the things you want from a list (array).
// Imagine you have a basket of fruits, and you only want the apples. Filter looks at each fruit
// and keeps only the ones that pass your test, like "is it an apple?" In JavaScript, we use
// filter to keep certain items in an array based on a rule, like picking numbers bigger than 0.

// How Filter Works:
// array.filter(item => test)
// - Takes each item in the array.
// - Uses a function (often an arrow function!) to check if the item passes the test.
// - If the test is true, keeps the item; if false, skips it.
// - Returns a new array with only the kept items.
// - The original array stays the same!

// Why Use Filter?
// 1. It’s great for picking out specific items, like big numbers or certain words.
// 2. It’s easy to use with arrow functions (like item => item > 0) for short code.
// 3. Perfect for finding things in lists, like finding all passing grades.

// Let’s See Filter in Action!

// Example 1: Pick Positive Numbers
// Keep numbers greater than 0 from [3, -1, 4, 0, 5, -2]
const numbers = [3, -1, 4, 0, 5, -2];
const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers); // Prints: [3, 4, 5]
console.log(numbers); // Prints: [3, -1, 4, 0, 5, -2] (original unchanged!)
// num => num > 0 checks each number and keeps only positive ones.

// Example 2: Pick Long Words
// Keep words with 4 or more letters from ["cat", "dog", "elephant", "bird"]
const words = ["cat", "dog", "elephant", "bird"];
const longWords = words.filter(word => word.length >= 4);
console.log(longWords); // Prints: ["elephant", "bird"]
// word => word.length >= 4 checks the length of each word.

// Example 3: Filter Objects
// Keep people who are 12 or older from a list
const people = [
    { name: "Alice", age: 10 },
    { name: "Bob", age: 12 },
    { name: "Charlie", age: 15 }
];
const olderKids = people.filter(person => person.age >= 12);
console.log(olderKids); // Prints: [{ name: "Bob", age: 12 }, { name: "Charlie", age: 15 }]
// person => person.age >= 12 checks each person’s age.

// Example 4: Use Index
// Filter gives you the item and its position (index) in the array
// Keep items at even positions (index 0, 2, 4, ...)
const fruits = ["apple", "banana", "orange", "grape", "mango"];
const evenPositionFruits = fruits.filter((fruit, index) => index % 2 === 0);
console.log(evenPositionFruits); // Prints: ["apple", "orange", "mango"]
// index % 2 === 0 is true for even indexes (0, 2, 4).

// Example 5: Filter with Logic
// Keep passing scores (70 or higher)
const scores = [85, 60, 90, 45, 75];
const passingScores = scores.filter(score => score >= 70);
console.log(passingScores); // Prints: [85, 90, 75]
// score => score >= 70 keeps only scores that pass.

// Why Filter is Awesome with Arrow Functions
// Arrow functions (like item => item > 0) are short, so filter looks clean.
// Compare:
const longFilter = numbers.filter(function(num) { return num > 0; }); // Old way
const shortFilter = numbers.filter(num => num > 0); // Arrow function way
// Same result, but the arrow function is quicker to write!

// Things to Watch Out For
// 1. Filter picks items, doesn’t change them: Use Map to transform items.
// 2. Return true/false: Filter needs a test that says yes (true) or no (false).
// 3. Filter makes a NEW array: It doesn’t change the original list.
// 4. Empty result: If no items pass the test, you get an empty array [].
// Example: numbers.filter(num => num > 100) // Prints: [] (no numbers > 100)

// Try It Yourself!
// Run this file with:
// node filterFunction.js
// Or copy examples into a browser console (right-click, inspect, console).

// Fun Challenges!
// 1. Filter [10, -5, 8, -3, 12] to keep numbers less than 10.

let num1 = [10, -5, 8, -3, 12]

let ress = num1.filter(nums => nums < 10)
console.log(ress)

// 2. Filter ["sun", "moon", "star", "cloud"] to keep words with exactly 3 letters.

let words1 = ["sun", "moon", "star", "cloud"]

// let res1 = words1.filter(word1 => word1.length > 3)
let res1 = words1.filter(word1 => word1.length == 3)

console.log(res1)

// 3. Filter [{ name: "Sam", score: 50 }, { name: "Lily", score: 80 }] to keep scores >= 70.

let obj = [{ name: "Sam", score: 50 }, { name: "Lily", score: 80 }] 

let res2 = obj.filter(obj1 => obj1.score >= 70 )

console.log(res2)
// Filter is like a superhero that picks the best items from your lists! Keep practicing!