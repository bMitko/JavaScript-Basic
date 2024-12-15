console.log("Connected");

let strings = ["Let's", "play", "some", 3, "games",];
function bigString(){
    let fullString = "";
    for(let i=0; i<strings.length; i++){
        if(typeof strings[i] === "string"){
            fullString += (strings[i] + " ");
        }
    }
    console.log(fullString + "!");
}

bigString();