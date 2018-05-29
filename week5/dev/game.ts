/// <reference path="ball.ts"/>

class Game {
    screen:any

    constructor() {
         this.screen = new StartScreen(this)

         this.gameLoop()
    }
    
    private gameLoop():void{
        this.screen.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen(){
        document.body.innerHTML = ""
        this.screen = new PlayScreen(this)
    }

    public showEndScreen(score:number){
        document.body.innerHTML = ""
        this.screen = new GameOverScreen(this, score)
    }
    
} 


window.addEventListener("load", () => new Game())