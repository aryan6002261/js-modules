// ===============================
// Module 8/20 - JavaScript Basics
// Topic: Arrays
// ===============================


// Array Declaration
let students = ["Alice", "Bob", "Charlie", "David", "Eva"];

console.log("Original Array:");
console.log(students);


// Accessing Array Elements
console.log("\nAccessing Elements:");
console.log(students[0]);
console.log(students.length);


// Updating Array Elements
students[2] = "Chuck";

console.log("\nUpdating Elements:");
console.log(students);


// Searching in Array
console.log("\nSearching in Array:");
console.log(students.indexOf("David"));
console.log(students.includes("Eva"));


// Convert Array to String
console.log("\nJoin Array:");
console.log(students.join(", "));


// Push & Pop
console.log("\nPush & Pop:");

students.push("Frank");
console.log(students);

students.pop();
console.log(students);


// Shift & Unshift
console.log("\nShift & Unshift:");

students.shift();
console.log(students);

students.unshift("Alice");
console.log(students);


// Slice
console.log("\nSlice:");
console.log(students.slice(1, 4));


// Splice
console.log("\nSplice:");
console.log(students.splice(2, 1, "Charlie"));
console.log(students);


// Sort
console.log("\nSort:");
console.log(students.sort());


// Loop Through Array
console.log("\nLoop Through Array:");

for (let student of students) {
    console.log(student);
}


// Higher-Order Array Methods
let numbers = [5, 2, 9, 1, 5, 6];

console.log("\nOriginal Numbers:");
console.log(numbers);


// Map
console.log("\nMap:");
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);


// Filter
console.log("\nFilter:");
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Reduce
console.log("\nReduce:");
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);


// Find
console.log("\nFind:");
let result = numbers.find(num => num > 5);
console.log(result);


// Number Sorting
console.log("\nAscending Sort:");
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log("\nDescending Sort:");
numbers.sort((a, b) => b - a);
console.log(numbers);


// Reverse Array
console.log("\nReverse Array:");
numbers.reverse();
console.log(numbers);


// Check if Variable is an Array
console.log("\nArray Check:");
console.log(Array.isArray(numbers));