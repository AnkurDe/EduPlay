// set the size of the crossword grid
const gridSize = 13;

// array containing all crossword answers and clues

const crosswordData = [ //cuntom set of array values for the crossword
    { row: 0, col: 0, answer: 'E', clue: '1'},// first cell with clue number 1
    { row: 0, col: 1, answer: 'L' , clue: '6' },// next cell in the first row
    { row: 0, col: 2, answer: 'E' },
    { row: 0, col: 3, answer: 'P' , clue: '2'},// start of another word clue 2

    { row: 0, col: 4, answer: 'H' },
    { row: 0, col: 5, answer: 'A' },
    { row: 0, col: 6, answer: 'N' },
    { row: 0, col: 7, answer: 'T' },


    { row: 0, col: 3, answer: 'P' },
    { row: 1, col: 3, answer: 'E' },
    { row: 2, col: 3, answer: 'A' },
    { row: 3, col: 3, answer: 'C' , clue: '3'},
    { row: 4, col: 3, answer: 'O' },
    { row: 5, col: 3, answer: 'C' },
    { row: 6, col: 3, answer: 'K' },

    { row: 3, col: 3, answer: 'C' },
    { row: 3, col: 4, answer: 'A' },
    { row: 3, col: 5, answer: 'T' , clue: '4'},

    { row: 3, col: 5, answer: 'T' },
    { row: 4, col: 5, answer: 'I' },
    { row: 5, col: 5, answer: 'G' },
    { row: 6, col: 5, answer: 'E' },
    { row: 7, col: 5, answer: 'R' , clue: '5'},


    { row: 7, col: 5, answer: 'R' },
    { row: 7, col: 6, answer: 'A' },
    { row: 7, col: 7, answer: 'B' , clue: '10'},
    { row: 7, col: 8, answer: 'B' },
    { row: 7, col: 9, answer: 'I' },
    { row: 7, col: 10, answer: 'T' },


    { row: 0, col: 1, answer: 'L' },
    { row: 1, col: 1, answer: 'I' },
    { row: 2, col: 1, answer: 'O' },
    { row: 3, col: 1, answer: 'N' },


    { row: 2, col: 9, answer: 'P' , clue: '7' },
    { row: 3, col: 9, answer: 'E' },
    { row: 4, col: 9, answer: 'N' },
    { row: 5, col: 9, answer: 'G' },
    { row: 6, col: 9, answer: 'U' },
    { row: 7, col: 9, answer: 'I' },
    { row: 8, col: 9, answer: 'N' },

    { row: 5, col: 7, answer: 'D' , clue: '8'},
    { row: 5, col: 8, answer: 'O' },
    { row: 5, col: 9, answer: 'G' },

    { row: 3, col: 8, answer: 'Z' , clue: '9' },
    { row: 3, col: 9, answer: 'E' },
    { row: 3, col: 10, answer: 'B' },
    { row: 3, col: 11, answer: 'R' },
    { row: 3, col: 12, answer: 'A' },

    { row: 7, col: 7, answer: 'B' },
    { row: 8, col: 7, answer: 'E' },
    { row: 9, col: 7, answer: 'A' },
    { row: 10, col: 7, answer: 'R' },

    { row: 10, col: 6, answer: 'F' , clue: '11'},
    { row: 10, col: 7, answer: 'R' },
    { row: 10, col: 8, answer: 'O' , clue: '12'},
    { row: 10, col: 9, answer: 'G' },

    { row: 10, col: 8, answer: 'O' },
    { row: 11, col: 8, answer: 'W' },
    { row: 12, col: 8, answer: 'L' },

    { row: 12, col: 4, answer: 'C' , clue: '13' },
    { row: 12, col: 5, answer: 'A' },
    { row: 12, col: 6, answer: 'M' },
    { row: 12, col: 7, answer: 'E' },
    { row: 12, col: 8, answer: 'L' },
    
    { row: 1, col: 12, answer: 'S' , clue: '14' },
    { row: 2, col: 12, answer: 'N' },
    { row: 3, col: 12, answer: 'A' },
    { row: 4, col: 12, answer: 'K' },
    { row: 5, col: 12, answer: 'E' },
];

 //displays a congratulations overlay when the crossword is solved

