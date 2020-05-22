document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let scuares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button'); 
    const width = 10;

    //  The Tetrominos
    const lTetromino = [
        [1, width+1, width*2 +1, 2],
        [width, width+1, width+2, width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1, width*2+2]
    ]
    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
    const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currnetPosition = 4;
    let currentRotation = 3;
    // selecting random tetromino
    let random = Math.floor(Math.random()*theTetrominos.length);
    let current = theTetrominos[random][currentRotation]
// drawing rotation for tetrmino
function draw() {
    current.forEach(index => {
        scuares[currnetPosition + index].classList.add('tetromino');
    })
}

function undrow() {
    current.forEach(index => {
        scuares[currnetPosition + index].classList.remove('tetromino');
    })
}
// set time interval for moving dopwn tetromon
timeId = setInterval(moveDown, 500);

// move down function
function moveDown() {
    undrow();
    currnetPosition += width;
    draw();
    freeze();
}

// freeze function
function freeze() {
    if(current.some(index => scuares[currnetPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => scuares[currnetPosition + index].classList.add('taken'))
    }

});