let gameOver = false;

let snakeHeadId = document.getElementById("snakeHead");
let applesId = document.getElementById("apples");

const boardWidth = 200;
const boardHeight = 200;

const unitWidth = 10;
const unitHeight = 10;

let applesY;
let applesX;

setUp();
function setUp() {
    gameOver = false;
    movingRight = true;
    setTimeout(() => {
        while (!gameOver) {
            moveSnake();
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
    })
}

function generateApples() {
    applesX = Math.random(boardWidth);
    applesY = Math.random(boardHeight);
    Math.floor(applesX);
    Math.floor(applesY);
}

function detectCollisions() {
   // if () {

    //}
}

function detectAppleCollisions() {

}