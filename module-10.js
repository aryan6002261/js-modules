// ===============================
// Module 10/20 - JavaScript Basics
// Topic: Scope
// ===============================


// Global Scope
let globalVar = "I am a global variable";

console.log("Global Scope:");

console.log(globalVar);


// Function Scope
console.log("\nFunction Scope:");

function showFunctionScope() {
    let functionVar = "I am inside a function";

    console.log(globalVar);
    console.log(functionVar);
}

showFunctionScope();


// Block Scope
console.log("\nBlock Scope:");

if (true) {
    let blockVar = "Declared with let";
    const blockConst = "Declared with const";
    var varVariable = "Declared with var";

    console.log(blockVar);
    console.log(blockConst);
    console.log(varVariable);
}

console.log(varVariable);


// Scope Example
console.log("\nScope Accessibility:");

function scopeExample() {
    let localVar = "Local Variable";

    console.log(globalVar);
    console.log(localVar);
}

scopeExample();

try {
    console.log(localVar);
} catch (error) {
    console.log(error.message);
}


// Block Scope Example
console.log("\nBlock Scope Accessibility:");

if (true) {
    let blockOnly = "Inside Block";
    console.log(blockOnly);
}

try {
    console.log(blockOnly);
} catch (error) {
    console.log(error.message);
}


// Variable Shadowing
console.log("\nVariable Shadowing:");

let message = "Global Message";

function shadowExample() {
    let message = "Function Message";

    console.log(message);
}

shadowExample();

console.log(message);


// Nested Scope
console.log("\nNested Scope:");

let outer = "Outer Variable";

function outerFunction() {
    let inner = "Inner Variable";

    function innerFunction() {
        console.log(outer);
        console.log(inner);
    }

    innerFunction();
}

outerFunction();


// var Scope
console.log("\nvar Scope:");

function varExample() {

    if (true) {
        var x = 100;
    }

    console.log(x);
}

varExample();


// let Scope
console.log("\nlet Scope:");

function letExample() {

    if (true) {
        let y = 200;
        console.log(y);
    }

    try {
        console.log(y);
    } catch (error) {
        console.log(error.message);
    }
}

letExample();


// Hoisting with var
console.log("\nHoisting - var:");

console.log(myVar);

var myVar = "Hoisted Variable";

console.log(myVar);


// Hoisting with let
console.log("\nHoisting - let:");

try {
    console.log(myLet);
} catch (error) {
    console.log(error.message);
}

let myLet = "Block Scoped Variable";

console.log(myLet);


// Hoisting with const
console.log("\nHoisting - const:");

try {
    console.log(myConst);
} catch (error) {
    console.log(error.message);
}

const myConst = "Constant Variable";

console.log(myConst);


// Function Hoisting
console.log("\nFunction Hoisting:");

greet();

function greet() {
    console.log("Hello from a hoisted function!");
}


// Function Expression Hoisting
console.log("\nFunction Expression Hoisting:");

try {
    sayHello();
} catch (error) {
    console.log(error.message);
}

const sayHello = function () {
    console.log("Hello from a function expression!");
};

sayHello();


// Arrow Function Hoisting
console.log("\nArrow Function Hoisting:");

try {
    welcome();
} catch (error) {
    console.log(error.message);
}

const welcome = () => {
    console.log("Hello from an arrow function!");
};

welcome();


// Temporal Dead Zone (TDZ)
console.log("\nTemporal Dead Zone:");

try {
    console.log(tdzVar);
} catch (error) {
    console.log(error.message);
}

let tdzVar = "TDZ Example";

console.log(tdzVar);


// Summary
console.log("\nSummary:");

console.log("Global variables are accessible everywhere.");
console.log("Function variables exist only inside functions.");
console.log("Block variables (let/const) exist only inside blocks.");
console.log("var is function-scoped.");
console.log("let and const are block-scoped.");
console.log("Only function declarations are fully hoisted.");
console.log("let and const remain in the Temporal Dead Zone until initialized.");