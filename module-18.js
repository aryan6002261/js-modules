// ===============================
// Module 18/25 - JavaScript Basics
// Topic: Classes & Object-Oriented Programming
// ===============================


// Constructor
console.log("Constructor:");

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const person1 = new Person("John", 25);

person1.introduce();


// Inheritance
console.log("\nInheritance:");

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");

dog.speak();
dog.bark();


// Encapsulation
console.log("\nEncapsulation:");

class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());


// Polymorphism
console.log("\nPolymorphism:");

class Shape {

    draw() {
        console.log("Drawing Shape");
    }
}

class Circle extends Shape {

    draw() {
        console.log("Drawing Circle");
    }
}

class Rectangle extends Shape {

    draw() {
        console.log("Drawing Rectangle");
    }
}

const shapes = [
    new Circle(),
    new Rectangle()
];

for (let shape of shapes) {
    shape.draw();
}


// Summary
console.log("\nSummary:");

console.log("Constructor → Initializes object properties");
console.log("Inheritance → Child class inherits parent class");
console.log("Encapsulation → Protects object data");
console.log("Polymorphism → Same method, different behavior");