function showCongratulations() {
    // creating overlay object and making a div element then assigning an id to it and creating html div for it to add text in the msg
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'congrats-overlay';
    overlay.innerHTML = `
        <div class="congrats-message">
            🎉 Congratulations! 🎉<br>
            You solved the crossword!
        </div>`;
    // Add overlay to the document
    //when crossword is solved completely it assigns the id and appends the msg to the page
    
    document.body.appendChild(overlay);
}

//   checks the users answers in the crossword grid
//  highlights correct and incorrect answers
//  Shows congratulations if all answers are correct
 
function checkAnswers() {
    //select all input elements in the crossword grid
    const inputs = document.querySelectorAll('#crossword_grid input');
    let allCorrect = true;
    inputs.forEach(input => {
        // iterates over each input element using an arrow function
        if (!input.disabled) { // only check enabled cells
            const userAns = input.value.toUpperCase(); // users answer(uppercase)
            const corrAns = input.dataset.answer; // correct answer
            if (userAns === corrAns) {
                input.style.backgroundColor = '#b2f2bb'; // Green for correct
            } else if (userAns !== '') {
                input.style.backgroundColor = '#ffa8a8'; // Red for incorrect
                allCorrect = false; // Mark as not all correct
            } else {
                input.style.backgroundColor = ''; // Reset if empty
                allCorrect = false;
            }
        }
        //input is taken and selected, iteration through each element is done and each letter is checked with user input with  the condition that the input is disables and user input value is converted to uppercase
        //is userinput ans correct answer are same then background of cell will change to green
        //if call is not empty and user input is wrong it will be changed to red and if its empty it will be reset
    });
    // if all answers are correct show congratulations
    if (allCorrect) {
        showCongratulations();
    }
}

 //creates the crossword grid dynamically in the DOM

function createCrossGrid() {
        // get the grid container

    const grid = document.getElementById('crossword_grid');
    grid.innerHTML = '';
    // loop through each row and column

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
                        // Create a container for each cell
            const cellContainer = document.createElement('div');
            cellContainer.className = 'cell-container';
            // Create the input for the cell

            const input = document.createElement('input');
            input.className = 'grid-cell';
            input.maxLength = 1;
            input.dataset.row = row; // defining index value for each input element
            input.dataset.col = col;

            // Find if this cell should have an answer
            const cellData = crosswordData.find(item => item.row === row && item.col === col);
            // checking if there is any answer value defined for the cell
            // .find searches for the first element matching the condition
            if (!cellData) {
                // If no answer disable the cell
                input.disabled = true;
            } else {
                // Set the correct answer as a data attribute
                input.dataset.answer = cellData.answer;

                // If this cell has a clue add the clue number
                if (cellData.clue) {
                    const clue = document.createElement('span');
                    clue.className = 'clue';
                    clue.textContent = cellData.clue;
                    cellContainer.appendChild(clue);
                }

                // Add keyboard navigation for arrow keys
                input.addEventListener('keydown', (e) => {
                    //e is the event
                    let nextRow = row;
                    let nextCol = col;

                    if (e.key === 'ArrowUp') nextRow--;
                    else if (e.key === 'ArrowDown') nextRow++;
                    else if (e.key === 'ArrowLeft') nextCol--;
                    else if (e.key === 'ArrowRight') nextCol++;
                    else return;

                    e.preventDefault();
                    // predefined fnc to prevent scrolling while pressing arrow key
                    // Focus the next input if it exists and is not disabled
                    const nextInput = document.querySelector( // to find one hlp element on the page
                        `input[data-row='${nextRow}'][data-col='${nextCol}']` //css selector for the element we want
                    // `` is for template literals
                    //${nextRow} is a placeholder that gets replaced by the value of nextRow its replaced by current value of nextRow
                    // used to move hte cursor to the next cell
                    );

                    if (nextInput && !nextInput.disabled) nextInput.focus(); // to focus on the next cell
                    // if that input box exists and is not disabled it puts the cursor there
 });
            }

           // Add the input to the cell container
            cellContainer.appendChild(input);
            // Add the cell container to the grid
            grid.appendChild(cellContainer);
        }
    }
}

