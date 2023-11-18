// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var number1 = Math.round(Math.random()*100)
var number2 = Math.round(Math.random()*100)

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

// Iteration 3: Creating variables required to make the game functional

const additionButton = document.getElementById("plus")
const subtractionButton = document.getElementById("minus")
const multiplicationButton = document.getElementById("mul")
const divisionButton = document.getElementById("divide")
const modulusButton = document.getElementById("modulus")

var score = 0
var operator


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var number3
const number3box = document.getElementById("number3")

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);

    if (number1<number2){
        var extra = number1
        number1 = number2
        number2 = extra
    }

    operator=Math.round(Math.random()*5)

    switch(operator){
        case 1:
            number3 = number1 + number2
            break

        case 2:
            number3 = number1 - number2
            break

        case 3:
            number3 = number1 * number2
            break

        case 4:
            number3 = Math.floor(number1 / number2)
            break

        case 5:
            number3 = number1 % number2
            break

        case 0:
            randomise()
    }
    document.getElementById('number1').innerHTML=number1
    document.getElementById('number2').innerHTML=number2
    number3box.innerHTML=number3

    console.log(number1 + " " + number2 + " "+ number3 +" " + operator)
}

randomise()

// Iteration 6: Making the Operators (button) functional

additionButton.onclick = ()=>{
    if(number1 + number2 === number3){
        score++
        randomise()
        resetTime(timerId)
    } else {
        window.location.href = "./gameover.html?score="+score
    }
}

subtractionButton.onclick = ()=>{
    if(number1 - number2 === number3){
        score++
        randomise()
        resetTime(timerId)
    } else {
        window.location.href = "./gameover.html?score="+score
    }
}

multiplicationButton.onclick = ()=>{
    if(number1 * number2 === number3){
        score++
        randomise()
        resetTime(timerId)
    } else {
        window.location.href = "./gameover.html?score="+score
    }
}

divisionButton.onclick = ()=>{
    if(Math.floor(number1 / number2) === number3){
        score++
        randomise()
        resetTime(timerId)
    } else {
        window.location.href = "./gameover.html?score="+score
    }
}

modulusButton.onclick = ()=>{
    if(number1 % number2 === number3){
        score++
        randomise()
        resetTime(timerId)
    } else {
        window.location.href = "./gameover.html?score="+score
    }
}

// Iteration 7: Making Timer functional
var timerId
let time=20

function startTimer(){
    time=20
    timer.innerHTML=time
    timerId=setInterval(()=>{
        time--
        if(time==0) location.href="./gameover.html?score="+score
        timer.innerHTML=time
    },1000)
}

function resetTime(intervalId){
    clearInterval(intervalId)
    startTimer()
}
startTimer()