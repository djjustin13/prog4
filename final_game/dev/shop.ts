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
        bStudent.innerHTML = "Koop student | 1"
        bStudent.style.top = "35px"
        bStudent.classList.add("shop")
        document.body.appendChild(bStudent)
        bStudent.addEventListener("click", ()=> this.buyStudent())

        let bPeercoach = document.createElement("p")
        bPeercoach.innerHTML = "Koop peercoach | 5"
        bPeercoach.style.top = "60px"
        bPeercoach.classList.add("shop")
        document.body.appendChild(bPeercoach)
        bPeercoach.addEventListener("click", ()=> this.buyPeercoach())

        let bGroup = document.createElement("p")
        bGroup.innerHTML = "Koop klas| 10"
        bGroup.style.top = "85px"
        bGroup.classList.add("shop")
        document.body.appendChild(bGroup)
        bGroup.addEventListener("click", ()=> this.buyGroup())

        let bTeacher = document.createElement("p")
        bTeacher.innerHTML = "Koop docent | 25"
        bTeacher.style.top = "110px"
        bTeacher.classList.add("shop")
        document.body.appendChild(bTeacher)
        bTeacher.addEventListener("click", ()=> this.buyTeacher())
    }

    buyStudent(){
        if(this.block.buy(1)){
            this.clickers.push(new Student(this.block))
        }
    }

    buyPeercoach(){
        if(this.block.buy(5)){
            this.clickers.push(new Peercoach(this.block))
        }
    }

    buyGroup(){
        if(this.block.buy(10)){
            this.clickers.push(new Group(this.block))
        }
    }

    buyTeacher(){
        if(this.block.buy(25)){
            this.clickers.push(new Teacher(this.block))
        }
    }
}