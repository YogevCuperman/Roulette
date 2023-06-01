

/* CONSTS AND VARIABLES */

const numbers = document.getElementsByClassName("roulette-cell")
const text = document.getElementById('number-picked')
const numberDisplay = document.getElementById("number-rect")
const rollButton = document.getElementById("roll-button")
const alerts = document.getElementById("alerts")

const reds = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
const blacks = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

let chosenNumber = null
let pickedNumber = null
let running = false



/* FUNCTIONS */

function roll() {
    if (pickedNumber !== null) {
        clearAlert()
        running = true
        rollButton.disabled = true
        let numbersInterval = setInterval(runNumbers, 300)
        setTimeout(() => {
            clearInterval(numbersInterval)
            rollButton.disabled = false
            chosenNumber = parseInt(numberDisplay.textContent)
            running = false
            window.alert("The number is: " + chosenNumber + "\nYou picked: " + pickedNumber)
        }, 10000)
    } else {
        alerts.textContent = "You need to pick a number before rolling"
    }
}

function clearAlert() {
    alerts.textContent = ""
}

function runNumbers() {
    let randomNumber = Math.floor(Math.random() * (36 - 0 + 1))
    numberDisplay.textContent = "" + randomNumber

    if (randomNumber === 0) {
        numberDisplay.style.backgroundColor = "green"
    } else if (reds.includes(randomNumber)) {
        numberDisplay.style.backgroundColor = "#ff0000"
    } else {
        numberDisplay.style.backgroundColor = "black"
    }
}

function resetGame() {
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i].textContent
        console.log(n)
        numbers[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked the number: ' + n
                pickedNumber = parseInt(n)
            }
        })
    }
}



/* MAIN */


resetGame()
