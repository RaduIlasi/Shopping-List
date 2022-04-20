var button = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")

function inputLength(){
  return input.value.length
}

function adv(x){
  x.addEventListener("click",function(){
    x.classList.toggle("done")
  })
}

function createBTN(x){
  btn = document.createElement("button")
  btn.innerHTML="X"
  btn.classList.add("delete")
  btn.addEventListener("click",function(){
    x.parentNode.removeChild(x)
  })
  x.appendChild(btn)
}

function createListElement(){
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value=""
  createBTN(li) 
  adv(li)
}

//ADD the stuff to existing li
var alli = document.querySelectorAll("li")
alli.forEach(function(li){
  createBTN(li)
  adv(li)
})

function addListAfterClick(){
  if(inputLength() > 0){
    createListElement()
  }
}

function addListAfterEnter(event){
  if(inputLength() > 0 && event.code === "Enter"){
    createListElement()
  }
}

button.addEventListener("click",addListAfterClick)
input.addEventListener("keypress",addListAfterEnter)