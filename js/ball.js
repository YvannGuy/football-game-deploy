class Ball {
    constructor(initialPositionX, initialPositionY) {
        
        this.width = 50; 
        this.height = 50; 
        this.positionX = initialPositionX; 
        this.positionY = initialPositionY; 
        this.domElement = null; 
        this.velocity = 15; 
        this.createDomElement(); 
    }

    createDomElement() {
        this.domElement = document.createElement("img");
        this.domElement.src = './images/ball.png'; 
        this.domElement.style.width = this.width + "px"; 
        this.domElement.style.height = this.height + "px"; 
        this.domElement.style.position = "absolute"; 
        this.domElement.style.left = this.positionX + "px";
        this.domElement.style.top = this.positionY + "px"; 
        this.domElement.style.objectFit = "contain"; 

        const board = document.getElementById("gameContainer");
        board.appendChild(this.domElement); 
    }


    moveUp() {
        
        if (this.positionY > 0) {
            this.positionY -= this.velocity; 
            this.domElement.style.top = this.positionY + "px"; 
        }
    }
}
