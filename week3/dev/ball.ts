class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number
    private xSpeed:number = 2
    private ySpeed:number = 2
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }
    
    public update() : void {
        this.x += this.xSpeed
        this.y += this.ySpeed

        if(this.x > window.innerWidth-40){
            this.xSpeed = this.xSpeed * -1
        }
        if(this.y > window.innerHeight -40|| this.y < 0){
            this.ySpeed = this.ySpeed * -1
        }

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public changeDir(){
        this.xSpeed = (this.xSpeed * -1) + 1
        console.log(this.xSpeed)
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
}