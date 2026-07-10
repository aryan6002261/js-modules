// ===============================
// Module 6/20 - JavaScript Basics
// Topic: Functions
// ===============================


// Function Declaration
function add(a, b) {
    console.log(a + b);
}

console.log("Function Declaration:");

add(5, 10);
add(20, 30);


// Arrow Function
const subtract = (a, b) => console.log(a - b);

console.log("\nArrow Function:");

subtract(10, 5);
subtract(30, 20);


// Default Parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
}

console.log("\nDefault Parameters:");

greet("Aryan");
greet();