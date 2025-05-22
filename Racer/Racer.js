// Game variables
let score = 0;
let gameActive = true;
let timeLeft = 120; // 2 minutes in seconds
let playerLane = 1; // 0, 1, 2 (top, middle, bottom)
let vehicles = [];
let isHit = false;
let isRedLight = false;
let trafficLightInterval;
let leaderboard = [];
let lastMove = 0;

// DOM elements
const playerEl = document.getElementById('player');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const leaderboardEl = document.getElementById('leaderboard');
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

// Lane positions (top positions for the player)
const lanePositions = [
    'calc(16.66% - 20px)', // Top lane
    'calc(50% - 20px)',    // Middle lane
    'calc(83.33% - 20px)'  // Bottom lane
];

// Vehicle types and their properties
const vehicleTypes = [
    { type: 'bike-light-green', width: 50, height: 25, class: 'bike' },
    { type: 'bike-red', width: 50, height: 25, class: 'bike' },
    { type: 'car-blue', width: 70, height: 35, class: 'car' },
    { type: 'car-black', width: 70, height: 45, class: 'car' }
];

// Initialize the game
function initGame() {
    // Reset variables
    score = 0;
    gameActive = true;
    timeLeft = 120;
    playerLane = 1;
    vehicles = [];
    isHit = false;
    isRedLight = false;
    lastMove = 0;

    // Update UI
    scoreEl.textContent = score;
    updateTimer();
    
    // Position player in middle lane
    playerEl.style.top = lanePositions[playerLane];
    
    // Start game loops
    startTimer();
    startTrafficLight();
    gameLoop();
}

// Game loop
function gameLoop() {
    if (!gameActive) return;
    
    // Move vehicles
    moveVehicles();
    
    // Check for collisions
    if (!isHit) {
        checkCollisions();
    }
    
    // Check for movement during red light
    if (isRedLight && Date.now() - lastMove < 100) {
        penalizeRedLightMovement();
    }
    
    // Spawn new vehicles occasionally
    if (Math.random() < 0.02 && vehicles.length < 5 && !isRedLight) {
        spawnVehicle();
    }
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Penalize movement during red light
function penalizeRedLightMovement() {
    updateScore(-5);
    setTrafficLight('green');
    isRedLight = false;
}

// Spawn a new vehicle
function spawnVehicle() {
    // Select random vehicle type
    const vehicleTypeIndex = Math.floor(Math.random() * vehicleTypes.length);
    const vehicleType = vehicleTypes[vehicleTypeIndex];
    
    // Select random lane
    const lane = Math.floor(Math.random() * 3);
    
    // Create vehicle element
    const vehicle = document.createElement('div');
    vehicle.className = `vehicle ${vehicleType.class} ${vehicleType.type}`;
    vehicle.style.width = `${vehicleType.width}px`;
    vehicle.style.height = `${vehicleType.height}px`;
    vehicle.style.top = lanePositions[lane];
    vehicle.style.left = 'calc(100% + 50px)'; // Start off-screen
    
    // Add vehicle body
    const vehicleBody = document.createElement('div');
    vehicleBody.className = 'vehicle-body';
    vehicle.appendChild(vehicleBody);
    
    // Add wheels for cars
    if (vehicleType.class === 'car') {
        const wheelFront = document.createElement('div');
        wheelFront.className = 'vehicle-wheel vehicle-wheel-front';
        vehicle.appendChild(wheelFront);
        
        const wheelBack = document.createElement('div');
        wheelBack.className = 'vehicle-wheel vehicle-wheel-back';
        vehicle.appendChild(wheelBack);
        
        const window = document.createElement('div');
        window.classList.add('vehicle-window', 'vehicle-window-front');
        vehicle.appendChild(window);

        const window1 = document.createElement('div');
        window1.classList.add('vehicle-window', 'vehicle-window-back');
        vehicle.appendChild(window1);
    }
    // Add wheels for bikes
    if (vehicleType.class === 'bike') {
        const wheelFront = document.createElement('div');
        wheelFront.className = 'bike-wheel bike-wheel-front';
        vehicle.appendChild(wheelFront);
        
        const wheelBack = document.createElement('div');
        wheelBack.className = 'bike-wheel bike-wheel-back';
        vehicle.appendChild(wheelBack);
    }
    // Add to game container
    document.querySelector('.road').appendChild(vehicle);
    
    // Add to vehicles array
    vehicles.push({
        element: vehicle,
        lane: lane,
        position: window.innerWidth,
        speed: Math.random() * 2 + 2, // Random speed between 2 and 4
        type: vehicleType.type,
        width: vehicleType.width
    });
}

// Move all vehicles
function moveVehicles() {
    if (isRedLight) return; // Don't move vehicles during red light
    
    for (let i = vehicles.length - 1; i >= 0; i--) {
        const vehicle = vehicles[i];
        
        // Move vehicle
        vehicle.position -= vehicle.speed;
        vehicle.element.style.left = `${vehicle.position}px`;
        
        // Remove if off-screen
        if (vehicle.position < -vehicle.width - 100) {
            vehicle.element.remove();
            vehicles.splice(i, 1);
        }
    }
}

// Check for collisions
function checkCollisions() {
    if (isHit) return;
    
    const playerRect = playerEl.getBoundingClientRect();
    
    for (const vehicle of vehicles) {
        const vehicleRect = vehicle.element.getBoundingClientRect();
        
        if (
            playerRect.right > vehicleRect.left &&
            playerRect.left < vehicleRect.right &&
            playerRect.bottom > vehicleRect.top &&
            playerRect.top < vehicleRect.bottom
        ) {
            // Collision detected
            handleCollision();
            break;
        }
    }
}

// Handle collision
function handleCollision() {
    isHit = true;
    
    // Apply visual effect
    playerEl.classList.add('blink');
    
    // Deduct points
    updateScore(-5);
    
    // Reset after cooldown
    setTimeout(() => {
        playerEl.classList.remove('blink');
        isHit = false;
    }, 5000);
}

// Update score
function updateScore(points) {
    score = Math.max(0, score + points);
    scoreEl.textContent = score;
}

// Start timer
function startTimer() {
    const timerInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(timerInterval);
            return;
        }
        
        timeLeft--;
        updateTimer();
        
        // Add points every 10 seconds
        if (timeLeft % 10 === 0 && timeLeft > 0) {
            updateScore(10);
        }
        
        if (timeLeft <= 0) {
            endGame();
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Update timer display
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Start traffic light cycle
function startTrafficLight() {
    // Start with green
    setTrafficLight('green');
    
    trafficLightInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(trafficLightInterval);
            return;
        }
        
        // Cycle through lights
        if (greenLight.classList.contains('active')) {
            setTrafficLight('yellow');
        } else if (yellowLight.classList.contains('active')) {
            setTrafficLight('red');
            isRedLight = true;
        } else if (redLight.classList.contains('active')) {
            setTrafficLight('green');
            isRedLight = false;
        }
    }, 10000); // Change every 10 seconds
}

