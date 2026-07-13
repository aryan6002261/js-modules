// ===============================
// Module 11/20 - JavaScript Basics
// Topic: DOM Manipulation
// ===============================


// Selecting Elements
console.log("Selecting Elements:");

let title = document.getElementById("title");
let items = document.getElementsByClassName("item");
let paragraphs = document.getElementsByTagName("p");
let firstItem = document.querySelector(".item");
let allItems = document.querySelectorAll(".item");

console.log(title);
console.log(items);
console.log(paragraphs);
console.log(firstItem);
console.log(allItems);


// Changing Text Content
console.log("\nChanging Text:");

title.textContent = "Hello JavaScript";
console.log(title.textContent);

title.innerHTML = "<span>Hello JavaScript</span>";
console.log(title.innerHTML);


// Styling Elements
console.log("\nChanging Styles:");

title.style.color = "blue";
title.style.backgroundColor = "yellow";
title.style.fontSize = "24px";
title.style.padding = "10px";
title.style.border = "2px solid black";
title.style.borderRadius = "5px";
title.style.textAlign = "center";

console.log(title.style);


// Working with Attributes
console.log("\nAttributes:");

let photo = document.getElementById("photo");

photo.src = "new-image.jpg";
photo.alt = "New Image";

photo.setAttribute("title", "Profile Image");

console.log(photo.getAttribute("title"));

photo.removeAttribute("alt");

console.log(photo);


// Creating Elements
console.log("\nCreating Elements:");

let newItem = document.createElement("li");

newItem.textContent = "Item 4";
newItem.className = "item";

console.log(newItem);


// Appending Elements
console.log("\nAppending Elements:");

let list = document.getElementById("list");

list.appendChild(newItem);

console.log(list);


// Removing Elements
console.log("\nRemoving Elements:");

let firstListItem = document.querySelector(".item");

firstListItem.remove();

let firstParagraph = document.querySelector("p");

if (firstParagraph) {
    firstParagraph.remove();
}

console.log(list);


// Replacing Elements
console.log("\nReplacing Elements:");

let replacement = document.createElement("li");

replacement.textContent = "New Item";

if (list.firstElementChild) {
    list.replaceChild(replacement, list.firstElementChild);
}

console.log(list);


// DOM Navigation
console.log("\nDOM Navigation:");

console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
console.log(list.parentElement);
console.log(list.nextElementSibling);
console.log(list.previousElementSibling);


// Class Manipulation
console.log("\nClass Manipulation:");

let element = document.querySelector(".item");

if (element) {

    element.classList.add("highlight");

    console.log(element.className);

    element.classList.remove("highlight");

    element.classList.toggle("active");

    console.log(element.classList.contains("active"));

    element.classList.replace("active", "selected");

    console.log(element.className);

    console.log(element.classList.item(0));
    console.log(element.classList.length);
    console.log(element.classList.value);
}


// Getting & Setting Values
console.log("\nInput Values:");

let input = document.getElementById("username");

if (input) {

    input.value = "John Doe";

    console.log(input.value);
}


// Document Information
console.log("\nDocument Information:");

console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.body);
console.log(document.head);


// Summary
console.log("\nSummary:");

console.log("getElementById() → Select by ID");
console.log("getElementsByClassName() → HTMLCollection");
console.log("getElementsByTagName() → HTMLCollection");
console.log("querySelector() → First matching element");
console.log("querySelectorAll() → NodeList");
console.log("createElement() → Create new element");
console.log("appendChild() → Add element");
console.log("remove() → Delete element");
console.log("replaceChild() → Replace element");
console.log("classList → Manage CSS classes");