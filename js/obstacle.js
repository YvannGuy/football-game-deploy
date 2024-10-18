class Obstacle {
    constructor(width, height, fieldWidth, imageUrl, Y) {
        this.width = width;
        this.height = height;
        this.positionX = 450 + (Math.random() * (fieldWidth - 450 - width)); // Position aléatoire à l'intérieur du terrain
        this.positionY = Y; // Position Y fixe
        this.fieldWidth = fieldWidth;
        this.imageUrl = imageUrl;
        this.element = null;
        this.direction = 1; // 1 pour droite, -1 pour gauche
        this.createObstacle();
        this.startMoving(); // Démarrer le mouvement aléatoire
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
        if (this.positionX <= 450) {
            this.direction = 1; // Change de direction vers la droite
        } else if (this.positionX + this.width >= this.fieldWidth) {
            this.direction = -1; // Change de direction vers la gauche
        }
        this.positionX += this.direction * 5; // Déplace l'obstacle de 5 pixels pour une vitesse plus rapide
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.positionX}px`;
    }

    startMoving() {
        setInterval(() => {
            this.move();
        }, 100); // Change la position toutes les 100 ms
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

const obstacle1 = new Obstacle(100, 80, fieldWidth, obstacleImage1 , 200);
const obstacle2 = new Obstacle(100, 80, fieldWidth, obstacleImage2 , 400);
