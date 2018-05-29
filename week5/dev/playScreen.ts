class PlayScreen {

    game:Game
    private balls: Ball[] = []
    private paddle:Paddle
    private ui:UI
    public score:number
    public lives:number

    constructor(g:Game) {
        this.score = -5
        this.lives = 10
        this.ui = new UI(this)
        this.game = g
        this.paddle = new Paddle(20, 87, 83)
        
        for (var i = 0; i < 5; i++) {
            this.balls.push(new Ball(this))
        }      

    }

    public update(): void {
        if(this.lives < 1){
            this.endGame()
        }

        for (var b of this.balls) {
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                b.hitPaddle()
                this.score++
            }

            b.update()
        }

        this.paddle.update()
        this.ui.update()
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    private endGame(){
        this.game.showEndScreen(this.score)
    }


}