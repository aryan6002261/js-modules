// ===============================
// Module 21/25 - JavaScript Basics
// Topic: Browser Storage
// ===============================


// localStorage
console.log("localStorage:");

localStorage.setItem("username", "John");

const username = localStorage.getItem("username");

console.log(username);

localStorage.removeItem("username");

console.log("localStorage → Stores data permanently until it is manually removed.");


// sessionStorage
console.log("\nsessionStorage:");

sessionStorage.setItem("theme", "dark");

const theme = sessionStorage.getItem("theme");

console.log(theme);

sessionStorage.removeItem("theme");

console.log("sessionStorage → Stores data only for the current browser tab/session.");


// Cookies
console.log("\nCookies:");

document.cookie = "language=JavaScript; max-age=3600; path=/";

console.log(document.cookie);

console.log("Cookies → Small pieces of data stored by the browser and sent with HTTP requests.");


// Comparing Browser Storage
console.log("\nStorage Comparison:");

localStorage.setItem("city", "London");
sessionStorage.setItem("mode", "light");
document.cookie = "country=UK; path=/";

console.log("localStorage:", localStorage.getItem("city"));
console.log("sessionStorage:", sessionStorage.getItem("mode"));
console.log("Cookies:", document.cookie);

localStorage.removeItem("city");
sessionStorage.removeItem("mode");

console.log("Comparison → localStorage persists, sessionStorage lasts per tab, cookies are included in HTTP requests.");


// Clearing Storage
console.log("\nClearing Storage:");

localStorage.setItem("temp", "123");
sessionStorage.setItem("temp", "456");

localStorage.clear();
sessionStorage.clear();

console.log("localStorage:", localStorage.length);
console.log("sessionStorage:", sessionStorage.length);

console.log("clear() → Removes all data from the selected storage.");


// Summary
console.log("\nSummary:");

console.log("localStorage → Persistent storage with no expiration");
console.log("sessionStorage → Data exists only while the browser tab is open");
console.log("Cookies → Small data stored by the browser and sent with every relevant HTTP request");
console.log("removeItem() → Deletes a specific key");
console.log("clear() → Removes all stored data");