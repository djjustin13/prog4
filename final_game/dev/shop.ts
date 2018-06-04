class Shop{
    block: Block
    clickers:any[] = []

    constructor(b:Block){
        this.block = b

        let shop = document.createElement("p")
        shop.innerHTML = "Studiepunten shop"
        shop.style.top = "5px"
        shop.style.right = "25px"
        document.body.appendChild(shop)

        let bStudent = document.createElement("p")
        bStudent.innerHTML = "Koop student | 1.-"
        bStudent.style.top = "35px"
        bStudent.style.right = "25px"
        bStudent.style.cursor = "pointer"
        document.body.appendChild(bStudent)
        bStudent.addEventListener("click", ()=> this.buyStudent())

        let bTeacher = document.createElement("p")
        bTeacher.innerHTML = "Koop docent | 5.-"
        bTeacher.style.top = "60px"
        bTeacher.style.right = "25px"
        bTeacher.style.cursor = "pointer"
        document.body.appendChild(bTeacher)
        bTeacher.addEventListener("click", ()=> this.buyTeacher())
    }

    buyStudent(){
        console.log("Klik")
        if(this.block.buy(1)){
            this.clickers.push(new Student(this.block))
        }
    }

    buyTeacher(){
        console.log("Klik")
        if(this.block.buy(5)){
            this.clickers.push(new Teacher(this.block))
        }
    }
}