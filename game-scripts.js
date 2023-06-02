

/* CONSTS AND VARIABLES */

const numbers = document.getElementsByClassName("roulette-cell")
const text = document.getElementById('number-picked')
const numberDisplay = document.getElementById("number-rect")
const rollButton = document.getElementById("roll-button")
const alerts = document.getElementById("alerts")
const rowsThirds = document.getElementsByClassName("rows-third")
const columnsThirds = document.getElementsByClassName("columns-third")
const _1to18 = document.getElementById("1to18")
const _19to36 = document.getElementById("19to36")
const redHalf = document.getElementById("red")
const blackHalf = document.getElementById("black")
const evenHalf = document.getElementById("even")
const oddHalf = document.getElementById("odd")


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

function setEventsForBoard() {

    // numbers:
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i].textContent
        numbers[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: ' + n
                pickedNumber = parseInt(n)
            }
        })
    }

    // column thirds:
    for (let i = 0; i < columnsThirds.length; i++) {
        columnsThirds[i].addEventListener("click", function() {
            if (running === false) {
                if (i === 0) {
                    text.textContent = 'You picked: Right Column'
                    pickedNumber = 'rightColumn'
                } else if (i === 1) {
                    text.textContent = 'You picked: Center Column'
                    pickedNumber = 'centerColumn'
                } else {
                    text.textContent = 'You picked: Left Column'
                    pickedNumber = 'leftColumn'
                }
            }
        })
    }

    // row thirds:
    for (let i = 0; i < rowsThirds.length; i++) {
        rowsThirds[i].addEventListener("click", function() {
            if (running === false) {
                if (i === 0) {
                    text.textContent = 'You picked: 1st 12'
                    pickedNumber = '1st12'
                } else if (i === 1) {
                    text.textContent = 'You picked: 2nd 12'
                    pickedNumber = '2nd12'
                } else {
                    text.textContent = 'You picked: 3rd 12'
                    pickedNumber = '3rd12'
                }
            }
        })
    }

    // halves:
    evenHalf.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Even'
            pickedNumber = 'even'
        }
    })

    oddHalf.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Odd'
            pickedNumber = 'odd'
        }
    })

    _1to18.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: 1 to 18'
            pickedNumber = '1to18'
        }
    })

    _19to36.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: 19 to 36'
            pickedNumber = '19to36'
        }
    })

    redHalf.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Red'
            pickedNumber = 'red'
        }
    })

    blackHalf.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Black'
            pickedNumber = 'black'
        }
    })


}



/* MAIN */


setEventsForBoard()
