/// <reference path="ball.ts"/>

class Game {
    
    private balls: Ball[] = []

    constructor() {

        for (var i = 0; i < 15; i++) {
            this.balls.push(new Ball(this))
        }

        this.gameLoop()        
    }

    public removeElement(el:any){
        for (let i = 0;i< this.balls.length ;i++) {

            if (this.balls[i] === el) {
    
                this.balls.splice(i, 1);
    
            }
        }
    }
    
    private gameLoop():void{
        for (var b of this.balls) {
            b.update();
        }
        
        requestAnimationFrame(() => this.gameLoop())
    }
    
} 


window.addEventListener("load", () => new Game())