// global scope
let globalVar = "I am a global variable";

function myFunction() {
    // function scope
    let functionVar = "I am a function variable";
    console.log(globalVar); // Output: I am a global variable
    console.log(functionVar); // Output: I am a function variable
}

if (true) {
    // block scope
    let blockVar = "I am a block variable";
    var varVar = "I am a function variable declared with var";
    console.log(globalVar); // Output: I am a global variable
    console.log(functionVar); // Output: ReferenceError: functionVar is not defined
    console.log(blockVar); // Output: I am a block variable
    console.log(varVar); // Output: I am a function variable declared with var
}

console.log(globalVar); // Output: I am a global variable
console.log(functionVar); // Output: ReferenceError: functionVar is not defined
console.log(blockVar); // Output: ReferenceError: blockVar is not defined
console.log(varVar); // Output: I am a function variable declared with var

// shadowing
let shadowVar = "I am a global variable";

function shadowFunction() {
    let shadowVar = "I am a function variable";
    console.log(shadowVar); // Output: I am a function variable
}

shadowFunction(); // Output: I am a function variable
console.log(shadowVar); // Output: I am a global variable

// hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am a hoisted variable";
console.log(hoistedVar); // Output: I am a hoisted variable

const hoistedConst;
console.log(hoistedConst); // Output: ReferenceError: Cannot access 'hoistedConst' before initialization
hoistedConst = "I am a hoisted constant";
console.log(hoistedConst); // Output: I am a hoisted constants

// function hoisting
hoistedFunction(); // Output: I am a hoisted function
function hoistedFunction() {
    console.log("I am a hoisted function");
}

hoistedArrowFunction(); // Output: TypeError: hoistedArrowFunction is not a function
const hoistedArrowFunction = () => {
    console.log("I am a hoisted arrow function");
}