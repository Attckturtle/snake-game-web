let gameOver = false;
let hasFruitBeenEaten = false;

let snakeHeadId = document.getElementById("snakeHead");
let applesId = document.getElementById("apples");

const boardWidth = 2000;
const boardHeight = 2000;

const unitWidth = 10;
const unitHeight = 10;

let snakeX;
let snakeY;
let currentDirection = 'U';

let applesX;
let applesY;

let score = 0;

let lastRenderedTime = 0;

window.addEventListener('keydown', (event) => {
    currentDirection = event.key;
    currentDirection = currentDirection.toUpperCase();
})

function setUp() {
    gameOver = false;
    movingRight = true;
    setInterval(() => {
        moveSnake();
        //generateApples();
        detectAppleCollisions();
        detectCollisions();
        setScore();
    }, 1000)
}

function startSnake() {

}

function moveSnake() {
        switch (currentDirection) {
            case "W":
                console.log("up");
                break;
            case "A":
                console.log("left");
                break;
            case "S":
                console.log("down");
                break;
            case "D":
                console.log("right");
                break;
        }
        detectAppleCollisions();
        detectCollisions();
}

function generateApples() {
    if (hasFruitBeenEaten) {
        applesX = Math.random(boardWidth);
        applesY = Math.random(boardHeight);
        Math.floor(applesX);
        Math.floor(applesY);
        applesId.style.top = applesX;
        applesId.style.left = applesY;
        hasFruitBeenEaten = false;
    }
}

function detectCollisions() {
}

function detectAppleCollisions() {
    if (applesX == snakeX && applesY == snakeY && !hasFruitBeenEaten) {
        score++
        hasFruitBeenEaten = true;
        setScore()
    }
}

function setScore() {
    document.getElementById("scoreBoard").innerHTML = "score";
}