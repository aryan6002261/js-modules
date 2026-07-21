// ===============================
// Module 20/25 - JavaScript Basics
// Topic: Advanced JavaScript Concepts
// ===============================


// Execution Context
console.log("Execution Context:");

function greet() {
    console.log("Hello, JavaScript!");
}

greet();

console.log("Execution Context → Global context is created first, then function context.");


// Call Stack
console.log("\nCall Stack:");

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Inside Third Function");
}

first();

console.log("Call Stack → Functions are executed using Last In, First Out (LIFO).");


// Event Loop
console.log("\nEvent Loop:");

console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

console.log("End");

console.log("Event Loop → Executes callback functions after the call stack is empty.");


// Memory Management
console.log("\nMemory Management:");

let user = {
    name: "John"
};

console.log(user);

user = null;

console.log("Memory Management → Unused memory is automatically cleaned by Garbage Collection.");


// Closures
console.log("\nClosures:");

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();

console.log("Closure → Inner function remembers variables from its outer function.");


// Prototypes
console.log("\nPrototypes:");

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
};

const person = new Person("Alice");

person.sayHello();

console.log("Prototype → Shared methods for all objects created from a constructor.");


// Prototype Chain
console.log("\nPrototype Chain:");

console.log(person.toString());

console.log("Prototype Chain → JavaScript searches for properties through linked prototypes.");


// this Keyword
console.log("\nthis Keyword:");

const student = {
    name: "David",

    introduce() {
        console.log(this.name);
    }
};

student.introduce();

console.log("this → Refers to the object calling the method.");


// bind()
console.log("\nbind():");

const employee = {
    name: "Emma"
};

function showName() {
    console.log(this.name);
}

const boundFunction = showName.bind(employee);

boundFunction();

console.log("bind() → Returns a new function with a fixed 'this' value.");


// call()
console.log("\ncall():");

showName.call(employee);

console.log("call() → Invokes a function immediately with a specified 'this'.");


// apply()
console.log("\napply():");

function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

introduce.apply(employee, ["London", "UK"]);

console.log("apply() → Similar to call(), but arguments are passed as an array.");


// Summary
console.log("\nSummary:");

console.log("Execution Context → Environment where JavaScript code runs");
console.log("Call Stack → Manages function execution (LIFO)");
console.log("Event Loop → Handles asynchronous callbacks");
console.log("Memory Management → Garbage Collector frees unused memory");
console.log("Closures → Inner functions remember outer variables");
console.log("Prototypes → Share methods between objects");
console.log("Prototype Chain → Inherits properties through linked prototypes");
console.log("this → Refers to the current execution object");
console.log("bind() → Returns a new function with fixed 'this'");
console.log("call() → Calls a function with specified 'this'");
console.log("apply() → Calls a function with specified 'this' and array arguments");