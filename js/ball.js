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
