class Student{ 
    block:Block
    element:HTMLElement
    x:number
    y:number

    constructor(b:Block){
        this.block = b

        console.log("Nieuwe student!!");
        this.element = document.createElement("student")
        document.body.appendChild(this.element)

        this.x = this.randomNumber(0, window.innerWidth-50)
        this.y = this.randomNumber(100, window.innerHeight-50)
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"

    }

    update(){

    }

    public timer(){
        this.block.clickBlock()
    }

    randomNumber(min:number, max:number) {
        let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
        return a
    }
}