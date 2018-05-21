/// <reference path="ball.ts"/>

class Game {
    
    private balls:Ball[]
    private paddle:Paddle
    private scoreElement:Element
    private score:number = -2
    
    constructor() {
        this.scoreElement = document.getElementsByTagName('score')[0]
        this.balls = []

          for(let i =0; i<2; i++){
            let b= new Ball()
            this.balls.push(b)
        }

        this.paddle = new Paddle()
        this.paddle
        this.gameLoop()
    }
    
    private gameLoop(){
        for (let b of this.balls){
            let hit = this.checkCollision(this.paddle.getRectangle(), b.getRectangle())
            if(hit){
                console.log("hiiiiiit")
                b.changeDir()
                this.score++
                this.scoreElement.innerHTML = "Score: "+ this.score
            }
            b.update()
        }

        this.paddle.update()


        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
} 

window.addEventListener("load", () => new Game())