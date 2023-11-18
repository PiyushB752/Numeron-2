// Iteration 8: Making scoreboard functional
var urlParas = new URLSearchParams(window.location.search)
console.log(urlParas)
var score = urlParas.get('score')

var scoreBoard = document.getElementById("score-board")
scoreBoard.innerHTML = score;

const play_again_button = document.getElementById("play-again-button")

function playagain(){
    window.location.href="./game.html"
}
play_again_button.addEventListener("click", playagain);