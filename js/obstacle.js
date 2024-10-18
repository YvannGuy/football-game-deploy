class Obstacle {
    constructor(width, height, fieldWidth, imageUrl, Y, speed) {
        this.width = width;
        this.height = height;
        this.positionX = 450 + (Math.random() * (fieldWidth - 450 - width)); 
        this.positionY = Y; 
        this.fieldWidth = fieldWidth;
        this.imageUrl = imageUrl;
        this.element = null;
        this.direction = 1; 
        this.speed = speed;
        this.createObstacle();
        this.startMoving(); 
    }

    createObstacle() {
        this.element = document.createElement('div');
        this.element.classList.add('obstacle');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.position = 'absolute';
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
        this.element.style.backgroundImage = `url(${this.imageUrl})`;
        this.element.style.backgroundSize = 'cover';
        document.body.appendChild(this.element);
    }

    move() {
        console.log(`Current Speed: ${this.speed}`); // CHANGEMENT - Ligne de débogage
        if (this.positionX <= 450) {
            this.direction = 1; 
        } else if (this.positionX + this.width >= this.fieldWidth) {
            this.direction = -1; 
        }
        this.positionX += this.direction * this.speed; // CHANGEMENT
        this.updatePosition();
    }


    updatePosition() {
        this.element.style.left = `${this.positionX}px`;
    }

    startMoving() {
        setInterval(() => {
            this.move();
        }, 100); 
    }

    removeObstacle() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    }
}

const fieldWidth = 1050;
const obstacleImage1 = '../images/player2.png'; 
const obstacleImage2 = '../images/player3.png';
const obstacleImage3 = '../images/player4.png';
const obstacleImage4 = '../images/player4.png';
const obstacleImage5 = '../images/player5.jpg';

const obstacle1 = new Obstacle(50, 80, fieldWidth, obstacleImage1 , 200, 18);
const obstacle2 = new Obstacle(50, 80, fieldWidth, obstacleImage2 , 300, 20);
const obstacle3 = new Obstacle(50, 80, fieldWidth, obstacleImage2 , 100, 15);
const obstacle4 = new Obstacle(50, 80, fieldWidth, obstacleImage2 , 20, 25);
const obstacle5 = new Obstacle(50, 80, fieldWidth, obstacleImage2 , 400, 25);
