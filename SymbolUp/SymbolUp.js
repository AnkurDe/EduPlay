
let chosen = null;

const elements = [
    {number: 1, symbol: "H", name: "Hydrogen", group: "nonmetal", position: [1, 1]},
    {number: 2, symbol: "He", name: "Helium", group: "noble-gas", position: [18, 1]},
    {number: 3, symbol: "Li", name: "Lithium", group: "alkali-metal", position: [1, 2]},
    {number: 4, symbol: "Be", name: "Beryllium", group: "alkali-metal", position: [2, 2]},
    {number: 5, symbol: "B", name: "Boron", group: "metalloid", position: [13, 2]},
    {number: 6, symbol: "C", name: "Carbon", group: "nonmetal", position: [14, 2]},
    {number: 7, symbol: "N", name: "Nitrogen", group: "nonmetal", position: [15, 2]},
    {number: 8, symbol: "O", name: "Oxygen", group: "nonmetal", position: [16, 2]},
    {number: 9, symbol: "F", name: "Fluorine", group: "halogen", position: [17, 2]},
    {number: 10, symbol: "Ne", name: "Neon", group: "noble-gas", position: [18, 2]},
    {number: 11, symbol: "Na", name: "Sodium", group: "alkali-metal", position: [1, 3]},
    {number: 12, symbol: "Mg", name: "Magnesium", group: "alkali-metal", position: [2, 3]},
    {number: 13, symbol: "Al", name: "Aluminum", group: "metal", position: [13, 3]},
    {number: 14, symbol: "Si", name: "Silicon", group: "metalloid", position: [14, 3]},
    {number: 15, symbol: "P", name: "Phosphorus", group: "nonmetal", position: [15, 3]},
    {number: 16, symbol: "S", name: "Sulfur", group: "nonmetal", position: [16, 3]},
    {number: 17, symbol: "Cl", name: "Chlorine", group: "halogen", position: [17, 3]},
    {number: 18, symbol: "Ar", name: "Argon", group: "noble-gas", position: [18, 3]},
    {number: 19, symbol: "K", name: "Potassium", group: "alkali-metal", position: [1, 4]},
    {number: 20, symbol: "Ca", name: "Calcium", group: "alkali-metal", position: [2, 4]},
    {number: 21, symbol: "Sc", name: "Scandium", group: "metal", position: [3, 4]},
    {number: 22, symbol: "Ti", name: "Titanium", group: "metal", position: [4, 4]},
    {number: 23, symbol: "V", name: "Vanadium", group: "metal", position: [5, 4]},
    {number: 24, symbol: "Cr", name: "Chromium", group: "metal", position: [6, 4]},
    {number: 25, symbol: "Mn", name: "Manganese", group: "metal", position: [7, 4]},
    {number: 26, symbol: "Fe", name: "Iron", group: "metal", position: [8, 4]},
    {number: 27, symbol: "Co", name: "Cobalt", group: "metal", position: [9, 4]},
    {number: 28, symbol: "Ni", name: "Nickel", group: "metal", position: [10, 4]},
    {number: 29, symbol: "Cu", name: "Copper", group: "metal", position: [11, 4]},
    {number: 30, symbol: "Zn", name: "Zinc", group: "metal", position: [12, 4]},
    {number: 31, symbol: "Ga", name: "Gallium", group: "metal", position: [13, 4]},
    {number: 32, symbol: "Ge", name: "Germanium", group: "metalloid", position: [14, 4]},
    {number: 33, symbol: "As", name: "Arsenic", group: "metalloid", position: [15, 4]},
    {number: 34, symbol: "Se", name: "Selenium", group: "nonmetal", position: [16, 4]},
    {number: 35, symbol: "Br", name: "Bromine", group: "halogen", position: [17, 4]},
    {number: 36, symbol: "Kr", name: "Krypton", group: "noble-gas", position: [18, 4]},
    {number: 37, symbol: "Rb", name: "Rubidium", group: "alkali-metal", position: [1, 5]},
    {number: 38, symbol: "Sr", name: "Strontium", group: "alkali-metal", position: [2, 5]},
    {number: 39, symbol: "Y", name: "Yttrium", group: "metal", position: [3, 5]},
    {number: 40, symbol: "Zr", name: "Zirconium", group: "metal", position: [4, 5]},
    {number: 41, symbol: "Nb", name: "Niobium", group: "metal", position: [5, 5]},
    {number: 42, symbol: "Mo", name: "Molybdenum", group: "metal", position: [6, 5]},
    {number: 43, symbol: "Tc", name: "Technetium", group: "metal", position: [7, 5]},
    {number: 44, symbol: "Ru", name: "Ruthenium", group: "metal", position: [8, 5]},
    {number: 45, symbol: "Rh", name: "Rhodium", group: "metal", position: [9, 5]},
    {number: 46, symbol: "Pd", name: "Palladium", group: "metal", position: [10, 5]},
    {number: 47, symbol: "Ag", name: "Silver", group: "metal", position: [11, 5]},
    {number: 48, symbol: "Cd", name: "Cadmium", group: "metal", position: [12, 5]},
    {number: 49, symbol: "In", name: "Indium", group: "metal", position: [13, 5]},
    {number: 50, symbol: "Sn", name: "Tin", group: "metal", position: [14, 5]},
    {number: 51, symbol: "Sb", name: "Antimony", group: "metalloid", position: [15, 5]},
    {number: 52, symbol: "Te", name: "Tellurium", group: "metalloid", position: [16, 5]},
    {number: 53, symbol: "I", name: "Iodine", group: "halogen", position: [17, 5]},
    {number: 54, symbol: "Xe", name: "Xenon", group: "noble-gas", position: [18, 5]},
    {number: 55, symbol: "Cs", name: "Cesium", group: "alkali-metal", position: [1, 6]},
    {number: 56, symbol: "Ba", name: "Barium", group: "alkali-metal", position: [2, 6]},
    {number: 57, symbol: "La", name: "Lanthanum", group: "lanthanide", position: [3, 6]},
    {number: 57, symbol: "La", name: "Lanthanum", group: "lanthanide", position: [3, 9]},
    {number: 72, symbol: "Hf", name: "Hafnium", group: "metal", position: [4, 6]},
    {number: 73, symbol: "Ta", name: "Tantalum", group: "metal", position: [5, 6]},
    {number: 74, symbol: "W", name: "Tungsten", group: "metal", position: [6, 6]},
    {number: 75, symbol: "Re", name: "Rhenium", group: "metal", position: [7, 6]},
    {number: 76, symbol: "Os", name: "Osmium", group: "metal", position: [8, 6]},
    {number: 77, symbol: "Ir", name: "Iridium", group: "metal", position: [9, 6]},
    {number: 78, symbol: "Pt", name: "Platinum", group: "metal", position: [10, 6]},
    {number: 79, symbol: "Au", name: "Gold", group: "metal", position: [11, 6]},
    {number: 80, symbol: "Hg", name: "Mercury", group: "metal", position: [12, 6]},
    {number: 81, symbol: "Tl", name: "Thallium", group: "metal", position: [13, 6]},
    {number: 82, symbol: "Pb", name: "Lead", group: "metal", position: [14, 6]},
    {number: 83, symbol: "Bi", name: "Bismuth", group: "metal", position: [15, 6]},
    {number: 84, symbol: "Po", name: "Polonium", group: "metalloid", position: [16, 6]},
    {number: 85, symbol: "At", name: "Astatine", group: "halogen", position: [17, 6]},
    {number: 86, symbol: "Rn", name: "Radon", group: "noble-gas", position: [18, 6]},
    {number: 87, symbol: "Fr", name: "Francium", group: "alkali-metal", position: [1, 7]},
    {number: 88, symbol: "Ra", name: "Radium", group: "alkali-metal", position: [2, 7]},
    {number: 89, symbol: "Ac", name: "Actinium", group: "actinide", position: [3, 7]},
    {number: 89, symbol: "Ac", name: "Actinium", group: "actinide", position: [3, 10]},
    {number: 104, symbol: "Rf", name: "Rutherfordium", group: "metal", position: [4, 7]},
    {number: 105, symbol: "Db", name: "Dubnium", group: "metal", position: [5, 7]},
    {number: 106, symbol: "Sg", name: "Seaborgium", group: "metal", position: [6, 7]},
    {number: 107, symbol: "Bh", name: "Bohrium", group: "metal", position: [7, 7]},
    {number: 108, symbol: "Hs", name: "Hassium", group: "metal", position: [8, 7]},
    {number: 109, symbol: "Mt", name: "Meitnerium", group: "metal", position: [9, 7]},
    {number: 110, symbol: "Ds", name: "Darmstadtium", group: "metal", position: [10, 7]},
    {number: 111, symbol: "Rg", name: "Roentgenium", group: "metal", position: [11, 7]},
    {number: 112, symbol: "Cn", name: "Copernicium", group: "metal", position: [12, 7]},
    {number: 113, symbol: "Nh", name: "Nihonium", group: "metal", position: [13, 7]},
    {number: 114, symbol: "Fl", name: "Flerovium", group: "metal", position: [14, 7]},
    {number: 115, symbol: "Mc", name: "Moscovium", group: "metal", position: [15, 7]},
    {number: 116, symbol: "Lv", name: "Livermorium", group: "metal", position: [16, 7]},
    {number: 117, symbol: "Ts", name: "Tennessine", group: "halogen", position: [17, 7]},
    {number: 118, symbol: "Og", name: "Oganesson", group: "noble-gas", position: [18, 7]},
    {number: 58, symbol: "Ce", name: "Cerium", group: "lanthanide", position: [4, 9]},
    {number: 59, symbol: "Pr", name: "Praseodymium", group: "lanthanide", position: [5, 9]},
    {number: 60, symbol: "Nd", name: "Neodymium", group: "lanthanide", position: [6, 9]},
    {number: 61, symbol: "Pm", name: "Promethium", group: "lanthanide", position: [7, 9]},
    {number: 62, symbol: "Sm", name: "Samarium", group: "lanthanide", position: [8, 9]},
    {number: 63, symbol: "Eu", name: "Europium", group: "lanthanide", position: [9, 9]},
    {number: 64, symbol: "Gd", name: "Gadolinium", group: "lanthanide", position: [10, 9]},
    {number: 65, symbol: "Tb", name: "Terbium", group: "lanthanide", position: [11, 9]},
    {number: 66, symbol: "Dy", name: "Dysprosium", group: "lanthanide", position: [12, 9]},
    {number: 67, symbol: "Ho", name: "Holmium", group: "lanthanide", position: [13, 9]},
    {number: 68, symbol: "Er", name: "Erbium", group: "lanthanide", position: [14, 9]},
    {number: 69, symbol: "Tm", name: "Thulium", group: "lanthanide", position: [15, 9]},
    {number: 70, symbol: "Yb", name: "Ytterbium", group: "lanthanide", position: [16, 9]},
    {number: 71, symbol: "Lu", name: "Lutetium", group: "lanthanide", position: [17, 9]},
    {number: 90, symbol: "Th", name: "Thorium", group: "actinide", position: [4, 10]},
    {number: 91, symbol: "Pa", name: "Protactinium", group: "actinide", position: [5, 10]},
    {number: 92, symbol: "U", name: "Uranium", group: "actinide", position: [6, 10]},
    {number: 93, symbol: "Np", name: "Neptunium", group: "actinide", position: [7, 10]},
    {number: 94, symbol: "Pu", name: "Plutonium", group: "actinide", position: [8, 10]},
    {number: 95, symbol: "Am", name: "Americium", group: "actinide", position: [9, 10]},
    {number: 96, symbol: "Cm", name: "Curium", group: "actinide", position: [10, 10]},
    {number: 97, symbol: "Bk", name: "Berkelium", group: "actinide", position: [11, 10]},
    {number: 98, symbol: "Cf", name: "Californium", group: "actinide", position: [12, 10]},
    {number: 99, symbol: "Es", name: "Einsteinium", group: "actinide", position: [13, 10]},
    {number: 100, symbol: "Fm", name: "Fermium", group: "actinide", position: [14, 10]},
    {number: 101, symbol: "Md", name: "Mendelevium", group: "actinide", position: [15, 10]},
    {number: 102, symbol: "No", name: "Nobelium", group: "actinide", position: [16, 10]},
    {number: 103, symbol: "Lr", name: "Lawrencium", group: "actinide", position: [17, 10]}
];