// Set traffic light color
function setTrafficLight(color) {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
    
    if (color === 'red') {
        redLight.classList.add('active');
    } else if (color === 'yellow') {
        yellowLight.classList.add('active');
    } else if (color === 'green') {
        greenLight.classList.add('active');
    }
}

// End the game
function endGame() {
    gameActive = false;
    
    // Add score to leaderboard
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a); // Sort descending
    updateLeaderboard();
    
    // Show game complete alert
    setTimeout(() => {
        if (confirm(`Congratulations! Game complete 🎉\nYour score: ${score}\nWant to replay the game?`)) {
            resetGame();
        }
    }, 500);
}

// Reset the game
function resetGame() {
    // Clear vehicles
    vehicles.forEach(vehicle => vehicle.element.remove());
    vehicles = [];
    
    // Reset player
    playerEl.classList.remove('blink');
    
    // Initialize game again
    initGame();
}

// Update leaderboard display
function updateLeaderboard() {
    leaderboardEl.innerHTML = '';
    
    leaderboard.slice(0, 10).forEach((score, index) => {
        const entry = document.createElement('div');
        entry.className = 'leaderboard-entry';
        
        const rank = document.createElement('span');
        rank.className = 'leaderboard-rank';
        rank.textContent = `#${index + 1}`;
        
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'leaderboard-score';
        scoreSpan.textContent = score;
        
        entry.appendChild(rank);
        entry.appendChild(scoreSpan);
        leaderboardEl.appendChild(entry);
    });
}

// Listen for key presses
document.addEventListener('keydown', e => {
    if (!gameActive) return;
    
    if (e.key === 'ArrowUp' || e.key === 'w') {
        // Move up
        lastMove = Date.now();
        playerLane = Math.max(0, playerLane - 1);
        playerEl.style.top = lanePositions[playerLane];
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        // Move down
        lastMove = Date.now();
        playerLane = Math.min(2, playerLane + 1);
        playerEl.style.top = lanePositions[playerLane];
    } else if (e.key === 'q') {
        // Quit game
        endGame();
    }
});

// Initialize game when the page loads
window.addEventListener('load', initGame);