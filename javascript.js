// Sets important constants and variables
const container = document.querySelector('.container');

// Create a function to make Grid

//function createGrid() {

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
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    
    }

//}

// Creates a default grid sized 16x16
function defaultGrid(rowNum, colNum) {
    createRows(16);
    createColumns(16);
}


// call function

defaultGrid();

addEventListener("mouseover", (event) => {});