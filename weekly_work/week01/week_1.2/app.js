/**
 * JavaScript Array Methods Example
 * 
 * This file demonstrates the usage of various built-in JavaScript array methods.
 */

// 1. push()
// Adds one or more elements to the end of an array and returns the new length.
let arr1 = [1, 2, 3];
arr1.push(4); // Adds 4 to the end of the array.
console.log('push:', arr1); // Expected output: [1, 2, 3, 4]

// 2. pop()
// Removes the last element from an array and returns that element.
let lastElement = arr1.pop(); // Removes 4 from the array.
console.log('pop:', arr1, 'Removed element:', lastElement); // Expected output: [1, 2, 3], Removed element: 4

// 3. shift()
// Removes the first element from an array and returns that element.
let arr2 = [1, 2, 3];
let firstElement = arr2.shift(); // Removes 1 from the array.
console.log('shift:', arr2, 'Removed element:', firstElement); // Expected output: [2, 3], Removed element: 1

// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length.
arr2.unshift(1); // Adds 1 to the beginning of the array.
console.log('unshift:', arr2); // Expected output: [1, 2, 3]

// 5. concat()
// Combines two or more arrays into a new array.
let arr3 = [4, 5];
let concatenated = arr2.concat(arr3); // Combines arr2 and arr3 into a new array.
console.log('concat:', concatenated); // Expected output: [1, 2, 3, 4, 5]

// 6. join()
// Combines all elements of an array into a single string, separated by a specified separator.
let joined = arr3.join('-'); // Joins the elements of arr3 with a hyphen.
console.log('join:', joined); // Expected output: "4-5"

// 7. slice()
// Returns a shallow copy of a portion of an array into a new array.
let sliced = arr2.slice(1, 3); // Extracts a section from index 1 to 3 (not including 3).
console.log('slice:', sliced); // Expected output: [2, 3]

// 8. splice()
// Changes the contents of an array by removing, replacing, or adding elements in place.
let arr4 = [1, 2, 3, 4];
arr4.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and inserts 'a' and 'b'.
console.log('splice:', arr4); // Expected output: [1, 2, 'a', 'b', 4]

// 9. forEach()
// Executes a provided function once for each array element.
arr4.forEach(element => {
  console.log('forEach:', element); // Expected output: each element of arr4 printed.
});

// 10. map()
// Creates a new array with the results of calling a provided function on every element in the array.
let squared = arr4.map(x => (typeof x === 'number' ? x * x : x)); // Squares the numbers in the array.
console.log('map:', squared); // Expected output: [1, 4, 'a', 'b', 16]

// 11. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(x => x % 2 === 0); // Filters even numbers.
console.log('filter:', evenNumbers); // Expected output: [2, 4]

// 12. reduce()
// Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sums up all the numbers in the array.
console.log('reduce:', sum); // Expected output: 15

// 13. find()
// Returns the first element in the array that satisfies the provided testing function.
let found = numbers.find(x => x > 2); // Finds the first element greater than 2.
console.log('find:', found); // Expected output: 3

// 14. some()
// Tests whether at least one element in the array passes the provided testing function.
let hasEven = numbers.some(x => x % 2 === 0); // Checks if any number is even.
console.log('some:', hasEven); // Expected output: true

// 15. every()
// Tests whether all elements in the array pass the provided testing function.
let allEven = numbers.every(x => x % 2 === 0); // Checks if all numbers are even.
console.log('every:', allEven); // Expected output: false
