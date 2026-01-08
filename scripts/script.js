//Create const for screen size, number of squares for each side
const SCREEN_SIZE = 600;
let squaresPerSide = 16;

//Create screen element
const screen = document.getElementById('sketch-screen');
screen.style.width = screen.style.height = `${SCREEN_SIZE}px`;

//Get reset button and new size button element
const resetBtn = document.getElementById('reset-btn');
const newSize = document.getElementById('new-grid');

//Create grid cell hover function
function handleHover() {
    this.classList.add('hover');
}

//Create clear grid function
const clearGrid = () => screen.innerHTML = '';

//Create make grid function
function makeGrid(){
    //Create number of squares 
    let numOfSquares = (squaresPerSide * squaresPerSide);
    let widthOrHeight = `${(SCREEN_SIZE / squaresPerSide) - 2}px`;

    //Create for loop
    for(let i = 0; i < numOfSquares; i++) {
        //Create grid cell
        const gridCell = document.createElement('div');
        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add('cell');
        
        //Add grid cell to screen
        screen.appendChild(gridCell);

        //Create grid hover event listener
        gridCell.addEventListener('mouseover', handleHover);
    }
}

//Call make grid function
makeGrid();

//Create reset button event listener
resetBtn.addEventListener('click', ()=> {
    //Select all cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('hover'));

    //Create if state if default grid size is not 16 x 16
    if(squaresPerSide !== 16) {
        squaresPerSide = 16;
        screen.innerHTML = '';
        makeGrid();    
    }
})

//Create new grid event listener
newSize.addEventListener('click', ()=> {
    //Prompt user for a grid size
    let sizePrompt = +prompt('Please enter a number between 1-100');

    //Create if statement
    if (!sizePrompt || sizePrompt < 1 || sizePrompt > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    //Set squareperside to sizePrompt
    squaresPerSide = sizePrompt;
    clearGrid();
    makeGrid();
})