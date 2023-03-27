const content = document.querySelector(".content")
var kangaroo = document.querySelector('.kangaroo')
const block = document.getElementById("block")

var jumped = false;


function jump(){
	if(jumped) return
	kangaroo.classList.add('jump')
	jumped = true
	setTimeout(function(){
		kangaroo.classList.remove('jump')
		jumped = false
	}, 500)
}


window.addEventListener('keyup', function(e){
	if(e.key === " "){
		jump()
	}
})


var devagarBtn = document.getElementById("devagar")
var normalBtn = document.getElementById("normal")
var rapidoBtn = document.getElementById("rapido")


var velocidade = 0

function rapido(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 3
  block.classList.add("rapido")
}

function normal(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 2

  block.classList.add("normal")
}

function devagar(){
  rapidoBtn.style.display = "none"
  normalBtn.style.display = "none"
  devagarBtn.style.display = "none"

  velocidade = 1

  block.classList.add("devagar")
}


var checkDead = setInterval(() => {
  var kangarooPoisiton = 
    parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"))

  var blockPosition = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"))

  if (blockPosition < 40 && blockPosition > 0 && kangarooPoisiton >= -50){
    block.className = ""

    window.alert("You Lose")

    if (content.childNodes.length == 7){
      var btnReset = document.createElement("button")

      btnReset.innerHTML = "Restart"

      content.appendChild(btnReset)

      btnReset.id = "reset-btn"

      btnReset.addEventListener("click", restart)


      var btnSair = document.createElement("button")

      btnSair.innerHTML = "Menu"

      content.appendChild(btnSair)

      btnSair.id = "sair-btn"

      btnSair.addEventListener("click", sair)
    }
    else{
      var btnR = document.getElementById("reset-btn")
      var btnS = document.getElementById("sair-btn")
      
      btnR.style.display = "block"

      btnS.style.display = "block"
    }

  }
    score++
	scoreBoard.innerText = score
	requestAnimationFrame(check)
}, 10)
check


function restart(){
  var btnReset = document.getElementById("reset-btn")
  var btnSair = document.getElementById("sair-btn")

  if (velocidade == 3){
    block.classList.add("rapido")
  }

  if (velocidade == 2){
    block.classList.add("normal")
  }

  if (velocidade == 1){
    block.classList.add("devagar")
  }


  btnReset.style.display = "none"
  btnSair.style.display = "none"
}


function sair(){
  var btnReset = document.getElementById("reset-btn")
  var btnSair = document.getElementById("sair-btn")

  btnReset.style.display = "none"
  btnSair.style.display = "none"

  velocidade = 0

  rapidoBtn.style.display = "inline-block"
  normalBtn.style.display = "inline-block"
  devagarBtn.style.display = "inline-block"

  
}


