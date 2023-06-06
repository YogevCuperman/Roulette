

/* CONSTS AND VARIABLES */

const numbers = document.getElementsByClassName("roulette-cell")
const text = document.getElementById('number-picked')
const numberDisplay = document.getElementById("number-rect")
const rollButton = document.getElementById("roll-button")
const alerts = document.getElementById("alerts")

const reds = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
const blacks = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

let chosenNumber = null
// let pickedNumber = null
let currentAmount = 100
let bets = []
let running = false



/* FUNCTIONS */

function roll() {
    if (bets.length > 0) {
        clearAlert()
        running = true
        rollButton.disabled = true
        let numbersInterval = setInterval(runNumbers, 300)
        setTimeout(() => {
            clearInterval(numbersInterval)
            rollButton.disabled = false
            chosenNumber = parseInt(numberDisplay.textContent)
            running = false
            window.alert("The number is: " + chosenNumber + "\nYou picked: " + bets)
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

function addBet(kind, amount) {
    let bet = [kind, amount]
    bets.push(bet)
}

function setEventsForNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i].textContent
        numbers[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: ' + n
                addBet(n, currentAmount)
            }
        })
    }
}

function setPickEventForEntireClass(className) {
    const elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: ' + className
                addBet(className, currentAmount)
            }
        })
    }
}

function setPickEventForID(id) {
    const element = document.getElementById(id)
    element.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: ' + id
            addBet(id, currentAmount)
        }
    })
}

function setEventsForHalves() {
    const partials = document.getElementsByClassName("partial-cell")
    for (let i = 0; i < partials.length; i++) {
        let classes = partials[i].getAttribute('class').split(' ')
        for (let j = 0; j < classes.length; j++) {
            if (classes[j].startsWith('h-')) {
                setPickEventForEntireClass(classes[j])
                break
            }
        }
    }
}

function setEventsForQuarters() {
    const partials = document.getElementsByClassName("partial-cell")
    for (let i = 0; i < partials.length; i++) {
        let classes = partials[i].getAttribute('class').split(' ')
        for (let j = 0; j < classes.length; j++) {
            if (classes[j].startsWith('q-')) {
                setPickEventForEntireClass(classes[j])
                break
            }
        }
    }
}

function setEventsForSections() {
    setPickEventForID("1to18")
    setPickEventForID("19to36")
    setPickEventForID("red")
    setPickEventForID("black")
    setPickEventForID("even")
    setPickEventForID("odd")
}

function setEventsForThirds() {
    const rowsThirds = document.getElementsByClassName("rows-third")
    const columnsThirds = document.getElementsByClassName("columns-third")

    // column thirds:
    for (let i = 0; i < columnsThirds.length; i++) {
        columnsThirds[i].addEventListener("click", function() {
            if (running === false) {
                if (i === 0) {
                    text.textContent = 'You picked: rightColumn'
                    addBet('rightColumn', currentAmount)
                } else if (i === 1) {
                    text.textContent = 'You picked: centerColumn'
                    addBet('rightColumn', currentAmount)
                } else {
                    text.textContent = 'You picked: leftColumn'
                    addBet('centerColumn', currentAmount)
                }
            }
        })
    }

    // row thirds:
    for (let i = 0; i < rowsThirds.length; i++) {
        rowsThirds[i].addEventListener("click", function() {
            if (running === false) {
                if (i === 0) {
                    text.textContent = 'You picked: 1st12'
                    addBet('1st12', currentAmount)
                } else if (i === 1) {
                    text.textContent = 'You picked: 2nd12'
                    addBet('2nd12', currentAmount)
                } else {
                    text.textContent = 'You picked: 3rd12'
                    addBet('3rd12', currentAmount)
                }
            }
        })
    }
}

function setEventsForEntireRows() {
    const row = document.getElementsByClassName("entire-row")
    const drow = document.getElementsByClassName("entire-drow")

    for (let i = 0; i < row.length; i++) {
        let id = row[i].getAttribute('id')
        setPickEventForID(id)
    }

    for (let i = 0; i < drow.length; i++) {
        let id = drow[i].getAttribute('id')
        setPickEventForID(id)
    }
}

function setEventsForBoard() {
    setEventsForNumbers()
    setEventsForQuarters()
    setEventsForHalves()
    setEventsForSections()
    setEventsForThirds()
    setEventsForEntireRows()
}



/* MAIN */


setEventsForBoard()
