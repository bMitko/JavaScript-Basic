console.log("Connected");

let numbersList = document.getElementById("numbersList");
let numbers = [8, 3, 1, 9];
let sumOfNumbers = 0;
let equasion = numbers.join(" + ");

numbersList.innerHTML += `<h4>- Your numbers:</h4>`

function createListItem(itemArray, element){
    let unorderedList = "";
    for(let item of itemArray){
        unorderedList +=  `<li>${item}</li>`
    }
    element.innerHTML += `<ul>${unorderedList}</ul>`
}

createListItem(numbers, numbersList);

for(let i=0; i<numbers.length; i++){
    sumOfNumbers += numbers[i];
}

numbersList.innerHTML += `<h4>- The sum of the numbers above is: ${sumOfNumbers}</h4>`
numbersList.innerHTML += `<h4>-  The mathematical equasion is: (${equasion}) = ${sumOfNumbers}</h4>`

