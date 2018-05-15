class Fish {
    x:number
    y:number
    color:number

    element:HTMLElement

    constructor() {
        this.element = document.createElement("fish")
        document.body.appendChild(this.element)

        this.x = this.randomNumber(0, window.innerWidth-130)
        this.y = this.randomNumber(0, window.innerHeight-130)

        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"
        this.color = this.randomNumber(0,360)
        this.element.style.webkitFilter = "hue-rotate("+ this.color +"deg)"
        this.element.style.filter = "hue-rotate("+ this.color +"deg)"

        this.element.addEventListener("click", ()=> this.clickFish())
    }

    randomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    clickFish(){
        this.classList.add("dead")
    }
}