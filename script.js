let gameOver = false;
let unitHeight = 5;
let unitWidth = 5;

class snake {
    constructor() {
        this.x = 250;
        this.y = 250;
        this.velocityX = 0;
        this.velocityY = 0;
        this.height = unitHeight;
        this.width = unitWidth;
    }

    move() {
        this.x += Math.random(-1, 1);
        this.x += Math.random(-1, 1);
        this.style.top = this.x;
        this.style.left = this.y
    }
}

let snake1 = new snake();
console.log(ball1);

function setup() {
    createCanvas(500, 500);
}

function draw() {
    snake1.move();
}