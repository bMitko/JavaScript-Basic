console.log("Connected");


function type(something) {
    let seetype = typeof (something);
    return seetype;
}

console.log(type(null));
console.log(type(true));
console.log(type(10));
console.log(type("Hello"));
console.log(type());