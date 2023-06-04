

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

function setEventsForNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i].textContent
        numbers[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: ' + n
                pickedNumber = n
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
                pickedNumber = className
            }
        })
    }
}

function setPickEventForID(id) {
    const element = document.getElementById(id)
    element.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: ' + id
            pickedNumber = id
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
