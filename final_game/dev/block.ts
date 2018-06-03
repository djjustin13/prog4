class Block{
element: HTMLElement

    constructor(){
        this.element = document.createElement("block")
        document.body.appendChild(this.element)

        let x:number = (window.innerWidth/2)-150
        let y:number = (window.innerHeight/2)-150


        this.element.style.transform = `translate(${x}px, ${y}px)`
    }
}