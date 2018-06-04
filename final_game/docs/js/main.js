"use strict";
var Block = (function () {
    function Block() {
        var _this = this;
        this.score = 0;
        this.points = 0;
        this.element = document.createElement("block");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clickBlock(); });
    }
    Block.prototype.clickBlock = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        this.score += n;
        if (this.score > 100) {
            this.score -= 100;
            this.points += 1;
        }
        this.element.style.transform = "scale(1.1)";
        setTimeout(function () { return _this.scaleDown(); }, 100);
    };
    Block.prototype.scaleDown = function () {
        this.element.style.transform = "scale(1)";
    };
    Block.prototype.buy = function (n) {
        if (this.points >= n) {
            this.points -= n;
            return true;
        }
    };
    Block.prototype.getScore = function () {
        return this.score;
    };
    Block.prototype.getPoints = function () {
        return this.points;
    };
    return Block;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        console.log("Start game");
        this.block = new Block();
        this.ui = new Ui(this.block);
        this.shop = new Shop(this.block);
        this.gameLoop();
        setInterval(function () { return _this.gameTimer(); }, 1000);
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ui.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameTimer = function () {
        if (this.shop.clickers.length > 0) {
            for (var _i = 0, _a = this.shop.clickers; _i < _a.length; _i++) {
                var clicker = _a[_i];
                clicker.timer();
            }
        }
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Shop = (function () {
    function Shop(b) {
        var _this = this;
        this.clickers = [];
        this.block = b;
        var shop = document.createElement("p");
        shop.innerHTML = "Studiepunten shop";
        shop.style.top = "5px";
        shop.style.right = "25px";
        document.body.appendChild(shop);
        var bStudent = document.createElement("p");
        bStudent.innerHTML = "Koop student | 1.-";
        bStudent.style.top = "35px";
        bStudent.style.right = "25px";
        bStudent.style.cursor = "pointer";
        document.body.appendChild(bStudent);
        bStudent.addEventListener("click", function () { return _this.buyStudent(); });
        var bTeacher = document.createElement("p");
        bTeacher.innerHTML = "Koop docent | 5.-";
        bTeacher.style.top = "60px";
        bTeacher.style.right = "25px";
        bTeacher.style.cursor = "pointer";
        document.body.appendChild(bTeacher);
        bTeacher.addEventListener("click", function () { return _this.buyTeacher(); });
    }
    Shop.prototype.buyStudent = function () {
        console.log("Klik");
        if (this.block.buy(1)) {
            this.clickers.push(new Student(this.block));
        }
    };
    Shop.prototype.buyTeacher = function () {
        console.log("Klik");
        if (this.block.buy(5)) {
            this.clickers.push(new Teacher(this.block));
        }
    };
    return Shop;
}());
var Student = (function () {
    function Student(b) {
        this.block = b;
        console.log("Nieuwe student!!");
        this.element = document.createElement("student");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth - 50);
        this.y = this.randomNumber(100, window.innerHeight - 50);
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }
    Student.prototype.update = function () {
    };
    Student.prototype.timer = function () {
        this.block.clickBlock();
    };
    Student.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    return Student;
}());
var Teacher = (function () {
    function Teacher(b) {
        this.block = b;
        console.log("Nieuwe student!!");
        this.element = document.createElement("teacher");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth - 50);
        this.y = this.randomNumber(100, window.innerHeight - 50);
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.element.style.webkitFilter = "hue-rotate(211deg)";
        this.element.style.filter = "hue-rotate(211deg)";
    }
    Teacher.prototype.update = function () {
    };
    Teacher.prototype.timer = function () {
        this.block.clickBlock(10);
    };
    Teacher.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    return Teacher;
}());
var Ui = (function () {
    function Ui(b) {
        this.blockScore = document.createElement("p");
        this.blockScore.innerHTML = "Building blocks: 0";
        this.pointScore = document.createElement("p");
        this.pointScore.innerHTML = "Studiepunten: 0";
        this.pointScore.style.top = "25px";
        this.block = b;
        document.body.appendChild(this.blockScore);
        document.body.appendChild(this.pointScore);
    }
    Ui.prototype.update = function () {
        this.blockScore.innerHTML = "Building blocks: " + this.block.getScore();
        this.pointScore.innerHTML = "Studiepunten: " + this.block.getPoints();
    };
    return Ui;
}());
//# sourceMappingURL=main.js.map