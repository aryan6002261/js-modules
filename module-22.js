// ===============================
// Module 22/25 - JavaScript Basics
// Topic: JSON
// ===============================


// Creating a JavaScript Object
console.log("JavaScript Object:");

const user = {
    name: "Alice",
    age: 25,
    city: "London"
};

console.log(user);

console.log("JavaScript Object → Stores data as key-value pairs.");


// JSON.stringify()
console.log("\nJSON.stringify():");

const jsonString = JSON.stringify(user);

console.log(jsonString);

console.log("JSON.stringify() → Converts a JavaScript object into a JSON string.");


// JSON.parse()
console.log("\nJSON.parse():");

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);

console.log("JSON.parse() → Converts a JSON string back into a JavaScript object.");


// Nested Objects
console.log("\nNested Objects:");

const employee = {
    id: 101,
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};

const employeeJSON = JSON.stringify(employee);

console.log(employeeJSON);

const employeeObject = JSON.parse(employeeJSON);

console.log(employeeObject);

console.log("Nested Objects → JSON supports nested objects and arrays.");


// JSON with Arrays
console.log("\nJSON with Arrays:");

const fruits = ["Apple", "Banana", "Orange"];

const fruitsJSON = JSON.stringify(fruits);

console.log(fruitsJSON);

const fruitsArray = JSON.parse(fruitsJSON);

console.log(fruitsArray);

console.log("Arrays → Arrays can also be converted to and from JSON.");


// Pretty Printing JSON
console.log("\nPretty Printing JSON:");

const formattedJSON = JSON.stringify(user, null, 2);

console.log(formattedJSON);

console.log("Pretty Print → Makes JSON easier for humans to read.");


// Summary
console.log("\nSummary:");

console.log("JSON → JavaScript Object Notation for data exchange");
console.log("JSON.stringify() → Converts objects into JSON strings");
console.log("JSON.parse() → Converts JSON strings into JavaScript objects");
console.log("Nested Objects → JSON supports complex data structures");
console.log("Arrays → Arrays can be stored as JSON");
console.log("Pretty Print → Use JSON.stringify(object, null, 2) for formatted JSON");