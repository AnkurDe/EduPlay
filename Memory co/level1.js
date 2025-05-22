const gridSize = 12;
const crosswordData = [
    { row: 0, col: 0, answer: 'G', clue: '1'},
    { row: 0, col: 1, answer: 'U' },
    { row: 0, col: 2, answer: 'L' },
    { row: 0, col: 3, answer: 'A' },
    { row: 0, col: 4, answer: 'B' },
    { row: 0, col: 5, answer: 'J', clue: '2' },
    { row: 0, col: 6, answer: 'A' },
    { row: 0, col: 7, answer: 'M' },
    { row: 0, col: 8, answer: 'U' },
    { row: 0, col: 9, answer: 'N' },

    { row: 0, col: 5, answer: 'J' },
    { row: 1, col: 5, answer: 'A' },
    { row: 2, col: 5, answer: 'L' },
    { row: 3, col: 5, answer: 'E' },
    { row: 4, col: 5, answer: 'B' , clue: '6' },
    { row: 5, col: 5, answer: 'I' },

    { row: 5, col: 2, answer: 'I' , clue: '3'},
    { row: 5, col: 3, answer: 'D' , clue: '4'},
    { row: 5, col: 4, answer: 'L' },
    { row: 5, col: 5, answer: 'I' },

    { row: 5, col: 3, answer: 'D' },
    { row: 6, col: 3, answer: 'O' },
    { row: 7, col: 3, answer: 'S' , clue: '5' },
    { row: 8, col: 3, answer: 'A' },

    { row: 7, col: 3, answer: 'S' },
    { row: 7, col: 4, answer: 'A' },
    { row: 7, col: 5, answer: 'M' },
    { row: 7, col: 6, answer: 'O' },
    { row: 7, col: 7, answer: 'S' },
    { row: 7, col: 8, answer: 'A' },

    { row: 4, col: 5, answer: 'B' },
    { row: 4, col: 6, answer: 'I' },
    { row: 4, col: 7, answer: 'R' },
    { row: 4, col: 8, answer: 'Y' },
    { row: 4, col: 9, answer: 'A' },
    { row: 4, col: 10, answer: 'N' },
    { row: 4, col: 11, answer: 'I' },

    { row: 2, col: 1, answer: 'D' , clue: '7' },
    { row: 2, col: 2, answer: 'H' },
    { row: 2, col: 3, answer: 'O' },
    { row: 2, col: 4, answer: 'K' },
    { row: 2, col: 5, answer: 'L' },
    { row: 2, col: 6, answer: 'A' },

    { row: 6, col: 6, answer: 'P' , clue: '8'},
    { row: 7, col: 6, answer: 'O' },
    { row: 8, col: 6, answer: 'H' },
    { row: 9, col: 6, answer: 'A' },

    { row: 9, col: 5, answer: 'R' , clue: '9' },
    { row: 9, col: 6, answer: 'A' },
    { row: 9, col: 7, answer: 'J' },
    { row: 9, col: 8, answer: 'M' },
    { row: 9, col: 9, answer: 'A' },

    { row: 8, col: 9, answer: 'V' , clue: '10'},
    { row: 9, col: 9, answer: 'A' },
    { row: 10, col: 9, answer: 'D' },
    { row: 11, col: 9, answer: 'A' },
    
];

function checkAnswers() {
    const inputs = document.querySelectorAll('#crossword_grid input');
    inputs.forEach(input => {
        if (!input.disabled) {
            const userAns = input.value.toUpperCase();
            const corrAns = input.dataset.answer;
            if (userAns === corrAns) {
                input.style.backgroundColor = '#b2f2bb'; // green for correct
            } else if (userAns !== '') {
                input.style.backgroundColor = '#ffa8a8'; // red for incorrect
            } else {
                input.style.backgroundColor = ''; // reset if empty
            }
        }
    });
}

// function checkAnswers() {
//     // Group crosswordData by clue number
//     const clues = crosswordData.filter(item => item.clue).map(item => item.clue);

