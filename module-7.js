let sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.length); // Output: 44
console.log(sentence.toUpperCase()); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(sentence.toLowerCase()); // Output: the quick brown fox jumps over the lazy dog.
console.log(sentence.includes("fox")); // Output: true
console.log(sentence.startsWith("The")); // Output: true
console.log(sentence.endsWith("dog.")); // Output: true
console.log(sentence.indexOf("jumps")); // Output: 20
console.log(sentence.replace("lazy", "active")); // Output: The quick brown fox jumps over the active dog.
console.log(sentence.split(" ")); // Output: [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]
console.log(sentence.trim()); // Output: The quick brown fox jumps over the lazy dog.
console.log(sentence[0]); // Output: T
console.log(sentence.charAt(10)); // Output: b
console.log(sentence.charCodeAt(10)); // Output: 98
console.log(sentence.slice(4, 9)); // Output: quick
console.log(sentence.substring(4, 9)); // Output: quick
console.log(sentence.repeat(2)); // Output: The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.

let name = "John Doe";
let age = 30;
let city = "New York";

console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`); 
// Output: My name is John Doe, I am 30 years old, and I live in New York.