/// <reference path="gameScreen.ts"/>
class GameOverScreen extends gameScreen {
    score:number
    constructor(g:Game, s:number) {
        super(g)
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

    private nextLevel(){
        this.game.showPlayScreen()
    }
}