//     // Use a Set to avoid duplicate clues
//     const uniqueClues = [...new Set(clues)];

//     uniqueClues.forEach(clueNum => {
//         // Get all cells for this word
//         const wordCells = crosswordData.filter(item => item.clue == clueNum)
//             .map(item => {
//                 // Find the corresponding input element
//                 return document.querySelector(
//                     `#crossword_grid input[data-clue='${clueNum}'][data-answer='${item.answer}'][style='']`
//                 ) ||
//                 document.querySelector(
//                     `#crossword_grid input[data-clue='${clueNum}'][data-answer='${item.answer}']`
//                 );
//             })
//             .filter(Boolean);

//         // If no cells found, skip
//         if (wordCells.length === 0) return;

//         // Check if all letters are correct
//         const allCorrect = wordCells.every(input => input.value.toUpperCase() === input.dataset.answer);

//         // Set color for all cells in the word
//         wordCells.forEach(input => {
//             if (input.value === '') {
//                 input.style.backgroundColor = '';
//             } else if (allCorrect) {
//                 input.style.backgroundColor = '#b2f2bb'; // green
//             } else {
//                 input.style.backgroundColor = '#ffa8a8'; // red
//             }
//         });
//     });
// }

function createCrossGrid() {
    const grid = document.getElementById('crossword_grid');
    grid.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cellContainer = document.createElement('div');
            cellContainer.className = 'cell-container';

            const input = document.createElement('input');
            input.className = 'grid-cell';
            input.maxLength = 1;
            input.dataset.row = row;
            input.dataset.col = col;

            const cellData = crosswordData.find(item => item.row === row && item.col === col);

            if (!cellData) {
                input.disabled = true;
            } else {
                input.dataset.answer = cellData.answer;

                if (cellData.clue) {
                    const clue = document.createElement('span');
                    clue.className = 'clue';
                    clue.textContent = cellData.clue;
                    cellContainer.appendChild(clue);
                }

                input.addEventListener('keydown', (e) => {
                    let nextRow = row;
                    let nextCol = col;

                    if (e.key === 'ArrowUp') nextRow--;
                    else if (e.key === 'ArrowDown') nextRow++;
                    else if (e.key === 'ArrowLeft') nextCol--;
                    else if (e.key === 'ArrowRight') nextCol++;
                    else return;

                    e.preventDefault();

                    const nextInput = document.querySelector(
                        `input[data-row='${nextRow}'][data-col='${nextCol}']`
                    );

                    if (nextInput && !nextInput.disabled) nextInput.focus();
                });
            }

            cellContainer.appendChild(input);
            grid.appendChild(cellContainer);
        }
    }
}

window.onload = () => {
    createCrossGrid();
};

// function createCrossGrid() {
    
//     const grid = document.getElementById('crossword_grid');
//     grid.innerHTML = '';

//     for (let row = 0; row < gridSize; row++) {
//         for (let col = 0; col < gridSize; col++) {
//             // Create a cell container div
//             const cellContainer = document.createElement('div');
//             cellContainer.className = 'cell-container';
            
//             const input = document.createElement('input');
//             input.setAttribute('maxlength', 1);
//             input.className = 'grid-cell';
            
//             // Find if there's an answer for this cell
//             const cellData = crosswordData.find(item => item.row === row && item.col === col);
            
//             if (!cellData) {
//                 input.disabled = true;
//                 input.style.backgroundColor = '#ddd';
//             } else {
//                 input.dataset.answer = cellData.answer;
//                 if (cellData.clue) {
//                     input.dataset.clue = cellData.clue;
//                     const clueSpan = document.createElement('span');
//                     clueSpan.className = 'clue';
//                     clueSpan.textContent = cellData.clue;
//                     cellContainer.appendChild(clueSpan);
//                 }
//             }
            
//             cellContainer.appendChild(input);
//             grid.appendChild(cellContainer);
//         }
//     }
// }

// function loadClues() {
//     const clueList = document.getElementById('clue_list');
//     clueList.innerHTML = '';

//     // Get only the items with clues
//     const clues = crosswordData.filter(item => item.clue);
    
