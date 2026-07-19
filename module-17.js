// ===============================
// Module 17/25 - JavaScript Basics
// Topic: Exception Handling
// ===============================


// try...catch
console.log("try...catch:");

try {

    let x = y; // y is not defined

} catch (error) {

    console.log(error.message);

}


// try...catch...finally
console.log("\ntry...catch...finally:");

try {

    let num = 10;

    console.log(num);

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Execution completed.");

}


// throw
console.log("\nthrow:");

function checkAge(age) {

    if (age < 18) {
        throw new Error("You must be at least 18 years old.");
    }

    console.log("Access Granted");
}

try {

    checkAge(16);

} catch (error) {

    console.log(error.message);

}


// Different Error Types
console.log("\nDifferent Error Types:");

try {

    console.log(value);

} catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

}


// Summary
console.log("\nSummary:");

console.log("try → Code that may cause an error");
console.log("catch → Handles the error");
console.log("finally → Runs whether an error occurs or not");
console.log("throw → Creates a custom error");
console.log("Error Object → Contains error name and message");