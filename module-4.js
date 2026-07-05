let a = 100;
let b = 200;

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

let falseValues = [
    false,
    0,
    -0,
    0n,
    "",
    null,
    undefined,
    NaN
]

let trueValues = [
    true,
    1,
    -1,
    1n,
    "0",
    "false",
    [],
    {},
    function() {}
]