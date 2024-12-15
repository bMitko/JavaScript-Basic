console.log("Connected");

function tellStory(story){
let storyElements = ["name", "mood", "activity"];
for(let i=0; i<storyElements.length; i++){
    storyElements[i] = prompt(`Enter ${storyElements[i]}!`);
    if(typeof storyElements[i] !== "string"){
        alert("Try again!");
        break;
    }
}
    if(typeof storyElements[0] ==="string" && typeof storyElements[1] === "string" && typeof storyElements[2] === "string"){
    alert(`This is ${storyElements[0]}. ${storyElements[0]} is a nice person. Today they are ${storyElements[1]}. They are ${storyElements[2]} all day. The end.`);
    console.log(`This is ${storyElements[0]}. ${storyElements[0]} is a nice person. Today they are ${storyElements[1]}. They are ${storyElements[2]} all day. The end.`);
}
}
tellStory();