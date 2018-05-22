class Fish {
    x:number
    y:number
    color:number

    element:HTMLElement

    /**
     * Consturctor function
     */
    constructor() {
        //Create html element
        this.element = document.createElement("fish")
        document.body.appendChild(this.element)
        
        //Set random position
        this.x = this.randomNumber(0, window.innerWidth-130)
        this.y = this.randomNumber(0, window.innerHeight-130)
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"

        //Set random color
        this.color = this.randomNumber(0,360)
        this.element.style.webkitFilter = "hue-rotate("+ this.color +"deg)"
        this.element.style.filter = "hue-rotate("+ this.color +"deg)"

        //Add event listener -> call function when clicked
        this.element.addEventListener("click", ()=> this.clickFish())
    }

    /**
     * Generate random number between range
     * @param min
     * @param max 
     */
    randomNumber(min:number, max:number) {
        let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
        return a
    }

    /**
     * Click handler
     */
    clickFish(){
        this.element.classList.add("dead")
    }
}