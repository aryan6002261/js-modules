// ===============================
// Module 2/25 - JavaScript Basics
// Topic: Variables & Data Types
// ===============================

// 1. Declaring Variables
let name = "Aryan";        // String
let age = 20;              // Number
let isStudent = true;      // Boolean
let score;                 // Undefined
let user = null;           // Null
const PI = 3.14;           // Constant

// 2. Displaying Variable Values
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Score:", score);
console.log("User:", user);
console.log("PI:", PI);

// 3. Checking Data Types
console.log("\n--- Data Types ---");
console.log("name:", typeof name);
console.log("age:", typeof age);
console.log("isStudent:", typeof isStudent);
console.log("score:", typeof score);
console.log("user:", typeof user); // object (JavaScript quirk)
console.log("PI:", typeof PI);

// 4. Updating Variables
name = "Rahul";
age = 21;
score = 95;

console.log("\n--- Updated Values ---");
console.log("Name:", name);
console.log("Age:", age);
console.log("Score:", score);

// 5. Constants Example
// PI = 3.14159; // ❌ Error: Assignment to constant variable.
// Uncomment the above line to see the error.