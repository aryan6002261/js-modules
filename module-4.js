// ===============================
// Module 4/25 - JavaScript Basics
// Topic: Conditional Statements
// ===============================

let a = 100;
let b = 200;

// if, else if, else
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

// Falsy values
const falsyValues = [
    false,
    0,
    -0,
    0n,
    "",
    null,
    undefined,
    NaN
];

console.log("\nFalsy Values:");
for (const value of falsyValues) {
    if (value) {
        console.log(value, "is Truthy");
    } else {
        console.log(value, "is Falsy");
    }
}

// Truthy values
const truthyValues = [
    true,
    1,
    -1,
    1n,
    "0",
    "false",
    [],
    {},
    function () {}
];

console.log("\nTruthy Values:");
for (const value of truthyValues) {
    if (value) {
        console.log(value, "is Truthy");
    } else {
        console.log(value, "is Falsy");
    }
}

// Nested if example
let age = 20;
let hasID = true;

console.log("\nNested If:");

if (age >= 18) {
    if (hasID) {
        console.log("Access granted.");
    } else {
        console.log("Please show a valid ID.");
    }
} else {
    console.log("Access denied. You must be at least 18 years old.");
}

// Ternary operator
let result = age >= 18 ? "Adult" : "Minor";
console.log("\nTernary Result:", result);