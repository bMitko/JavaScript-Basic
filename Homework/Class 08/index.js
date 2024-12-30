console.log("Connected");

// Повлекување вредности од инпути! 

// let rowInput = document.getElementById("rowInput");
// let columnInput = document.getElementById("columnInput");
// let numberOfRows = rowInput.value;
// let numberOfColumns = columnInput.value;

// Повлекување вредност од јаваскрипт!

let numberOfRows = 5;
let numberOfColumns = 4;

const button = document.getElementById("button");

let dyTable = document.getElementById("table");

function dynamicTable(rowParametar, columnParametar){
    let generatedTable = document.createElement('table');

    for(let r=1; r<=rowParametar; r++){
        let rows = document.createElement('tr');

        for(let c=1; c<=columnParametar; c++){
            let columns = document.createElement('td');
            let cellText = document.createElement('span');
            cellText = document.createTextNode(`Row ${[r]}, Column ${[c]}`);

            columns.append(cellText);
            rows.appendChild(columns);
            columns.style.border = "1px solid black";
            columns.style.border = "1px solid black";
        }
        generatedTable.appendChild(rows);
        rows.style.border = "1px solid black";
        rows.style.padding = "10px"
    }
    dyTable.appendChild(generatedTable);

    table.style.alignContent = "center";
}

button.addEventListener("click", function(e){
    e.preventDefault()
    dyTable.innerHTML += `<hr>`;
    dyTable.innerHTML += `<h3>○ Your dynamic table:</h3>`;
    dynamicTable(numberOfRows, numberOfColumns);
    console.log(numberOfRows);
    console.log(numberOfColumns);
})


