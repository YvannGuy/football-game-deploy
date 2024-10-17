const gameContainer = document.getElementById("gameContainer");

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
        this.domElement = document.createElement("img"); // Create an img element
        this.domElement.src = '/images/player.png'; // Path to your player image
        this.domElement.style.width = this.width + "px"; // Set width
        this.domElement.style.height = this.height + "px"; // Set height
        this.domElement.style.position = "absolute"; // Positioning
        this.domElement.style.top = this.positionY + "px"; // Set vertical position
        this.domElement.style.left = this.positionX + "px"; // Set horizontal position
        this.domElement.style.objectFit = "contain"; // Ensure the image fits in the element

        gameContainer.appendChild(this.domElement); // Append the image to the game container
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

// Event listener for keyboard input
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft(); // Move the player left
        console.log(player.positionX); // Log the position
    }
    if (event.key === "ArrowRight") {
        player.moveRight(); // Move the player right
        console.log(player.positionX); // Log the position
    }
    if (event.key === " ") {
        const newBall = new Ball(player.positionX, player.positionY); // Create a new ball instance
    }
});

class Ball {
    constructor(initialPositionX, initialPositionY) {
        // Values that will be used to style the DOM element
        this.width = 20; // Width of the ball
        this.height = 20; // Height of the ball
        this.positionX = initialPositionX; // Initial horizontal position
        this.positionY = initialPositionY; // Initial vertical position
        this.domElement = null; // Variable that will hold the DOM element
        this.velocity = 15; // Speed of the ball
        this.createDomElement(); // Call the function to create the DOM element
    }

    createDomElement() {
        this.domElement = document.createElement("div"); // Create a div for the ball
        this.domElement.className = "ball"; // Set the class for styling
        this.domElement.style.width = this.width + "px"; // Set width
        this.domElement.style.height = this.height + "px"; // Set height
        this.domElement.style.left = this.positionX + "px"; // Set horizontal position
        this.domElement.style.top = this.positionY + "px"; // Set vertical position

        const board = document.getElementById("gameContainer");
        board.appendChild(this.domElement); // Append the ball to the game container
    }

    moveUp() {
        // Check if the ball is not out of bounds
        if (this.positionY > 0) {
            this.positionY -= this.velocity; // Move the ball upwards
            this.domElement.style.top = this.positionY + "px"; // Update the position
        }
    }
}
