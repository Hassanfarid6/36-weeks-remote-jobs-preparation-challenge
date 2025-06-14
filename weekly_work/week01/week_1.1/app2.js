// app.js: Demonstrating Complex Primitives in JavaScript (Arrays and Objects)

// 1. Arrays: A list to store multiple items
let favoriteFruits = ["apple", "banana", "mango"];
console.log("My favorite fruits:", favoriteFruits); // Output: My favorite fruits: [ 'apple', 'banana', 'mango' ]

// Accessing array items (index starts at 0)
console.log("First fruit:", favoriteFruits[0]); // Output: First fruit: apple
console.log("Second fruit:", favoriteFruits[1]); // Output: Second fruit: banana

// Adding a new fruit
favoriteFruits.push("orange");
console.log("After adding orange:", favoriteFruits); 
// Output: After adding orange: [ 'apple', 'banana', 'mango', 'orange' ]

// Looping through an array
console.log("All fruits:");
for (let fruit of favoriteFruits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// mango
// orange

// 2. Objects: A way to store related information
let student = {
    name: "Aisha",
    age: 10,
    grade: "5th",
    favoriteSubject: "Science"
};
console.log("Student info:", student);
 // Output: Student info: { name: 'Aisha', age: 10, grade: '5th', favoriteSubject: 'Science' }

// Accessing object properties
console.log("Student name:", student.name); // Output: Student name: Aisha
console.log("Favorite subject:", student.favoriteSubject); // Output: Favorite subject: Science

// Adding a new property
student.hobby = "Drawing";
console.log("After adding hobby:", student); 
// Output: After adding hobby: { name: 'Aisha', age: 10, grade: '5th', favoriteSubject: 'Science', hobby: 'Drawing' }

// Updating a property
student.age = 11;
console.log("After updating age:", student); 
// Output: After updating age: { name: 'Aisha', age: 11, grade: '5th', favoriteSubject: 'Science', hobby: 'Drawing' }