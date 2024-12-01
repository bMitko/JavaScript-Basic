console.log("Connected");

// EXERCISE 3/1

let feet = 5;
let meters = 0.3048;
let converted = (feet * meters);

console.log(converted);

// EXERCISE 3/2

let sideA = 5;
let sideB = 4;
let areaR = (sideA * sideB);

console.log(areaR);

// EXERCISE 3/3

let r = 3;
let π = 3.14;   // за π може и да не се декларира и иницијализира 
                // туку да се впише само вредноста бидејки не се менува
let areaC = (π * r ** 2);

console.log(areaC);


// HOMEOWORK 

//начин 1

let phonePrice = 119.95;
let tax = 0.05;
let phone30 = (30* phonePrice);
let taxFor30phones = (phone30 * tax );
let lastPrice = (phone30 - taxFor30phones);

console.log(lastPrice);

// начин 2

// let phonePrice = 119.95;
// let tax = 0.05;
// let taxFor1phone = (phonePrice * tax);
// let lastPrice = (30 * (phonePrice - taxFor1phone));

// console.log (lastPrice);