//     clues.forEach(clueData => {
//         const clueItem = document.createElement('div');
//         clueItem.className = 'clue-item';
//         clueItem.innerHTML = `${clueData.clue} - ${clueData.row + 1},${clueData.col + 1}`;
//         clueList.appendChild(clueItem);
//     });
// }

// function checkAnswers() {
//     const inputs = document.querySelectorAll('#crossword_grid input');
//     inputs.forEach(input => {
//         if (!input.disabled) {
//             const userAns = input.value.toUpperCase();
//             const corrAns = input.dataset.answer;
            
//             if (userAns === corrAns) {
//                 input.style.backgroundColor = '#b2f2bb';
//             } else if (userAns !== '') {
//                 input.style.backgroundColor = '#ffa8a8';
//             }
//         }
//     });
// }

// Update the styling to accommodate the new structure
const style = document.createElement('style');
style.textContent = `
    #crossword_grid {
        display: grid;
        grid-template-columns: repeat(${gridSize}, 60px);
        gap: 2px;
        margin: 20px;
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
        background:#f56969;
        color:white;
        border-radius:50%;
        width:30px;
        height:30px;
        text-align:center;
    }
    
    .grid-cell:disabled {
        background-color: #ddd;
        border: 1px solid #999;
    }
`;
document.head.appendChild(style);

const clueImages = {
    1: 'images/GulabJamuns.png',
    2: 'images/Jalebi.png',
    3: 'images/idli1.jpg',
    4: 'images/dosa1.jpg',
    5: 'images/Samosa.png',
    6: 'images/Biryani.png',
    7: 'images/Dhokla.png',
    8: 'images/poha.jpeg',
    9: 'images/Rajma.png',
    10: 'images/vada.jpeg',
};

const clueTypes = {
    1: 'across',
    2: 'across',
    3: 'across',
    4: 'down',
    5: 'across',
    6: 'across',
    7: 'across',
    8: 'down',
    9: 'across',
    10: 'down',
};

// function loadClues() {
//     const acrossGrid = document.getElementById('across_clues');
//     const downGrid = document.getElementById('down_clues');
//     acrossGrid.innerHTML = '';
//     downGrid.innerHTML = '';

//     const clues = crosswordData.filter(item => item.clue);

//     clues.forEach(item => {
//         const clueNumber = item.clue;
//         const clueType = clueTypes[clueNumber]; // 'across' or 'down'
//         const container = document.createElement('div');
//         container.className = 'clue-box';

//         const number = document.createElement('div');
//         number.className = 'clue-number';
//         number.textContent = clueNumber;

//         const img = document.createElement('img');
//         img.className = 'clue-image';
//         img.src = clueImages[clueNumber] || '';
//         img.alt = `Clue ${clueNumber}`;

//         container.appendChild(number);
//         container.appendChild(img);

//         if (clueType === 'across') {
//             acrossGrid.appendChild(container);
//         } else if (clueType === 'down') {
//             downGrid.appendChild(container);
//         }
//     });
// }

function loadClues() {
    const acrossGrid = document.getElementById('across_clues');
    const downGrid = document.getElementById('down_clues');

    acrossGrid.innerHTML = '';
    downGrid.innerHTML = '';

    const clues = crosswordData.filter(item => item.clue);

    clues.forEach(item => {
        const clueNumber = item.clue;
        const clueType = clueTypes[clueNumber]; // 'across' or 'down'

        const container = document.createElement('div');
        container.className = 'clue-box';

        const number = document.createElement('div');
        number.className = 'clue-number';
        number.textContent = clueNumber;

        const img = document.createElement('img');
        img.className = 'clue-image';
        img.src = clueImages[clueNumber] || '';
        img.alt = `Clue ${clueNumber}`;

        container.appendChild(number);
        container.appendChild(img);

        if (clueType === 'across') {
            acrossGrid.appendChild(container);
        } else if (clueType === 'down') {
            downGrid.appendChild(container);
        }
    });
}


// Initialize the crossword
createCrossGrid();
loadClues();

