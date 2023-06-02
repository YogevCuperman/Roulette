

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
                pickedNumber = parseInt(n)
            }
        })
    }
}

function setEventsForHalves() {
    const h_0_1 = document.getElementsByClassName("h-0-1")
    const h_0_2 = document.getElementsByClassName("h-0-2")
    const h_0_3 = document.getElementsByClassName("h-0-3")
    const h_1_4 = document.getElementsByClassName("h-1-4")
    const h_2_5 = document.getElementsByClassName("h-2-5")
    const h_3_6 = document.getElementsByClassName("h-3-6")
    const h_4_7 = document.getElementsByClassName("h-4-7")
    const h_5_8 = document.getElementsByClassName("h-5-8")
    const h_6_9 = document.getElementsByClassName("h-6-9")
    const h_7_10 = document.getElementsByClassName("h-7-10")
    const h_8_11 = document.getElementsByClassName("h-8-11")
    const h_9_12 = document.getElementsByClassName("h-9-12")
    const h_10_13 = document.getElementsByClassName("h-10-13")
    const h_11_14 = document.getElementsByClassName("h-11-14")
    const h_12_15 = document.getElementsByClassName("h-12-15")
    const h_13_16 = document.getElementsByClassName("h-13-16")
    const h_14_17 = document.getElementsByClassName("h-14-17")
    const h_15_18 = document.getElementsByClassName("h-15-18")
    const h_16_19 = document.getElementsByClassName("h-16-19")
    const h_17_20 = document.getElementsByClassName("h-17-20")
    const h_18_21 = document.getElementsByClassName("h-18-21")
    const h_19_22 = document.getElementsByClassName("h-19-22")
    const h_20_23 = document.getElementsByClassName("h-20-23")
    const h_21_24 = document.getElementsByClassName("h-21-24")
    const h_22_25 = document.getElementsByClassName("h-22-25")
    const h_23_26 = document.getElementsByClassName("h-23-26")
    const h_24_27 = document.getElementsByClassName("h-24-27")
    const h_25_28 = document.getElementsByClassName("h-25-28")
    const h_26_29 = document.getElementsByClassName("h-26-29")
    const h_27_30 = document.getElementsByClassName("h-27-30")
    const h_28_31 = document.getElementsByClassName("h-28-31")
    const h_29_32 = document.getElementsByClassName("h-29-32")
    const h_30_33 = document.getElementsByClassName("h-30-33")
    const h_31_34 = document.getElementsByClassName("h-31-34")
    const h_32_35 = document.getElementsByClassName("h-32-35")
    const h_33_36 = document.getElementsByClassName("h-33-36")
    const h_1_2 = document.getElementsByClassName("h-1-2")
    const h_2_3 = document.getElementsByClassName("h-2-3")
    const h_4_5 = document.getElementsByClassName("h-4-5")
    const h_5_6 = document.getElementsByClassName("h-5-6")
    const h_7_8 = document.getElementsByClassName("h-7-8")
    const h_8_9 = document.getElementsByClassName("h-8-9")
    const h_10_11 = document.getElementsByClassName("h-10-11")
    const h_11_12 = document.getElementsByClassName("h-11-12")
    const h_13_14 = document.getElementsByClassName("h-13-14")
    const h_14_15 = document.getElementsByClassName("h-14-15")
    const h_16_17 = document.getElementsByClassName("h-16-17")
    const h_17_18 = document.getElementsByClassName("h-17-18")
    const h_19_20 = document.getElementsByClassName("h-19-20")
    const h_20_21 = document.getElementsByClassName("h-20-21")
    const h_22_23 = document.getElementsByClassName("h-22-23")
    const h_23_24 = document.getElementsByClassName("h-23-24")
    const h_25_26 = document.getElementsByClassName("h-25-26")
    const h_26_27 = document.getElementsByClassName("h-26-27")
    const h_28_29 = document.getElementsByClassName("h-28-29")
    const h_29_30 = document.getElementsByClassName("h-29-30")
    const h_31_32 = document.getElementsByClassName("h-31-32")
    const h_32_33 = document.getElementsByClassName("h-32-33")
    const h_34_35 = document.getElementsByClassName("h-34-35")
    const h_35_36 = document.getElementsByClassName("h-35-36")

    for (let i = 0; i < h_0_1.length; i++) {
        h_0_1[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: h-0-1'
                pickedNumber = 'h-0-1'
            }
        })
    }

    for (let i = 0; i < h_0_2.length; i++) {
        h_0_2[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: h-0-2'
                pickedNumber = 'h-0-2'
            }
        })
    }

    for (let i = 0; i < h_0_3.length; i++) {
        h_0_3[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: h-0-3'
                pickedNumber = 'h-0-3'
            }
        })
    }

    
}

