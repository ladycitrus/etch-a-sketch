// Sets important constants and variables
const container = document.querySelector('.container');

// add button



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

//}

// Creates a default grid sized 16x16
function defaultGrid(rowNum, colNum) {
    createRows(16);
    createColumns(16);
}


// call function

defaultGrid();

// add mouseover event to 
cell = document.querySelector('.cell');