const questions = [
    // Hard
    {question: "Which element has the atomic number 8?", answer: "O"},
    {question: "Which element is named after the creator of the periodic table?", answer: "Md"},
    {question: "Which element's symbol comes from its Latin name 'Natrium'?", answer: "Na"},
    {question: "Which element is a halogen and is used in disinfectants and bleach?", answer: "Cl"},
    {question: "Which element is a noble gas and is used in neon signs?", answer: "Ne"},
    // Medium
    {question: "What is the symbol for Iron?", answer: "Fe"},
    {question: "Which element is used in pencils (as 'lead')?", answer: "C"},
    {question: "Which element is essential for respiration in humans?", answer: "O"},
    {question: "What is the symbol for Potassium?", answer: "K"},
    {question: "Which element is liquid at room temperature and is toxic?", answer: "Hg"},
    {question: "Which element is used in balloons because it is lighter than air?", answer: "He"},
    {question: "Which element is used to disinfect water and swimming pools?", answer: "Cl"}
];


function createPeriodicTable() {
    // Get the predefined elements and their positions
    const table = document.getElementById("periodic-table");
    const grid = new Array(10).fill().map(() => new Array(18).fill(null));

    // Fill the grid with elements
    elements.forEach(el => {
        const [x, y] = el.position;
        grid[y - 1][x - 1] = el;
    });

    // Create rows
    for (const row of grid) {
        const periodDiv = document.createElement("div");
        periodDiv.classList.add("period");

        // Create elements in each row
        for (const element of row) {
            const div = document.createElement("div");

            if (element) {
                div.classList.add("element", element.group);
                div.innerHTML = `<div style="font-size: 14px;">${element.number}</div><div style="font-size: 26px;">${element.symbol}</div>`;
                // div.innerHTML = `<small>${element.number}</small><br><strong>${element.symbol}</strong>`;
                div.title = element.name;
                div.id = element.symbol; // Set the element's ID to its symbol

                div.addEventListener('click', function () {
                    chosen = this.id; // Store the ID of the clicked element
                    console.log("Chosen element: " + chosen); // Optional: Log the chosen element
                    document.getElementById("chosenValue").textContent = chosen;
                });
            } else {
                div.classList.add("spacer");
            }

            periodDiv.appendChild(div);
        }

        table.appendChild(periodDiv);
    }
}

