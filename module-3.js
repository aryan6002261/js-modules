// ===============================
// Module 3/25 - JavaScript Basics
// Topic: Operators
// ===============================

let a = 12;
let b = 5;

console.log("Arithmetic Operators");
console.log("a + b =", a + b);   // 17
console.log("a - b =", a - b);   // 7
console.log("a * b =", a * b);   // 60
console.log("a / b =", a / b);   // 2.4
console.log("a % b =", a % b);   // 2
console.log("a ** b =", a ** b); // 248832

console.log("\nIncrement & Decrement");
console.log("a++ =", a++); // 12
console.log("After a++ =", a); // 13
console.log("++a =", ++a); // 14

console.log("b-- =", b--); // 5
console.log("After b-- =", b); // 4
console.log("--b =", --b); // 3

console.log("\nComparison Operators");
console.log("a == b:", a == b);   // false
console.log("a != b:", a != b);   // true
console.log("a > b:", a > b);     // true
console.log("a < b:", a < b);     // false
console.log("a >= b:", a >= b);   // true
console.log("a <= b:", a <= b);   // false

console.log("\nLogical Operators");
console.log("a > 10 && b < 5:", a > 10 && b < 5); // true
console.log("a > 20 || b < 5:", a > 20 || b < 5); // true
console.log("!(a == b):", !(a == b)); // true

console.log("\nAssignment Operators");
let x = 10;
x += 5;
console.log("x += 5:", x); // 15
x *= 2;
console.log("x *= 2:", x); // 30

console.log("\nTernary Operator");
let larger = a > b ? a : b;
console.log("Larger value:", larger); // 14