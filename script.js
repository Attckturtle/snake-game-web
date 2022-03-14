let gameOver = false;

let snakeHeadId = document.getElementById("snakeHead");
let applesId = document.getElementById("apples");

const boardWidth = 200;
const boardHeight = 200;

const unitWidth = 10;
const unitHeight = 10;

let snakeX;
let snakeY;

let applesX;
let applesY;

let score = 0;

function setUp() {
    gameOver = false;
    movingRight = true;
    setTimeout(() => {
        while (!gameOver) {
            moveSnake();
            generateApples();
        }
    }, 1000);
}

function startSnake() {

}

function moveSnake() {
    console.log("moving snake");
    this.addEventListener('keypress', keyPressed => {
        switch (keyPressed.keyCode) {
            case 87:
                console.log("up");
                break;
            case 65:
                console.log("left");
                break;
            case 83:
                console.log("down");
                break;
            case 68:
                console.log("right");
                break;
            default:
                console.log("do nothing");
                break;
        }
        detectAppleCollisions();
        detectCollisions();
    })
}

function generateApples() {
    applesX = Math.random(boardWidth);
    applesY = Math.random(boardHeight);
    Math.floor(applesX);
    Math.floor(applesY);
}

function detectCollisions() {
    //check if snakeX is 0 or the same amount of pixels of the box + the left: css value of the box
    //do same for snakeY
}

function detectAppleCollisions() {
    if (applesX == snakeX && applesY == snakeY) {
        score++
        setScore()
    }
}

function setScore() {
    document.getElementById("scoreBoard").innerHTML = "score";
}