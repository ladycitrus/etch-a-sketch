// Sets important constants and variables
const container = document.querySelector('.container');

// Create a function to make Grid

//function createGrid() {

    // create rows function
    function createRows(rowNum) {
        for (r = 0; r < 16; r++) {
            const row = document.createElement('div');
            row.innerText = r + 1;
            container.appendChild(row);
        }
    }

    
    // create columns

    function createColumns(colNum) {
        
    
    }

//}

// Creates a default grid sized 16x16
function defaultGrid(rowNum, colNum) {
    createRows(16);
    createColumns(16);
}


// call function

createRows(16);