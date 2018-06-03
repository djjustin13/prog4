class Game{
    block:Block

    constructor(){
        console.log("Start game")

        this.block = new Block()
    }

}

window.addEventListener("load", () => new Game())