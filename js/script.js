const gameContainer = document.getElementById("gameContainer");
const obstacles = document.querySelectorAll(".obstacle");

// Load audio elements
const launchSound = document.getElementById("launchSound");
const gameOverSound = document.getElementById("gameOverSound");

class Player {
    constructor() {
        this.width = 100; 
        this.height = 80; 
        this.positionX = 250; 
        this.positionY = 710; 
        this.domElement = null; 
        this.velocity = 15; 
        this.createDomElement(); 
    }

    createDomElement() {
        this.domElement = document.createElement("img"); 
        this.domElement.src = './images/player.png'; 
        this.domElement.style.width = this.width + "px"; 
        this.domElement.style.height = this.height + "px"; 
        this.domElement.style.position = "absolute"; 
        this.domElement.style.top = this.positionY + "px"; 
        this.domElement.style.left = this.positionX + "px"; 
        this.domElement.style.objectFit = "contain"; 

        gameContainer.appendChild(this.domElement); 
    }
  
    // Function to move left
    moveLeft() {
        // Check if the player is not out of bounds
        if (this.positionX > 0) {
            this.positionX -= this.velocity; // Move the player left
            this.domElement.style.left = this.positionX + "px"; // Update the position
        }
    }

    moveRight() {
        // Check if the player is not out of bounds on the right
        if (this.positionX < (600 - this.width)) { // Ensure the player doesn't go out of bounds
            this.positionX += this.velocity; // Move the player right
            this.domElement.style.left = this.positionX + "px"; // Update the position
        }
    }
}

// Create a new player instance
const player = new Player();
const ballsArray = [];
const obstacleArray = []; // You need two instances of the Obstacle class in here

// Event listener for keyboard input
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft(); // Move the player left
    }
    if (event.key === "ArrowRight") {
        player.moveRight(); // Move the player right
    }
    if (event.key === " ") {
        ballsArray.push(new Ball(player.positionX, player.positionY)); // Create a new ball instance and push to the ball array
        launchSound.play(); // Play the launch sound when the ball is created
    }
});

// Store the interval ID to enable resetting game
let gameInterval = setInterval(() => {
    ballsArray.forEach((ball) => {
        [obstacle1, obstacle2].forEach((obstacle) => {
            // Collision detection - check if horizontally and vertically aligned
            if ((ball.positionX + 430) < (obstacle.positionX + obstacle.width) &&
                (ball.positionX + 430) > obstacle.positionX &&
                ball.positionY < (obstacle.positionY + obstacle.height) &&
                (ball.positionY + ball.height) > obstacle.positionY) {
                
                console.log('Game over');
                gameOverSound.play(); // Play the game over sound
                clearInterval(gameInterval); // Stop the game loop
                
                alert('Game over. Do you want to replay?');
                location.reload(); // Reload the entire page to restart the game
            }
        });
        
        ball.moveUp(); // Move the ball upwards
    });
}, 50);
