window.addEventListener("load", function () {
    console.log("start het aquarium")

    addFish()
    addBubbles()
})

function addFish(){
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    let randomWidth = randomNumber(0, window.innerWidth-130)
    let randomHeight = randomNumber(0, window.innerHeight-130)

    fish.style.left = randomWidth + "px"
    fish.style.top = randomHeight + "px"
    fish.style.webkitFilter = "hue-rotate("+ randomNumber(0,360) +"deg)"
    fish.style.filter = "hue-rotate("+ randomNumber(0,360) +"deg)"

    fish.addEventListener("click", clickFish)

    if(countElements("fish")< 98){
        setTimeout(addFish, 100)
    }
    
}

function addBubbles(){
    let bubble = document.createElement("bubble");
    document.body.appendChild(bubble);
    bubble.style.left = randomNumber(0, window.innerWidth-55)+"px"
    bubble.style.top = randomNumber(0, window.innerHeight-55)+"px"

    if(countElements("bubble")< 98){
        setTimeout(addBubbles, 100)
    }
}

function clickFish(event){
    let fish = event.target
    console.log(fish)
    fish.classList.add("dead")
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function countElements(elmnt){
    let objects = document.getElementsByTagName(elmnt);
    return objects.length
}
