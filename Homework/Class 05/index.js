console.log("Connected");

let animal = {
    name: prompt("Enter name of the animal"),
    kind: prompt("Enter kind of the animal"),
    speak: function(sound){
        console.log(`${this.name} - ${this.kind} speaks ${sound}`)
    }
};
animal.speak(prompt(`Enter what sound your animal makes (with words)`));
