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

        if(this.elCounter < 99)setTimeout(this.generateObjects.bind(this), 333)
    }
}

window.addEventListener("load", () => new Game())