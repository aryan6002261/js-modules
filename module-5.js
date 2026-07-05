for (let i=0; i<5; i++) {
    console.log(i);
}
i = 0;
while (true) {
    console.log("This will run forever");
    i++;
    if (i > 10) {
        break;
    }
}

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

let person = {
    name: "Aryan",
    age: 20,
    isStudent: true
}
for (let key of Object.keys(person)) {
    console.log(key + ": " + person[key]);
}
for (let value of Object.values(person)) {
    console.log(value);
}