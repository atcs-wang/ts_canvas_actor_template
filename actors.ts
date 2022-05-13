// Define the properties/ behavior of Actor 
class Actor {
    
    //List all properties:
    x : number;
    y : number;

    constructor(x : number, y : number) {
        //set up properties
        this.x = x;
        this.y = y;
    }

    /**
     * Draw the actor on the canvas.
     */
    draw() : void {
        // Use ctx to draw. A sample (drawing a small circle):
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    /**
     * Update this actor for the next frame.
     */
    update() : void {
        // Update properties or other Actors in the actorList.
        
    }

    //Add more methods as helpful:

}

// Recommended: Create sub-classes of Actor:

// class SubActor extends Actor { ... }
