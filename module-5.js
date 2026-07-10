// ===============================
// Module 5/20 - JavaScript Basics
// Topic: Loops
// ===============================

// for loop
console.log("For Loop:");

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// while loop
console.log("\nWhile Loop:");

let i = 0;

while (true) {
    console.log("Iteration:", i);

    i++;

    if (i > 10) {
        console.log("Loop stopped using break.");
        break;
    }
}


// for...of loop (Arrays)
console.log("\nFor...of Loop (Array):");

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}


// for...of with Object.keys()
console.log("\nObject Keys:");

let person = {
    name: "Aryan",
    age: 20,
    isStudent: true
};

for (let key of Object.keys(person)) {
    console.log(key + ": " + person[key]);
}


// for...of with Object.values()
console.log("\nObject Values:");

for (let value of Object.values(person)) {
    console.log(value);
}