// ===============================
// Module 19/25 - JavaScript Basics
// Topic: JavaScript Modules
// ===============================


// Export Function
console.log("Export Function:");

// math.js

export function add(a, b) {
    return a + b;
}


// Export Multiple Functions
console.log("\nExport Multiple Functions:");

// math.js

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}


// Default Export
console.log("\nDefault Export:");

// greet.js

export default function greet(name) {
    console.log(`Hello, ${name}!`);
}


// Import Named Exports
console.log("\nImport Named Exports:");

// app.js

import { add, subtract, multiply } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));


// Import Default Export
console.log("\nImport Default Export:");

// app.js

import greet from "./greet.js";

greet("John");


// Import Everything
console.log("\nImport Everything:");

// app.js

import * as MathUtils from "./math.js";

console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(5, 3));
console.log(MathUtils.multiply(5, 3));


// Rename Imports
console.log("\nRename Imports:");

// app.js

import { add as sum } from "./math.js";

console.log(sum(20, 10));


// Summary
console.log("\nSummary:");

console.log("export → Makes variables, functions, or classes available to other files");
console.log("import → Brings exported items into another file");
console.log("Named Export → Export multiple items by name");
console.log("Default Export → Export one main item from a file");
console.log("import * as → Imports all exports into one object");
console.log("as → Renames imported or exported items");