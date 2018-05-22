"use strict";
var Ball = (function () {
    function Ball() {
        this.xSpeed = 2;
        this.ySpeed = 2;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
    }
    Ball.prototype.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > window.innerWidth - 40) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.y > window.innerHeight - 40 || this.y < 0) {
            this.ySpeed = this.ySpeed * -1;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Ball.prototype.changeDir = function () {
        this.xSpeed = (this.xSpeed * -1) + 1;
        console.log(this.xSpeed);
    };
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.score = -2;
        this.scoreElement = document.getElementsByTagName('score')[0];
        this.balls = [];
        for (var i = 0; i < 10; i++) {
            var b = new Ball();
            this.balls.push(b);
        }
        this.paddle = new Paddle();
        this.paddle;
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var b = _a[_i];
            var hit = this.checkCollision(this.paddle.getRectangle(), b.getRectangle());
            if (hit) {
                console.log("hiiiiiit");
                b.changeDir();
                this.score++;
                this.scoreElement.innerHTML = "Score: " + this.score;
            }
            b.update();
        }
        this.paddle.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map