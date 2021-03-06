/// <reference path="paddle.ts"/>

class Ball {
    private screen:PlayScreen
    private div : HTMLElement
    
    private x : number
    private y: number
    
    private speedX: number
    private speedY: number

    private flip:boolean = false
    
    constructor(s:PlayScreen) {
        this.screen = s
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)
        
        this.x = window.innerWidth
        this.y = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
    
    public hitPaddle(){
        this.speedX *= -1
        if(this.flip == true){
            this.flip = false
        }else{
            this.flip = true
        }
    }

    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        if( this.y + this.getRectangle().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        if (this.x > window.innerWidth) {
            this.speedX *= -1
            if(this.flip == true){
                this.flip = false
            }else{
                this.flip = true
            }
        } 
        
        if (this.x + this.getRectangle().width < 0) { 
            this.x = window.innerWidth
            this.screen.lives--
        } 
                        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        if(this.flip == true){
            this.div.style.transform += `rotate(180deg)` 
        }else if(this.flip == false){
            this.div.style.transform += `rotate(0deg)` 
        }
        
    }
}