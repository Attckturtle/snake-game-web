let gameOver = false;
let unitHeight = 20;
let unitWidth = 20;

let keyPressed;

let snake1;

function Snake() {
    this.x = 250;
    this.y = 250;
    this.velocityX = 1;
    this.velocityY = 0;
    this.height = unitHeight;
    this.width = unitWidth;

    this.move = function () {
        this.x += this.velocityX
        this.y += this.velocityY
    }

    this.show = function () {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}

this.addEventListener('keypress', event => {
    event.key = keyPressed;
    console.log(keyPressed);
    nextDirectionDeterminer(keyPressed);
})

function nextDirectionDeterminer(thePressed) {
    switch (thePressed) {
        case "w":
            snake.velocityX = 0;
            snake.velocityY = 1;
            break;
        case "a":
            snake.velocityX = -1;
            snake.velocityY = 0;
            break;
        case "s":
            snake.velocityX = 0;
            snake.velocityY = -1;
            break;
        case "d":
            snake.velocityX = 1;
            snake.velocityY = 0;
            break;
    }
}

function draw() {
    background(51);
    snake.move();
    snake.show();
}

function setup() {
    snake = new Snake();
    createCanvas(600, 600);
}