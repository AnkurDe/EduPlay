document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.card');
    
    // Setup for each card
    cards.forEach(card => {
        const cardInner = card.querySelector('.card-inner');
        const progress = card.querySelector('.progress');
        const frontFace = card.querySelector('.card-face-front');
        const middleFace = card.querySelector('.card-face-middle');
        const backFace = card.querySelector('.card-face-back');
        
        let isHovering = false;
        let currentFace = 0; // 0: front, 1: middle, 2: back
        let animationTimeout;
        let progressResetTimeout;
        
        // Add transition properties to all faces for smoother visibility changes
        [frontFace, middleFace, backFace].forEach(face => {
            if (face) {
                face.style.transition = 'opacity 0.3s ease-in-out';
            }
        });
        
        // Ensure card-inner has proper transition
        cardInner.style.transition = 'transform 0.5s ease-in-out';
        
        // Function to reset progress bar animation
        const resetProgress = () => {
            progress.style.transition = 'none';
            progress.style.width = '0';
            
            // Force reflow
            void progress.offsetWidth;
            
            // Re-enable transition
            progress.style.transition = 'width 3s linear';
        };
        
        // Function to update face visibility
        const updateFaceVisibility = (newFace) => {
            // Set appropriate visibility based on current face
            if (newFace === 0) {
                // Front face
                frontFace.style.opacity = '1';
                frontFace.style.pointerEvents = 'auto';
                middleFace.style.opacity = '0';
                middleFace.style.pointerEvents = 'none';
                backFace.style.opacity = '0';
                backFace.style.pointerEvents = 'none';
            } else if (newFace === 1) {
                // Middle face
                frontFace.style.opacity = '0';
                frontFace.style.pointerEvents = 'none';
                middleFace.style.opacity = '1';
                middleFace.style.pointerEvents = 'auto';
                backFace.style.opacity = '0';
                backFace.style.pointerEvents = 'none';
            } else {
                // Back face
                frontFace.style.opacity = '0';
                frontFace.style.pointerEvents = 'none';
                middleFace.style.opacity = '0';
                middleFace.style.pointerEvents = 'none';
                backFace.style.opacity = '1';
                backFace.style.pointerEvents = 'auto';
            }
        };
        
        // Function to flip to next face
        const flipToNextFace = () => {
            if (!isHovering) return;
            
            // Move to next face
            currentFace = (currentFace + 1) % 3;
            
            // Reset and restart progress bar
            resetProgress();
            
            // Start filling progress bar again
            setTimeout(() => {
                if (isHovering) {
                    progress.style.width = '100%';
                }
            }, 50);
            
            // Apply appropriate transformation based on current face
            if (currentFace === 0) {
                // Front face
                cardInner.style.transform = 'rotateY(0deg)';
            } else {
                // Middle or back face (both at 180 degrees)
                cardInner.style.transform = 'rotateY(180deg)';
            }
            
            // Update face visibility after a short delay to sync with the rotation
            setTimeout(() => {
                if (isHovering) {
                    updateFaceVisibility(currentFace);
                }
            }, 250); // Half of the transition time
            
            // Schedule next flip
            if (isHovering) {
                animationTimeout = setTimeout(flipToNextFace, 3000);
            }
        };
        
        // Mouse enter event
        card.addEventListener('mouseenter', () => {
            isHovering = true;
            
            // Clear any existing timeouts
            clearTimeout(animationTimeout);
            clearTimeout(progressResetTimeout);
            
            // Make sure we start with front face visible
            currentFace = 0;
            cardInner.style.transform = 'rotateY(0deg)';
            updateFaceVisibility(currentFace);
            
            // Start progress bar animation
            resetProgress();
            setTimeout(() => {
                if (isHovering) {
                    progress.style.width = '100%';
                }
            }, 50);
            
            // Schedule first flip
            animationTimeout = setTimeout(flipToNextFace, 3000);
        });
        
        // Mouse leave event
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            
            // Clear any existing timeouts
            clearTimeout(animationTimeout);
            clearTimeout(progressResetTimeout);
            
            // Reset progress bar
            resetProgress();
            
            // Return to first face (front) with smooth transition
            currentFace = 0;
            cardInner.style.transform = 'rotateY(0deg)';
            
            // Update visibility after a short delay
            setTimeout(() => {
                if (!isHovering) {
                    updateFaceVisibility(currentFace);
                }
            }, 250);
        });
    });
});