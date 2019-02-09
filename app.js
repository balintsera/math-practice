import Division from './src/Division.js'
import Display from './src/Display.js'

const MAX = 9
const ROUNDS = 50

const display = new Display("root")
const div = new Division(MAX)

// first task
let currentTask = div.next
display.next(currentTask, MAX)
display.updateButtons(MAX)
    // next round
display.onSolution((value) => {
    console.log("solution value", value)
    // check solution
    if (currentTask === MAX - parseInt(value, 10)) {
        // OK
        display.showSuccess()
    } else {
        display.showFail()
    }

    // start next
    currentTask = div.next
    display.next(currentTask, MAX)
    display.updateButtons(MAX)
    // next round
})