function setEventsForQuarters() {

    const q_0_1_2 = document.getElementsByClassName("q-0-1-2")
    const q_0_2_3 = document.getElementsByClassName("q-0-2-3")
    const q_2_4 = document.getElementsByClassName("q-2-4")
    const q_3_5 = document.getElementsByClassName("q-3-5")
    const q_5_7 = document.getElementsByClassName("q-5-7")
    const q_6_8 = document.getElementsByClassName("q-6-8")
    const q_8_10 = document.getElementsByClassName("q-8-10")
    const q_9_11 = document.getElementsByClassName("q-9-11")
    const q_11_13 = document.getElementsByClassName("q-11-13")
    const q_12_14 = document.getElementsByClassName("q-12-14")
    const q_14_16 = document.getElementsByClassName("q-14-16")
    const q_15_17 = document.getElementsByClassName("q-15-17")
    const q_17_19 = document.getElementsByClassName("q-17-19")
    const q_18_20 = document.getElementsByClassName("q-18-20")
    const q_20_22 = document.getElementsByClassName("q-20-22")
    const q_21_23= document.getElementsByClassName("q-21-23")
    const q_23_25 = document.getElementsByClassName("q-23-25")
    const q_24_26 = document.getElementsByClassName("q-24-26")
    const q_26_28 = document.getElementsByClassName("q-26-28")
    const q_27_29 = document.getElementsByClassName("q-27-29")
    const q_29_31 = document.getElementsByClassName("q-29-31")
    const q_30_32 = document.getElementsByClassName("q-30-32")
    const q_32_34 = document.getElementsByClassName("q-32-34")
    const q_33_35 = document.getElementsByClassName("q-33-35")


    for (let i = 0; i < q_0_1_2.length; i++) {
        q_0_1_2[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-0-1-2'
                pickedNumber = 'q-0-1-2'
            }
        })
    }

    for (let i = 0; i < q_0_2_3.length; i++) {
        q_0_2_3[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-0-2-3'
                pickedNumber = 'q-0-2-3'
            }
        })
    }

    for (let i = 0; i < q_2_4.length; i++) {
        q_2_4[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-2-4'
                pickedNumber = 'q-2-4'
            }
        })
    }

    for (let i = 0; i < q_3_5.length; i++) {
        q_3_5[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-3-5'
                pickedNumber = 'q-3-5'
            }
        })
    }

    for (let i = 0; i < q_5_7.length; i++) {
        q_5_7[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-5-7'
                pickedNumber = 'q-5-7'
            }
        })
    }

    for (let i = 0; i < q_6_8.length; i++) {
        q_6_8[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-6-8'
                pickedNumber = 'q-6-8'
            }
        })
    }

    for (let i = 0; i < q_8_10.length; i++) {
        q_8_10[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-8-10'
                pickedNumber = 'q-8-10'
            }
        })
    }

    for (let i = 0; i < q_9_11.length; i++) {
        q_9_11[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-9-11'
                pickedNumber = 'q-9-11'
            }
        })
    }

    for (let i = 0; i < q_11_13.length; i++) {
        q_11_13[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-11-13'
                pickedNumber = 'q-11-13'
            }
        })
    }

    for (let i = 0; i < q_12_14.length; i++) {
        q_12_14[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-12-14'
                pickedNumber = 'q-12-14'
            }
        })
    }

    for (let i = 0; i < q_14_16.length; i++) {
        q_14_16[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-14-16'
                pickedNumber = 'q-14-16'
            }
        })
    }

    for (let i = 0; i < q_15_17.length; i++) {
        q_15_17[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-15-17'
                pickedNumber = 'q-15-17'
            }
        })
    }

    for (let i = 0; i < q_17_19.length; i++) {
        q_17_19[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-17-19'
                pickedNumber = 'q-17-19'
            }
        })
    }

    for (let i = 0; i < q_18_20.length; i++) {
        q_18_20[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-18-20'
                pickedNumber = 'q-18-20'
            }
        })
    }

    for (let i = 0; i < q_20_22.length; i++) {
        q_20_22[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-20-22'
                pickedNumber = 'q-20-22'
            }
        })
    }

    for (let i = 0; i < q_21_23.length; i++) {
        q_21_23[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-21-23'
                pickedNumber = 'q-21-23'
            }
        })
    }

    for (let i = 0; i < q_23_25.length; i++) {
        q_23_25[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-23-25'
                pickedNumber = 'q-23-25'
            }
        })
    }

    for (let i = 0; i < q_24_26.length; i++) {
        q_24_26[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-24-26'
                pickedNumber = 'q-24-26'
            }
        })
    }

    for (let i = 0; i < q_26_28.length; i++) {
        q_26_28[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-26-28'
                pickedNumber = 'q-0-1-2'
            }
        })
    }

    for (let i = 0; i < q_27_29.length; i++) {
        q_27_29[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-27-29'
                pickedNumber = 'q-27-29'
            }
        })
    }

    for (let i = 0; i < q_29_31.length; i++) {
        q_29_31[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-29-31'
                pickedNumber = 'q-29-31'
            }
        })
    }

    for (let i = 0; i < q_30_32.length; i++) {
        q_30_32[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-30-32'
                pickedNumber = 'q-30-32'
            }
        })
    }

    for (let i = 0; i < q_32_34.length; i++) {
        q_32_34[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-32-34'
                pickedNumber = 'q-32-34'
            }
        })
    }

    for (let i = 0; i < q_33_35.length; i++) {
        q_33_35[i].addEventListener("click", function() {
            if (running === false) {
                text.textContent = 'You picked: q-33-35'
                pickedNumber = 'q-33-35'
            }
        })
    }
}

function setEventsForSections() {

    const _1to18 = document.getElementById("1to18")
    const _19to36 = document.getElementById("19to36")
    const redSection = document.getElementById("red")
    const blackSection = document.getElementById("black")
    const evenSection = document.getElementById("even")
    const oddSection = document.getElementById("odd")

    evenSection.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Even'
            pickedNumber = 'even'
        }
    })

    oddSection.addEventListener("click", function() {
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

    redSection.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Red'
            pickedNumber = 'red'
        }
    })

    blackSection.addEventListener("click", function() {
        if (running === false) {
            text.textContent = 'You picked: Black'
            pickedNumber = 'black'
        }
    })
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

function setEventsForBoard() {
    setEventsForNumbers()
    setEventsForQuarters()
    setEventsForHalves()
    setEventsForSections()
    setEventsForThirds()
}



/* MAIN */


setEventsForBoard()
