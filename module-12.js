// ===============================
// Module 12/25 - JavaScript Basics
// Topic: Events
// ===============================


// Selecting Elements
console.log("Selecting Elements:");

let button = document.getElementById("btn");
let input = document.getElementById("username");
let form = document.getElementById("myForm");
let box = document.getElementById("box");

console.log(button);
console.log(input);
console.log(form);
console.log(box);


// Click Event
console.log("\nClick Event:");

if (button) {
    button.addEventListener("click", function () {
        console.log("Button Clicked!");
    });
}


// Double Click Event
console.log("\nDouble Click Event:");

if (button) {
    button.addEventListener("dblclick", function () {
        console.log("Button Double Clicked!");
    });
}


// Input Event
console.log("\nInput Event:");

if (input) {
    input.addEventListener("input", function () {
        console.log(input.value);
    });
}


// Change Event
console.log("\nChange Event:");

if (input) {
    input.addEventListener("change", function () {
        console.log("Changed:", input.value);
    });
}


// Submit Event
console.log("\nSubmit Event:");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form Submitted");
    });
}


// Key Events
console.log("\nKey Events:");

if (input) {

    input.addEventListener("keydown", function (event) {
        console.log("Key Down:", event.key);
    });

    input.addEventListener("keyup", function (event) {
        console.log("Key Up:", event.key);
    });

    input.addEventListener("keypress", function (event) {
        console.log("Key Press:", event.key);
    });
}


// Mouse Events
console.log("\nMouse Events:");

if (box) {

    box.addEventListener("mouseenter", function () {
        console.log("Mouse Enter");
    });

    box.addEventListener("mouseleave", function () {
        console.log("Mouse Leave");
    });

    box.addEventListener("mouseover", function () {
        console.log("Mouse Over");
    });

    box.addEventListener("mouseout", function () {
        console.log("Mouse Out");
    });

    box.addEventListener("mousemove", function (event) {
        console.log("Mouse:", event.clientX, event.clientY);
    });
}


// Focus & Blur Events
console.log("\nFocus & Blur:");

if (input) {

    input.addEventListener("focus", function () {
        console.log("Input Focused");
    });

    input.addEventListener("blur", function () {
        console.log("Input Lost Focus");
    });
}


// Event Object
console.log("\nEvent Object:");

if (button) {
    button.addEventListener("click", function (event) {

        console.log(event.type);
        console.log(event.target);
        console.log(event.currentTarget);
    });
}


// Removing Event Listener
console.log("\nRemoving Event Listener:");

function greet() {
    console.log("Hello!");
}

if (button) {

    button.addEventListener("click", greet);

    button.removeEventListener("click", greet);

    console.log("Event Listener Removed");
}


// Summary
console.log("\nSummary:");

console.log("addEventListener() → Attach event");
console.log("removeEventListener() → Remove event");
console.log("click → Mouse click");
console.log("dblclick → Double click");
console.log("input → Detect typing");
console.log("change → Detect value change");
console.log("submit → Form submission");
console.log("keydown → Key pressed");
console.log("keyup → Key released");
console.log("mouseenter / mouseleave → Mouse enters/leaves");
console.log("focus / blur → Input focus events");
console.log("event → Event object");