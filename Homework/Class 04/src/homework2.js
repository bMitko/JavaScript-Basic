console.log("Connected");

let numbers =  [3, 9, 4, 8, "1"];
function sumOfNum(){
    let result = 0;
    for (let i=0; i<numbers.length; i++){
        result = result + numbers[i];
    }
    console.log(result);
}

// BONUS

function validateNumber(){
    for (let i=0; i<numbers.length; i++){
        if (typeof numbers[i] !== "number"){
        console.log("Not a number"); 
        break;
        }   
    }
    if (typeof numbers[0] === "number" && typeof numbers[1] === "number" && typeof numbers[2] === "number" && typeof numbers[3] === "number" && typeof numbers[4] === "number"){
        sumOfNum();
    }
}

validateNumber();
