class Game {
    elCounter:number

    constructor(){
        this.elCounter = 0
        console.log("new game created!")
        
        this.generateObjects()
    }

    generateObjects(){
        this.elCounter++
        let fish:Fish = new Fish
        let bubble:Bubble = new Bubble

        //Call function with delay if less then 99 items
        if(this.elCounter < 99)setTimeout(this.generateObjects.bind(this), 333)
    }
}

//Create new game instance when page loaded
window.addEventListener("load", () => new Game())