class Game{
    block:Block
    ui:Ui
    shop:Shop

    constructor(){
        console.log("Start game")

        this.block = new Block()
        this.ui = new Ui(this.block)
        this.shop = new Shop(this.block)

        this.gameLoop()
        setInterval(()=> this.gameTimer(), 1000)
    }

    private gameLoop():void{
        
        this.ui.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    private gameTimer(){
        if(this.shop.clickers.length > 0){
            for(let clicker of this.shop.clickers){
                clicker.timer()
            }
        }
    }
}

window.addEventListener("load", () => new Game())