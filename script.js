let gameArea = document.getElementById("gameArea")
let roadPosition = 0

function moveRoad(){

roadPosition += 5
gameArea.style.backgroundPositionY = roadPosition + "px"

}

setInterval(moveRoad,50)
let car = document.getElementById("car")
let carPosition = 160

document.addEventListener("keydown", function(e){

if(e.key === "ArrowLeft"){
carPosition -= 100
if(carPosition < 70) carPosition = 70
car.style.left = carPosition + "px"
}

if(e.key === "ArrowRight"){
carPosition += 100
if(carPosition > 270) carPosition = 270
car.style.left = carPosition + "px"
}

})
let enemy1 = document.getElementById("enemy1")
let enemy2 = document.getElementById("enemy2")

let enemy1Y = -200
let enemy2Y = -400

function moveEnemies(){

enemy1Y += 5
enemy2Y += 5

enemy1.style.top = enemy1Y + "px"
enemy2.style.top = enemy2Y + "px"

if(enemy1Y > 600){
enemy1Y = -200
}

if(enemy2Y > 600){
enemy2Y = -400
}

}

setInterval(moveEnemies,50)
let startBtn = document.getElementById("startBtn")

startBtn.onclick = function(){

startBtn.style.display = "none"

setInterval(moveRoad,50)
setInterval(moveEnemies,50)

}
