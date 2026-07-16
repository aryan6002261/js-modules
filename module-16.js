// ===============================
// Module 16/20 - JavaScript Basics
// Topic: Fetch API
// ===============================


// Fetch API
console.log("Fetch API:");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
    });


// Fetch Single User
console.log("\nFetch Single User:");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
        console.log(user);
    });


// Fetch API with async/await
console.log("\nFetch using async/await:");

async function getUsers() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }
}

getUsers();


// Fetch POST Request
console.log("\nPOST Request:");

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API",
        userId: 1
    })

})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });


// Summary
console.log("\nSummary:");

console.log("fetch() → Sends HTTP requests");
console.log(".then() → Handles successful response");
console.log(".catch() → Handles errors");
console.log("response.json() → Converts response to JavaScript object");
console.log("async/await → Cleaner way to work with Fetch API");
console.log("POST Request → Sends data to the server");