/*
Instructions: include gamelet.js, 

gamelet is an html doc containing element with id of ball. detects right and left keyboard movements for what i dont know.

*/

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;

/* responds to keypress by updating left and right position */
function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (e.code === 'ArrowRight') {
        position = position + 10;
    } 
    if (position < 0) {
        position = 0;
    }
    refresh ();
}

/* refresh changes position of ball */

function refresh() {
    ball.style.left = position + 'px';
}

