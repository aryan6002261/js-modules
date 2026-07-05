function add(a,b) {
    console.log(a+b);
}
add(5,10);
add(20,30);

const subtract = (a,b) => console.log(a-b);
subtract(10,5);
subtract(30,20);

function greet(name="Guest") {
    console.log("Hello " + name);
}
greet("Aryan");
greet();