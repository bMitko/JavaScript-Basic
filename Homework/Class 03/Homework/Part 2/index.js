console.log("Conneted");

function ageConverter1(age) {
    let HumanToDog = age * 7;
    return HumanToDog;
}

function ageConverter2(age) {
    let DogToHuman = age / 7;
    return DogToHuman;
}


console.log(ageConverter1(5));
console.log(ageConverter2(7));


// НАЧИН 2 

function ageConv(human, dog) {
    let hToDog = human * 7;
    let dToHuman = dog / 7;
    return `If the human has ${human} year/s, the dog has ${hToDog}. And if the dog has ${dog} year/s, the human has only ${dToHuman}`;
}

console.log(ageConv(5, 7));


// НАЧИН 3

let pickConv = prompt("Type 'HumanToDog' or 'DogToHuman' to choose your conversion");
let age = prompt("Age to convert:");
let convertedAge = parseInt(age);

function converter(age) {
    if (pickConv === "HumanToDog") {
        if (Number.isNaN(convertedAge)) {
            return "Please enter valid number!";
        }
        else
            convertedAge = age * 7;
        return `The dog has ${convertedAge} years.`
    }
    else if (pickConv === "DogToHuman") {
        if (Number.isNaN(convertedAge)) {
            return "Please enter valid number!";
        }
        else
            convertedAge = age / 7;
        return `The human has ${convertedAge} years.`
    }
    else
        return "Error!";
}

console.log(converter(age));
