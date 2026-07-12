// ===============================
// Module 9/20 - JavaScript Basics
// Topic: Objects
// ===============================


// Object Declaration
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isAdmin: true,
    hobbies: ["Reading", "Traveling", "Coding"],
    score: null,

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log("Original Object:");
console.log(person);


// Accessing Object Properties
console.log("\nAccessing Properties:");

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[1]);


// Bracket Notation
console.log("\nBracket Notation:");

console.log(person["name"]);
console.log(person["city"]);
console.log(person["isAdmin"]);


// Calling Object Method
console.log("\nObject Method:");

person.greet();


// Updating Properties
console.log("\nUpdating Properties:");

person.age = 31;
person.city = "Los Angeles";

console.log(person);


// Adding New Properties
console.log("\nAdding Properties:");

person.country = "USA";
person.email = "john@example.com";

console.log(person);


// Deleting Properties
console.log("\nDeleting Properties:");

delete person.score;

console.log(person);


// Checking Property Existence
console.log("\nProperty Check:");

console.log("name" in person);
console.log("score" in person);
console.log(person.hasOwnProperty("country"));


// Object Keys, Values & Entries
console.log("\nObject Methods:");

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// Loop Through Object
console.log("\nLoop Through Object:");

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// Object Destructuring
console.log("\nObject Destructuring:");

let {
    name,
    age,
    city,
    hobbies,
    country
} = person;

console.log(name);
console.log(age);
console.log(city);
console.log(hobbies);
console.log(country);


// Nested Object Example
let employee = {
    id: 101,
    name: "Alice",

    address: {
        city: "London",
        zip: "E1 6AN"
    }
};

console.log("\nNested Object:");

console.log(employee);
console.log(employee.address.city);
console.log(employee.address.zip);


// Object with Methods
let student = {
    name: "Rahul",
    marks: [80, 90, 75],

    average() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }
};

console.log("\nObject Method Example:");

console.log(student.name);
console.log(student.average());


// Copying Objects
console.log("\nCopying Objects:");

let copiedPerson = { ...person };

console.log(copiedPerson);


// Merging Objects
console.log("\nMerging Objects:");

let extraInfo = {
    profession: "Developer",
    experience: 5
};

let mergedObject = {
    ...person,
    ...extraInfo
};

console.log(mergedObject);


// Freeze Object
console.log("\nObject.freeze():");

let settings = {
    theme: "Dark"
};

Object.freeze(settings);

settings.theme = "Light";

console.log(settings);


// Seal Object
console.log("\nObject.seal():");

let user = {
    username: "admin",
    active: true
};

Object.seal(user);

user.active = false;       // Allowed
user.role = "Manager";     // Not Allowed
delete user.username;      // Not Allowed

console.log(user);


// Convert Object to JSON
console.log("\nJSON Conversion:");

let jsonData = JSON.stringify(person);

console.log(jsonData);


// Convert JSON to Object
console.log("\nParse JSON:");

let newObject = JSON.parse(jsonData);

console.log(newObject);