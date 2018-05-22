class StartScreen {

    game:Game
    constructor(g:Game) {
        this.game = g

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