// When the window loads create the crossword grid
window.onload = () => {
    createCrossGrid();
};
// ${gridSize} is for embedding the string value
// Update the styling to accommodate the new structure
// box-sizing: border-box; includes padding and border inside the width

const style = document.createElement('style');
style.textContent = `
    #crossword_grid {
        display: grid;
        grid-template-columns: repeat(${gridSize}, 60px);
        gap: 2px;
        margin: 5px;
        margin-top: 90px;

    }
    
    .cell-container {
        position: relative;
        width: 60px;
        height: 60px;
    }
    
    .grid-cell {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
        padding: 0;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    
    .clue {
        position: absolute;
        font-size: 20px;
        top: -12px;
        left: 2px;
        z-index: 1;
        background:#7adf21;
        color:white;
        border-radius:50%;
        width:30px;
        height:30px;
        text-align:center;
    }
    
    .grid-cell:disabled {
        background-color:rgb(170, 165, 165);
        border: 10px solid #999;
    }
`;
document.head.appendChild(style);

// Object mapping clue numbers to image paths
const clueImages = {  // storing key value pairs like dictionary

    1: 'images/elephant.png',
    2: 'images/peacock1.jpeg',
    3: 'images/cat.jpg',
    4: 'images/tiger.png',
    5: 'images/rabbit.jpeg',
    6: 'images/lion.png',
    7: 'images/penguin.png',
    8: 'images/dog.jpg',
    9: 'images/zebra.png',
    10: 'images/bear.jpg',
    11: 'images/frog.jpeg',
    12: 'images/owl.jpeg',
    13: 'images/camel.jpeg',
    14: 'images/snake.jpeg',

};
// Object mapping clue numbers to their direction (across/down)

const clueTypes = {
    1: 'across',
    2: 'down',
    3: 'across',
    4: 'down',
    5: 'across',
    6: 'down',
    7: 'down',
    8: 'across',
    9: 'across',
    10: 'down',
    11: 'across',
    12: 'down',
    13: 'across',
    14: 'down',
    

};
 //Loads and displays the clues (with images) in the across and down sections

function loadClues() {
        // Get the containers for across and down clues
    const acrossGrid = document.getElementById('across_clues');
    const downGrid = document.getElementById('down_clues');
    // makes sure container is empty before adding clues

    acrossGrid.innerHTML = '';
    downGrid.innerHTML = '';
    // Filter crosswordData for items with clues

    const clues = crosswordData.filter(item => item.clue);

   clues.forEach(item => {
        const clueNumber = item.clue; //going through each item to see which item has a clue
        const clueType = clueTypes[clueNumber]; // 'across' or 'down' by checking the clue number

        // Create a container for the clue
        const container = document.createElement('div');
        container.className = 'clue-box';

        // Add the clue number
        const number = document.createElement('div');
        number.className = 'clue-number';
        number.textContent = clueNumber;

        // Add the clue image
        const img = document.createElement('img');
        img.className = 'clue-image';
        img.src = clueImages[clueNumber] || ''; //empty string if no img found
        img.alt = `Clue ${clueNumber}`; // to add alternative text if clue img doesnt load

        container.appendChild(number);
        container.appendChild(img);

        // Add the clue to the correct section
        if (clueType === 'across') {
            acrossGrid.appendChild(container);
        } else if (clueType === 'down') {
            downGrid.appendChild(container);
        }
    });
}
// Initialize the crossword and clues
createCrossGrid();
loadClues();

