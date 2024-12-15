console.log("Connected");


function MinMaxSum(){
    let array = [8, 1, 4, "text", 30, 10, true];
    let numbersOnly = [];
    let min = numbersOnly[0];
    let max = numbersOnly[0];
    for (let i=0; i<array.length; i++){
        if (typeof array[i] === "number"){
            numbersOnly.push(array[i]);
        }
    }
    console.log(`First array is [${array}]`);
    console.log(`Filtered array is [${numbersOnly}]`);
    for (let i=1; i<numbersOnly.length; i++){
        if (min < numbersOnly[i]){
        }
        else
        min = numbersOnly[i];
    }
    console.log(`Min is ${min}`);
    for (let i=1; i<numbersOnly.length; i++){
        if (max > numbersOnly[i]){
        }
        else
        max = numbersOnly[i];
    }
    console.log(`Max is ${max}`);
    let sum = min + max;
    console.log(`Sum of min and max is ${sum}`);
}
MinMaxSum();