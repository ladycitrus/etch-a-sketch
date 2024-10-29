// Sets important constants and variables
const container = document.querySelector('.container');
const btn = document.querySelector('button');
let rowNum;

// add button text
btn.innerText = "Change Grid";




// create rows function
function createRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement('div');
        row.classList.add('row');
        // count number of rows
    
        createColumns(row, rowNum);
        container.appendChild(row);
        
    }
}

    
// create columns

function createColumns(row, colNum) {
    for (c = 0; c < colNum; c++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "yellow";
        });
        
    }

        
    
    }

// Creates a default grid sized 16x16
function createGrid(rowNum) {
    container.innerHTML = '';
    createRows(rowNum);

 
}

// make default grid
createGrid(16);


// add change grid function 
function changeGrid(rowNum) {
    rowNum = prompt("Enter new grid size. Max 100.");
    while  (rowNum > 100 && rowNum < 0) {
        rowNum = prompt("Please enter a valid number ");
    }
    console.log(rowNum);
    createGrid(rowNum);
}








