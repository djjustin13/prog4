class Car {
    private x:number = 0
    private y:number = Math.random()*window.innerHeight
    private xSpeed:number = 1
    private ySpeed:number = 1
    private element:HTMLElement
    private color = Math.random()*360;
    constructor() {
        this.element = document.createElement("car")
        document.body.appendChild(this.element)

        this.xSpeed = 3+ Math.random()
        this.ySpeed = 3+ Math.random()

        this.element.addEventListener("click", ()=> this.clickBlock())
    }

    public update(){
        this.x += this.xSpeed
        this.y += this.ySpeed

        if(this.x > window.innerWidth || this.x < 0){
            this.xSpeed = this.xSpeed * -1
        }
        if(this.y > window.innerHeight || this.y < 0){
            this.ySpeed = this.ySpeed * -1
        }
    
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`

        if (this.color < 360){
            this.color++
        }else{
            this.color = 0
        }
        
        this.element.style.webkitFilter = "hue-rotate("+ this.color +"deg)"
        this.element.style.filter = "hue-rotate("+ this.color +"deg)"
    }

    private clickBlock(){
        console.log(this.element)

    }
}
