class Bubble {
    x:number
    element:HTMLElement

    /**
     * Constructor function
     */
    constructor() {
        //Create html element
        this.element = document.createElement("bubble")
        document.body.appendChild(this.element)

        //Set random x position
        this.x = this.randomNumber(0, window.innerWidth-55)
        this.element.style.left = this.x + "px"
    }

    /**
     * Generate random number between range
     * @param min 
     * @param max 
     */
    randomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}