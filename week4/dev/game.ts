/// <reference path="ball.ts"/>

class Game {
    screen:any

    constructor() {
         this.screen = new PlayScreen(this)

         this.gameLoop()
    }
    
    private gameLoop():void{
        this.screen.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }
    
} 


window.addEventListener("load", () => new Game())