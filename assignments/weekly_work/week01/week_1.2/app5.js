// javascript
// app.js: Exploring JavaScript Classes
// This file demonstrates JavaScript classes, which are like blueprints for creating
// objects with shared properties and behaviors.
// Part of my JavaScript Foundations learning journey (Week 1.2: Basic JS APIs).

// === What are Classes? ===
// A class is like a toy factory! It’s a plan that tells you how to make toys (objects)
// with certain features (properties) and actions (methods).
// Syntax: class ClassName { constructor() { ... } method() { ... } }

// Example 1: A Pet class to create pet objects
class Pet {
    constructor(name, type) {
        this.name = name; // Property: Pet's name
        this.type = type; // Property: Pet's type (e.g., dog, cat)
    }
    speak() {
        return `${this.name} the ${this.type} says hello!`;
    }
}
// Create pet objects
const dog = new Pet("Buddy", "dog");
const cat = new Pet("Mittens", "cat");
console.log("Dog info:", dog); // Output: Dog info: {name: "Buddy", type: "dog"}
console.log(dog.speak()); // Output: Buddy the dog says hello!
console.log("Cat info:", cat); // Output: Cat info: {name: "Mittens", type: "cat"}
console.log(cat.speak()); // Output: Mittens the cat says hello!

// Example 2: A Student class with grades
class Student {
    constructor(name, grade) {
        this.name = name; // Property: Student's name
        this.grade = grade; // Property: Student's grade level
        this.scores = []; // Property: List to store scores
    }
    addScore(score) {
        this.scores.push(score); // Method: Add a score to the list
    }
    getAverage() {
        const sum = this.scores.reduce((a, b) => a + b, 0);
        return this.scores.length ? sum / this.scores.length : 0; // Method: Calculate average score
    }
}
// Create a student object
const student = new Student("Aisha", 5);
student.addScore(90);
student.addScore(85);
console.log("Student info:", student); // Output: Student info: {name: "Aisha", grade: 5, scores: [90, 85]}
console.log(`${student.name}'s average score:`, student.getAverage()); // Output: Aisha's average score: 87.5

// Example 3: A Toy class with price
class Toy {
    constructor(name, price) {
        this.name = name; // Property: Toy's name
        this.price = price; // Property: Toy's price
    }
    describe() {
        return `The ${this.name} costs $${this.price}.`; // Method: Describe the toy
    }
}
// Create toy objects
const toy1 = new Toy("Robot", 20);
const toy2 = new Toy("Doll", 15);
console.log(toy1.describe()); // Output: The Robot costs $20.
console.log(toy2.describe()); // Output: The Doll costs $15.

// === Why Use Classes? ===
// - Classes make it easy to create many objects with the same features (like pets or students).
// - They organize code, combining data (properties) and actions (methods).
// - Perfect for building apps, like managing students or products in a store.

// Run this file with Node.js (`node app.js`) or in a browser console.
// Try creating new pets, students, or toys to explore classes!
