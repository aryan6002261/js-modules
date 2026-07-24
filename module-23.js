// ===============================
// Module 23/25 - JavaScript Basics
// Topic: Regular Expressions (RegExp)
// ===============================


// Creating a Regular Expression
console.log("Creating a RegExp:");

const regex = /hello/i;

console.log(regex);

console.log("RegExp → A pattern used to search and match text.");


// test()
console.log("\ntest():");

console.log(regex.test("Hello"));
console.log(regex.test("JavaScript"));

console.log("test() → Returns true if the pattern matches, otherwise false.");


// match()
console.log("\nmatch():");

const text = "Hello JavaScript";

console.log(text.match(/hello/i));

console.log("match() → Returns the matched text and additional information.");


// search()
console.log("\nsearch():");

console.log(text.search(/javascript/i));

console.log("search() → Returns the index of the first match or -1 if not found.");


// replace()
console.log("\nreplace():");

const updatedText = text.replace(/javascript/i, "World");

console.log(updatedText);

console.log("replace() → Replaces matched text with new text.");


// Common Flags
console.log("\nCommon Flags:");

const sentence = "cat Cat CAT";

console.log(sentence.match(/cat/g));
console.log(sentence.match(/cat/gi));

console.log("g → Global search (all matches)");
console.log("i → Case-insensitive search");


// Common Character Patterns
console.log("\nCharacter Patterns:");

const data = "User123";

console.log(data.match(/\d+/)); // Digits
console.log(data.match(/[A-Za-z]+/)); // Letters
console.log(data.match(/\w+/)); // Word characters

console.log("\\d → Digits (0-9)");
console.log("[A-Za-z] → Alphabetic characters");
console.log("\\w → Letters, digits, and underscore");


// Summary
console.log("\nSummary:");

console.log("RegExp → Used for pattern matching");
console.log("test() → Returns true or false");
console.log("match() → Returns matching results");
console.log("search() → Returns match position");
console.log("replace() → Replaces matched text");
console.log("g Flag → Finds all matches");
console.log("i Flag → Ignores letter case");
console.log("\\d → Matches digits");
console.log("\\w → Matches letters, digits, and underscore");