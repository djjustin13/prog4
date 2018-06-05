/// <reference path="gameScreen.ts"/>
class StartScreen extends gameScreen {

    constructor(g:Game) {
        super(g)

        let start = document.createElement("h1")
        start.innerHTML = "Start!"
        start.classList.add("splash")
        start.addEventListener("click",()=> this.nextLevel())
        document.body.appendChild(start)
    }

    public update(): void {
    }

    private nextLevel(){
        this.game.showPlayScreen()
    }
}