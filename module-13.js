// ===============================
// Module 13/25 - JavaScript Basics
// Topic: ES6 Features
// ===============================


// let & const
console.log("let & const:");

let name = "John";
const country = "India";

name = "Alice";

console.log(name);
console.log(country);


// Arrow Functions
console.log("\nArrow Functions:");

const add = (a, b) => a + b;

const greet = (user) => {
    return `Hello ${user}`;
};

console.log(add(10, 20));
console.log(greet("John"));


// Template Literals
console.log("\nTemplate Literals:");

let language = "JavaScript";
let version = "ES6";

let message = `Learning ${language} ${version}`;

console.log(message);


// Destructuring
console.log("\nDestructuring:");

let person = {
    firstName: "John",
    age: 25,
    city: "Delhi"
};

let { firstName, age, city } = person;

console.log(firstName);
console.log(age);
console.log(city);

let numbers = [10, 20, 30];

let [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


// Spread Operator
console.log("\nSpread Operator:");

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr1);
console.log(arr2);

let user = {
    name: "John",
    age: 25
};

let updatedUser = {
    ...user,
    city: "Mumbai"
};

console.log(updatedUser);


// Rest Operator
console.log("\nRest Operator:");

function sum(...values) {

    let total = 0;

    for (let value of values) {
        total += value;
    }

    return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));


// Default Parameters
console.log("\nDefault Parameters:");

function welcome(name = "Guest") {
    return `Welcome ${name}`;
}

console.log(welcome());
console.log(welcome("Alice"));


// Enhanced Object Literals
console.log("\nEnhanced Object Literals:");

let brand = "Apple";
let model = "iPhone";

let phone = {
    brand,
    model,

    display() {
        console.log(`${this.brand} ${this.model}`);
    }
};

phone.display();


// Classes
console.log("\nClasses:");

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let student1 = new Student("John", 20);

student1.introduce();


// Modules (Example)
console.log("\nModules:");

console.log("Export:");
console.log("export const PI = 3.14;");

console.log("Import:");
console.log("import { PI } from './math.js';");


// Summary
console.log("\nSummary:");

console.log("let → Block scoped variable");
console.log("const → Constant variable");
console.log("Arrow Functions → Short function syntax");
console.log("Template Literals → String interpolation");
console.log("Destructuring → Extract values");
console.log("Spread Operator (...) → Expand values");
console.log("Rest Operator (...) → Collect values");
console.log("Default Parameters → Default function values");
console.log("Enhanced Object Literals → Short object syntax");
console.log("Classes → Blueprint for objects");
console.log("Modules → Export & Import code");