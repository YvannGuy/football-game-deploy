const gameContainer = document.getElementById("gameContainer");
const obstacles = document.querySelectorAll(".obstacle")

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
        this.domElement.src = './images/player.png'; // Path to your player image
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
const ballsArray = []
const obstacleArray = [] //you need two instances of Obstacle class in here
// const obstacleArray = [new Obstacle(top: 100) ,new Obstacle(top: 200)]

// Event listener for keyboard input
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft(); // Move the player left
        //console.log(player.positionX); // Log the position
    }
    if (event.key === "ArrowRight") {
        player.moveRight(); // Move the player right
        //console.log(player.positionX); // Log the position
    }
    if (event.key === " ") {
        ballsArray.push(new Ball(player.positionX, player.positionY)); // Create a new ball instance and push to the ball array
    }
});

setInterval(() => {
    ballsArray.forEach((ball) => {
        obstacles.forEach((obstacle)=> {
          //to be done (move obstacles and detect collision)
          if(ball.positionX < (obstacle.positionX + obstacle.width)  // Ball's right edge is to the left of obstacle's right edge
          && (ball.positionX + ball.width) > obstacle.positionX   // Ball's left edge is to the right of obstacle's left edge
          && ball.positionY < (obstacle.positionY + obstacle.height) // Ball's bottom edge is above obstacle's bottom edge
          && (ball.positionY + ball.height) > obstacle.positionY)
           // Ball's top edge is below obstacle's top edge
            {
            console.log('game over')
          }
        })
        ball.moveUp()
    })

} , 50)

//you need an obstacle class
//same properties as player and ball (ex: width, height, positionX and Y)
//method to move left and right (cannot leave the field)
//DELETE obstacle divs in HTML, and create them through JS (just like other classes)



