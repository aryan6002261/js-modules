// ===============================
// Module 7/25 - JavaScript Basics
// Topic: Strings
// ===============================


// String Variable
let sentence = "The quick brown fox jumps over the lazy dog.";

console.log("Original String:");
console.log(sentence);


// String Length
console.log("\nString Length:");
console.log(sentence.length);


// Case Conversion
console.log("\nCase Conversion:");
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());


// Searching in Strings
console.log("\nSearching in Strings:");
console.log(sentence.includes("fox"));
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("dog."));
console.log(sentence.indexOf("jumps"));


// Replacing Text
console.log("\nReplace Text:");
console.log(sentence.replace("lazy", "active"));


// Splitting Strings
console.log("\nSplit String:");
console.log(sentence.split(" "));


// Trimming Spaces
let text = "   Hello JavaScript!   ";

console.log("\nTrim Spaces:");
console.log(text.trim());


// Accessing Characters
console.log("\nAccess Characters:");
console.log(sentence[0]);
console.log(sentence.charAt(10));
console.log(sentence.charCodeAt(10));


// Extracting Part of String
console.log("\nExtracting Strings:");
console.log(sentence.slice(4, 9));
console.log(sentence.substring(4, 9));


// Repeat String
console.log("\nRepeat String:");
console.log(sentence.repeat(2));


// Template Literals
let name = "John Doe";
let age = 30;
let city = "New York";

console.log("\nTemplate Literals:");
console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);