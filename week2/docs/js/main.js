"use strict";
var Bubble = (function () {
    function Bubble() {
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth - 55);
        this.element.style.left = this.x + "px";
    }
    Bubble.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.element = document.createElement("fish");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth - 130);
        this.y = this.randomNumber(0, window.innerHeight - 130);
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.color = this.randomNumber(0, 360);
        this.element.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.element.style.filter = "hue-rotate(" + this.color + "deg)";
        this.element.addEventListener("click", function () { return _this.clickFish(); });
    }
    Fish.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    Fish.prototype.clickFish = function () {
        this.element.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.elCounter = 0;
        console.log("new game created!");
        this.generateObjects();
    }
    Game.prototype.generateObjects = function () {
        var _this = this;
        this.elCounter++;
        var fish = new Fish();
        var bubble = new Bubble();
        if (this.elCounter < 99) {
            setTimeout(function () { return _this.generateObjects(); }, 333);
        }
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map