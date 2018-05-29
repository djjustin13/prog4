class GameOverScreen {
    game:Game
    score:number
    constructor(g:Game, s:number) {
        this.game = g
        this.score = s

        let text = document.createElement("h1")
        text.innerHTML = "Game Over<br><br>Restart"
        text.classList.add("splash")
        text.addEventListener("click",()=> this.nextLevel())
        document.body.appendChild(text)

        let score = document.createElement("h3")
        score.innerHTML = "Score: "+this.score
        score.classList.add("endScore")
        document.body.appendChild(score)


    }

    public update(): void {
    }

    private nextLevel(){
        this.game.showPlayScreen()
    }
}