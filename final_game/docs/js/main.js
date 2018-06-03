"use strict";
var Block = (function () {
    function Block() {
        this.element = document.createElement("block");
        document.body.appendChild(this.element);
        var x = (window.innerWidth / 2) - 150;
        var y = (window.innerHeight / 2) - 150;
        this.element.style.transform = "translate(" + x + "px, " + y + "px)";
    }
    return Block;
}());
var Game = (function () {
    function Game() {
        console.log("Start game");
        this.block = new Block();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map