console.log("Connected");

let accMoney = 5000;
let input = prompt(`You have ${accMoney} on your card. Insert the ammount you want to withdraw:`);
let reqMoney = parseInt(input);
let newAccBalance = accMoney - reqMoney;

function accBalance(reqMoney) {

    if (reqMoney <= 0) {
        return "Try again and enter valid ammount.";
    }
    else if (reqMoney > accMoney) {
        return "Not enough money!";
    }
    else if (reqMoney > 0 && reqMoney <= accMoney) {
        return `The ammount withdraw is ${reqMoney} , and you new account balance is ${newAccBalance}.`;
    }
    else
        return "Error!";
}


console.log(accBalance(reqMoney));