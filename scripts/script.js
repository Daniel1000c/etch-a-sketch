//Select screen element
const sketchScreen = document.getElementById('sketch-screen');

//Select reset button element
const resetButton = document.getElementById('reset-grid-btn');

//Select new grid button element
const createGrid = document.getElementById('new-grid-btn');

//Create make grid function
function makeGrid(gridSize) {
    //Create for loop on column generation
    for(let i = 0; i < gridSize; i++) {
        //Create div column
        const column = document.createElement('div');
        //Add column class to div
        column.classList.add("column");
        //Create for loop on row generation
        for(let j = 0; j < gridSize; j++) {
            //Create grid row div
            const row = document.createElement('div');
            //row class to div
            row.classList.add("row");
            //Add border styling to row
            row.style.border = "2px solid black";
            row.innerText = (i * gridSize) + j;
            column.appendChild(row)
        }
        sketchScreen.appendChild(column);
    }
}

//Call make grid function
makeGrid(16);

//Create reset grid function
function resetGrid() {
    //Select all hovered elements
    const hoveredElements = document.querySelectorAll('.hover');

    //Iterate through each hover element and remove hover class
    hoveredElements.forEach(element => {
        element.classList.remove('hover');
    })

    //Reset grid back to 16 x 16
    sketchScreen.innerHTML = '';

    makeGrid(16);
}

//Create newGrid function
function newGrid(newSize){
    //Prompt user for new grid size
    newSize = +prompt('What is the new grid size?');
    
    //Create if statement
    if(newSize > 100) {
        //Create error message
        alert('Grid is too big!!! Cannot Generate grids larger than 100');
    } else {

        //Erase old grid 
        sketchScreen.innerHTML = '';

        //Call make grid function
        makeGrid(newSize);
    }
}

//Create handle hover function
function handleHover(event) {
    if(event.target.classList.contains('row') || event.target.contains('columns')) {
        //Add hover class to div
        event.target.classList.add('hover');
    }
}

//Call event listener
sketchScreen.addEventListener('mouseover', handleHover);
resetButton.addEventListener('click',resetGrid);
createGrid.addEventListener('click', newGrid);



