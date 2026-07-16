// ===============================
// Module 15/20 - JavaScript Basics
// Topic: Asynchronous JavaScript
// ===============================


// setTimeout
console.log("setTimeout:");

setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);


// setInterval
console.log("\nsetInterval:");

let count = 1;

let intervalId = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    if (count > 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);


// Callback Hell
console.log("\nCallback Hell:");

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3() {
    setTimeout(() => {
        console.log("Task 3 completed");
    }, 1000);
}

task1(() => {
    task2(() => {
        task3();
    });
});


// Promises
console.log("\nPromises:");

function fetchData() {
    return new Promise((resolve, reject) => {

        let success = true;

        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Failed to fetch data");
        }
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// async
console.log("\nasync:");

async function greet() {
    return "Hello from async function";
}

greet().then((message) => {
    console.log(message);
});


// await
console.log("\nawait:");

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("John");
        }, 1000);
    });
}

async function displayUser() {
    let user = await getUser();
    console.log(`User: ${user}`);
}

displayUser();


// Summary
console.log("\nSummary:");

console.log("setTimeout → Runs code once after a delay");
console.log("setInterval → Runs code repeatedly at intervals");
console.log("Callback Hell → Nested callbacks that are hard to manage");
console.log("Promises → Handle asynchronous operations");
console.log("async → Makes a function return a Promise");
console.log("await → Waits for a Promise to resolve");