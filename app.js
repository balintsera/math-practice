import Division from './src/Division.js'
import Display from './src/Display.js'

const MAX = 9

const display = new Display("root")
const division = new Division(MAX)

// first task
let currentTask = division.next
display.next(currentTask, MAX)
display.updateButtons(MAX)
    // next round
display.onSolution((value) => {
    console.log("solution value", value)
    // check solution
    console.log(division)
    const isSuccess = division.check(parseInt(value, 10))
    if (isSuccess) {
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

