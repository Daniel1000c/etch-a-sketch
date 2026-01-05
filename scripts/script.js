 //Select screen element
const sketchScreen = document.getElementById('sketch-screen');

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

//Create handle hover function
function handleHover(event) {
    if(event.target.classList.contains('row') || event.target.contains('columns')) {
        //Add hover class to div
        event.target.classList.add('hover');
    }
}

//Call event listener
sketchScreen.addEventListener('mouseover', handleHover);


