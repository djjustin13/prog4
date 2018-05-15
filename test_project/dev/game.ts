class Game {
    private cars:Car[]
    constructor(){
        console.log("new game created!")
        this.cars = []
        
        for(let i =0; i<100; i++){
            let c = new Car()
            this.cars.push(c)
            c.update()
        }

        this.gameLoop()
    }

    gameLoop(){
        for(let c of this.cars){
            c.update()
        }

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())
