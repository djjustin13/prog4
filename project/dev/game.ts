class Game {
    elCounter:number

    constructor(){
        //Set element counter
        this.elCounter = 0
        console.log("new game created!")
        
        this.generateObjects()
    }

    generateObjects(){
        this.elCounter++
        //Create objects
        let fish:Fish = new Fish()
        let bubble:Bubble = new Bubble()
        
        //Call function with delay if less then 99 items
        if(this.elCounter < 99){
            setTimeout(() => this.generateObjects(), 333)
        }
    }
}

//Create new game instance when page loaded
window.addEventListener("load", () => new Game())