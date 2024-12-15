console.log("Connected");

function studentList(){
    let fisrtNames = ["Luke", "Anne", "Marco", "Martha", "Noah"];
    let lastNames = ["Martins", "Nower", "Pigo", "Lorens", "Forn"]
    let fullNames = [];
    for(let i=0; i<fisrtNames.length; i++){
        fullNames.push((i+1) + "." + fisrtNames[i] + " " + lastNames[i]);
        console.log(fullNames[i] + "\n");
    }
}

studentList();