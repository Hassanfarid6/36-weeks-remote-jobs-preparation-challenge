// Week 2.5: startsWith Function Explained!

// What's the startsWith Function?
// startsWith is like a detective that checks if a word or sentence starts with certain letters.
// Imagine you have a word like "cat" and want to know if it starts with "ca". startsWith looks
// at the beginning of the word and says "yes" (true) or "no" (false). In JavaScript, we use
// "text".startsWith("te") to see if a string starts with a specific prefix.

// How startsWith Works:
// "text".startsWith("prefix")
// - "text" is the string you’re checking (like "hello").
// - "prefix" is the letters you’re looking for at the start (like "he").
// - Returns true if the string starts with the prefix, false if it doesn’t.
// - It’s case-sensitive ("Hello" and "hello" are different).

// Why Use startsWith?
// 1. It’s super easy to check the start of words or names.
// 2. Great for searching or sorting things, like finding names starting with "A".
// 3. Works well with arrays (like in Week 2.5 filter) to pick out certain strings.

// Let’s See startsWith in Action!

// Example 1: Basic Check
// Check if "hello" starts with "he"
const word = "hello";
const startsWithHe = word.startsWith("he");
console.log(startsWithHe); // Prints: true
// startsWith("he") checks if "hello" begins with "he". It does, so true!

const startsWithHi = word.startsWith("hi");
console.log(startsWithHi); // Prints: false
// "hello" doesn’t start with "hi", so false.

// Example 2: Case Sensitivity
// Check if "Hello" starts with "he" (small letters)
const bigWord = "Hello";
const startsWithSmallHe = bigWord.startsWith("he");
console.log(startsWithSmallHe); // Prints: false
// "Hello" starts with "H", not "h", so it’s false because startsWith cares about case.

// Example 3: Using with Arrays
// Find names starting with "S" in a list
const names = ["Sam", "Lily", "Sophie", "Tom"];
const sNames = names.filter(name => name.startsWith("S"));
console.log(sNames); // Prints: ["Sam", "Sophie"]
// name => name.startsWith("S") checks each name and keeps ones starting with "S".

// Example 4: Check Position
// You can tell startsWith to start checking at a specific position
const sentence = "I love to code";
const startsWithLoveAt2 = sentence.startsWith("love", 2);
console.log(startsWithLoveAt2); // Prints: true
// Starts checking at position 2 (third letter, "l" in "love"). "love" matches, so true.

const startsWithLoveAt0 = sentence.startsWith("love", 0);
console.log(startsWithLoveAt0); // Prints: false
// At position 0, it’s "I", not "love", so false.

// Example 5: Practical Use
// Check if a website URL starts with "https"
const url = "https://funwebsite.com";
const isSecure = url.startsWith("https");
console.log(isSecure); // Prints: true
// Useful for checking if a website is secure (starts with "https").

// Why startsWith is Awesome
// It’s like a quick yes/no question for strings. Combine it with filter (like in Week 2.5)
// to pick out items or use it to check things like URLs or names.

// Things to Watch Out For
// 1. Case matters: "Cat" and "cat" are different. Use .toLowerCase() if you don’t want case sensitivity.
// Example: word.toLowerCase().startsWith("he") checks "Hello" or "hello".
// 2. Empty strings: "" starts with "" (true), but that’s rare.
// 3. Position errors: If you use a position that’s too big, it returns false.
// Example: "hi".startsWith("h", 10) // false, no position 10.

// Try It Yourself!
// Run this file with:
// node startsWithFunction.js
// Or copy examples into a browser console (right-click, inspect, console).

// Fun Challenges!
// 1. Check if "banana" starts with "ba" and "na".
// 2. Filter ["apple", "ant", "bear", "ape"] to keep words starting with "a".
// 3. Check if "I like cats" starts with "like" at position 2.

// startsWith is like a string detective that finds the right beginnings! Keep practicing!