class Bubble {
    x:number
    element:HTMLElement

    constructor() {
        this.element = document.createElement("bubble")
        document.body.appendChild(this.element)

        this.x = this.randomNumber(0, window.innerWidth-55)

        this.element.style.left = this.x + "px"
    }

    randomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}