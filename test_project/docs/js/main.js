"use strict";
var Car = (function () {
    function Car() {
        var _this = this;
        this.x = 0;
        this.y = Math.random() * window.innerHeight;
        this.xSpeed = 1;
        this.ySpeed = 1;
        this.color = Math.random() * 360;
        this.element = document.createElement("car");
        document.body.appendChild(this.element);
        this.xSpeed = 3 + Math.random();
        this.ySpeed = 3 + Math.random();
        this.element.addEventListener("click", function () { return _this.clickBlock(); });
    }
    Car.prototype.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > window.innerWidth || this.x < 0) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.y > window.innerHeight || this.y < 0) {
            this.ySpeed = this.ySpeed * -1;
        }
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.color < 360) {
            this.color++;
        }
        else {
            this.color = 0;
        }
        this.element.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.element.style.filter = "hue-rotate(" + this.color + "deg)";
    };
    Car.prototype.clickBlock = function () {
        console.log(this.element);
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.cars = [];
        for (var i = 0; i < 100; i++) {
            var c = new Car();
            this.cars.push(c);
            c.update();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map