var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var userInput = document.getElementById("userInput")
var RandomGenerator = document.getElementById("Random")

function getRandomInt(){
  return Math.floor(Math.random() * 255)
}

function setGradient () {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
  userInput.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")"
  css.textContent = body.style.background
}

function randomGradient (){
  var a = getRandomInt()
  var b = getRandomInt()
  var c = getRandomInt()
  var d = getRandomInt()
  var e = getRandomInt()
  var f = getRandomInt()
  body.style.background = "linear-gradient(to right, rgb(" + a + "," + b + "," + c + "), rgb(" + d + "," + e + "," + f + ")"
  userInput.style.background = "linear-gradient(to right, rgb(" + a + "," + b + "," + c + "), rgb(" + d + "," + e + "," + f + ")"
}

randomGradient()
color1.addEventListener("input",setGradient)
color2.addEventListener("input",setGradient)
RandomGenerator.addEventListener("click",randomGradient)



