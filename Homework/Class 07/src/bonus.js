console.log("Connected");

let recipeName = prompt("Enter the name of your recipe:");
let numberOfIngrediants = parseFloat(prompt("How many ingrediants do you need?"));
let ingrediants = [];
let yourRecipe = document.getElementById("yourRecipe");

let heading = document.getElementsByTagName("body")[0];
heading.innerHTML += `<h2>Recipe for ${recipeName}:</h2>`;
heading.innerHTML += `<h4>Ingrediants:</h4>`;

for(let i=1; i<=numberOfIngrediants; i++){
    ingrediants.push(prompt(`Enter ingrediant number ${i}`));
}

console.log(ingrediants);

let table = document.createElement('table');

for (let i=0; i<ingrediants.length; i++){
  let tr = document.createElement(`tr`);

  let td1 = document.createElement(`td`);
  let text1 = document.createTextNode(`${i+1}`);

  let td2 = document.createElement(`td`);
  let text2 = document.createTextNode(`${ingrediants[i]}`);

  td1.appendChild(text1);
  td2.appendChild(text2);
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);

  table.style.border = "1px solid black";
  table.style.width = "15%";
  tr.style.border = "1px solid black";
  tr.style.padding = "10px"

  td1.style.border = "1px solid black";
  td2.style.border = "1px solid black";
}
document.body.appendChild(table);


