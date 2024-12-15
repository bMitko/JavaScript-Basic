console.log("Connected");

let oneToTwenty = [];
let notEven = [];
for (let i=1; i<=20; i++){
    oneToTwenty.push(i);
}

for (let i=0; i<oneToTwenty.length; i++){
    if(oneToTwenty[i] % 2 == 0){
        console.log(oneToTwenty[i] + "\n");
    }
    else
        notEven.push(oneToTwenty[i] + " ");
}
console.log(notEven + " ");