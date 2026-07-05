let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isAdmin: true,
    hobbies: ["reading", "traveling", "coding"],
    score: null,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
console.log(person.isAdmin); // Output: true
console.log(person.hobbies); // Output: [ 'reading', 'traveling', 'coding' ]
console.log(person.hobbies[1]); // Output: traveling
console.log(person.score); // Output: null
person.greet(); // Output: Hello, my name is John Doe.

console.log(person["name"]); // Output: John Doe
console.log(person["age"]); // Output: 30
console.log(person["city"]); // Output: New York
console.log(person["isAdmin"]); // Output: true
console.log(person["hobbies"]); // Output: [ 'reading', 'traveling', 'coding' ]
console.log(person["hobbies"][1]); // Output: traveling
console.log(person["score"]); // Output: null
console.log(person["greet"]()); // Output: Hello, my name is John Doe.

console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York', isAdmin: true, hobbies: [ 'reading', 'traveling', 'coding' ], score: null, greet: [Function: greet] }
delete person.score;
console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York', isAdmin: true, hobbies: [ 'reading', 'traveling', 'coding' ], greet: [Function: greet] }
person.country = "USA";
console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York', isAdmin: true, hobbies: [ 'reading', 'traveling', 'coding' ], greet: [Function: greet], country: 'USA' }

console.log(Object.keys(person)); // Output: [ 'name', 'age', 'city', 'isAdmin', 'hobbies', 'greet', 'country' ]
console.log(Object.values(person)); // Output: [ 'John Doe', 30, 'New York', true, [ 'reading', 'traveling', 'coding' ], [Function: greet], 'USA' ]
console.log(Object.entries(person)); // Output: [ [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'city', 'New York' ], [ 'isAdmin', true ], [ 'hobbies', [Array] ], [ 'greet', [Function: greet] ], [ 'country', 'USA' ] ]

let { name, age, city, isAdmin, hobbies, greet, country } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(city); // Output: New York
console.log(isAdmin); // Output: true
console.log(hobbies); // Output: [ 'reading', 'traveling', 'coding' ]
console.log(greet()); // Output: Hello, my name is John Doe.
console.log(country); // Output: USA

console.log(person.hasOwnProperty("name")); // Output: true
console.log("score" in person); // Output: false

let student = {
    name: "Rahul",
    marks: [80, 90, 75],

    average() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);

        return total / this.marks.length;
    }
};

console.log(student.average()); // Output: 81.66666666666667