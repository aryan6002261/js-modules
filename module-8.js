let students = ["Alice", "Bob", "Charlie", "David", "Eva"];

console.log(students); // Output: [ 'Alice', 'Bob', 'Charlie', 'David', 'Eva' ]
console.log(students[0]); // Output: Alice
console.log(students.length); // Output: 5
students[2] = "Chuck";
console.log(students); // Output: [ 'Alice', 'Bob', 'Chuck', 'David', 'Eva' ]
console.log(students.indexOf("David")); // Output: 3
console.log(students.includes("Eva")); // Output: true
console.log(students.join(", ")); // Output: Alice, Bob, Chuck, David, Eva

// push-pop
students.push("Frank");
console.log(students); // Output: [ 'Alice', 'Bob', 'Chuck', 'David', 'Eva', 'Frank' ]
students.pop();
console.log(students); // Output: [ 'Alice', 'Bob', 'Chuck', 'David', 'Eva' ]

// shift-unshift
students.shift();
console.log(students); // Output: [ 'Bob', 'Chuck', 'David', 'Eva' ]
students.unshift("Alice");
console.log(students); // Output: [ 'Alice', 'Bob', 'Chuck', 'David', 'Eva' ]

console.log(students.slice(1, 4)); // Output: [ 'Bob', 'Chuck', 'David' ]
console.log(students.splice(2, 1, "Charlie")); // Output: [ 'Chuck' ]
console.log(students); // Output: [ 'Alice', 'Bob', 'Charlie', 'David', 'Eva' ]
console.log(students.sort()); // Output: [ 'Alice', 'Bob', 'Charlie', 'David', 'Eva' ]

for (let student of students) {
    console.log(student);
}

let numbers = [5, 2, 9, 1, 5, 6];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [ 25, 4, 81, 1, 25, 36 ]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [ 2, 6 ]
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 28
let result = numbers.find(num => num > 5);
console.log(result); // Output: 9

numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [ 1, 2, 5, 5, 6, 9 ]
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [ 9, 6, 5, 5, 2, 1 ]
numbers.reverse();
console.log(numbers); // Output: [ 1, 2, 5, 5, 6, 9 ]
Array.isArray(numbers); // Output: true