// ===============================
// Module 14/25 - JavaScript Basics
// Topic: Advanced Functions
// ===============================


// Callback Functions
console.log("Callback Functions:");

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("John", sayBye);


// Higher Order Functions
console.log("\nHigher Order Functions:");

function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);

console.log(double(5));
console.log(double(10));

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function (num) {
    return num * num;
});

console.log(squares);


// Closures
console.log("\nClosures:");

function counter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());


// Currying
console.log("\nCurrying:");

function add(a) {
    return function (b) {
        return a + b;
    };
}

const addFive = add(5);

console.log(addFive(10));
console.log(addFive(20));


// Recursion
console.log("\nRecursion:");

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(7));


// Summary
console.log("\nSummary:");

console.log("Callback Functions → Function passed as an argument");
console.log("Higher Order Functions → Functions that take or return functions");
console.log("Closures → Inner function remembers outer variables");
console.log("Currying → Transform function into multiple single-argument functions");
console.log("Recursion → Function calls itself");