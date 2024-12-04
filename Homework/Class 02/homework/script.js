console.log("Connected");

let input = prompt("Enter year to calculate chineese zodiac sign");
let year = parseInt(input);
let result = (year - 4) % 12

if (result == 0){
    console.log("Rat");
    alert("Rat");
}
else if (result == 1){
    console.log("Ox");
    alert("Ox");
}
else if (result == 2){
    console.log("Tiger");
    alert("Tiger");
}
else if (result == 3){
    console.log("Rabbit");
    alert("Rabbit");
}
else if (result == 4){
    console.log("Dragon");
    alert("Dragon");
}
else if (result == 5){
    console.log("Snake");
    alert("Snake");
}
else if (result == 6){
    console.log("Horse");
    alert("Horse");
}
else if (result == 7){
    console.log("Goat");
    alert("Goat");
}
else if (result == 8){
    console.log("Monkey");
    alert("Monkey");
}
else if (result == 9){
    console.log("Rooster");
    alert("Rooster");
}
else if (result == 10){
    console.log("Dog");
    alert("Dog");
}
else if (result == 11){
    console.log("Pig");
    alert("Pig");
}
else {
    console.log(null);
}
