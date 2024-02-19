const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionX = 0; // Horizontal position
let positionY = 0; // Vertical position

/* Responds to keypress by updating position */
function handleKeyPress(e) {
    // Horizontal movement
    if (e.code === 'ArrowLeft') {
        positionX -= 10;
    }
    if (e.code === 'ArrowRight') {
        positionX += 10;
    }
    // Vertical movement
    if (e.code === 'ArrowUp') {
        positionY -= 10;
    }
    if (e.code === 'ArrowDown') {
        positionY += 10;
    }
    
    // Ensure the ball stays within bounds of the window
    if (positionX < 0) {
        positionX = 0;
    }
    if (positionY < 0) {
        positionY = 0;
    }
    
    refresh();
}

/* Refresh changes position of ball */
function refresh() {
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}
