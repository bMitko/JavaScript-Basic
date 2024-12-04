console.log("Connected")

let input = prompt("How much money do you have?");
let numberInput = parseInt(input);

if (numberInput >= 0 && numberInput <= 100) {
        console.log("Save some money and come back later");
        alert("Save some money and come back later");
    }
    else if(numberInput >= 101 && numberInput <= 500){
        console.log("Call a friend and go to your favorite coffee bar");
        alert("Call a friend and go to your favorite coffee bar");
    }
    else if(numberInput >= 501 && numberInput <= 1000){
        console.log("Buy Christmas candy box");
        alert("Buy Christmas candy box");
    }
    else if(numberInput >= 1001 && numberInput <= 5000){
        console.log("Buy bluetooth headphones");
        alert("Buy bluetooth headphones");
    }
    else if(numberInput > 5000){
        console.log("I think you don't need my help for this amount");
        alert("I think you don't need my help for this amount");
    }
    else if(numberInput < 0){
        console.log("Negative number are not accepted. Try again");
        alert("Negative number are not accepted. Try again");
    }
    else {
        console.log(null);
    }