function startQuestionnare() {
    let questionCount = 0;
    let correctAnswers = 0;
    document.querySelector(".questionSlide button").remove();
    let questionDiv = document.createElement("div");
    questionDiv.id = "questionDiv";

    // Create a check button
    let checkButton = document.createElement('button');
    checkButton.textContent = "Check";
    checkButton.classList.add("check");
    checkButton.id = "checkButton";

    function popupMessage(title, message) {
        let popup = document.createElement("div");
        popup.id = "resultsPopup";
        popup.innerHTML = `
                    <div class="popup-content">
                        <h2>${title}</h2>
                        <p>${message}</p>
                        <button id="closePopup">Close</button>
                    </div>
                `;
        document.body.appendChild(popup);
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.remove();
        });
    }

    // Function to show a popup with results
    function showResultsPopup() {
        let popup = document.createElement("div");
        popup.id = "resultsPopup";
        popup.innerHTML = `
                    <div class="popup-content">
                        <h2>Quiz Complete!</h2>
                        <p>Out of the questions you did, you answered ${correctAnswers} questions correctly.</p>
                        <button id="closePopup">Close</button>
                    </div>
                `;
        document.body.appendChild(popup);

        // Add event listener to close button
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.remove();
        });
    }

    // Add an event listener to the check button
    checkButton.addEventListener('click', function () {
        if (questionCount < questions.length) {
            if (chosen === questions[questionCount].answer) {
                correctAnswers++;
                let c = document.createElement("div");
                c.id = "popup";
                c.innerHTML = `<h2>Correct! ${chosen} is the answer.</h2>`;
                document.body.appendChild(c);
            } else {
                popupMessage("Wrong!", "The correct answer is " + questions[questionCount].answer);
                // let c = document.createElement("div");
                // c.id = "popup";
                // c.innerText = `"Wrong! The correct answer is " + questions[questionCount].answer`;
                // document.body.appendChild(c);
            }
            questionCount++; // Increment questionCount after checking the answer

            // Display the next question
            if (questionCount < questions.length) {
                questionDiv.innerHTML = `<h2>${questions[questionCount].question}</h2>`;
            } else {
                showResultsPopup();
                questionDiv.innerHTML = ""; // Clear the question
                checkButton.remove(); // Remove the check button
            }
        } else {
            showResultsPopup();
            questionDiv.innerHTML = ""; // Clear the question
            checkButton.remove(); // Remove the check button
        }
    });

    document.getElementById("periodic-table").appendChild(questionDiv); // Append the question div
    document.getElementById("periodic-table").appendChild(checkButton); // Append the check button

    // Display the first question
    questionDiv.innerHTML = `<h2>${questions[questionCount].question}</h2>`;
}

function getElementName(symbol) {
    const element = elements.find(el => el.symbol === symbol);
    return element ? element.name : symbol;
}

createPeriodicTable();