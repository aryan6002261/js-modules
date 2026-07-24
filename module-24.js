// ===============================
// Module 24/25 - JavaScript Basics
// Topic: Best Practices
// ===============================


// Clean Code
console.log("Clean Code:");

function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 4));

console.log("Clean Code → Write simple, readable, and maintainable code.");


// Naming Conventions
console.log("\nNaming Conventions:");

const firstName = "Alice";
const totalPrice = 250;

console.log(firstName);
console.log(totalPrice);

console.log("Naming Conventions → Use meaningful camelCase names for variables and functions.");


// Code Organization
console.log("\nCode Organization:");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(add(10, 5));
console.log(subtract(10, 5));

console.log("Code Organization → Split code into small, reusable functions.");


// Debugging
console.log("\nDebugging:");

const number = 10;

console.log("Current value:", number);

console.log("Debugging → Use console.log() and browser DevTools to identify and fix issues.");


// Performance Optimization
console.log("\nPerformance Optimization:");

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

console.log("Performance Optimization → Avoid unnecessary work and use efficient methods.");


// Summary
console.log("\nSummary:");

console.log("Clean Code → Keep code simple and readable");
console.log("Naming Conventions → Use descriptive camelCase names");
console.log("Code Organization → Write modular and reusable functions");
console.log("Debugging → Use console.log() and DevTools");
console.log("Performance Optimization → Write efficient and optimized code");