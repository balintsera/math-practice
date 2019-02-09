import Division from './src/Division.js'
import Display from './src/Display.js'

let MAX = 9

const display = new Display("root")
const division = new Division(MAX)

// first task
let currentTask = division.next
display.next(currentTask, MAX)
display.updateButtons(MAX)
    // next round
display.onSolution((value) => {
    // check solution
    const isSuccess = division.check(parseInt(value, 10))
    if (isSuccess) {
        display.showSuccess()
    } else {
        display.showFail()
    }

    // start next
    currentTask = division.next
    display.next(currentTask, MAX)
    display.updateButtons(MAX)
    // next round
})

const sett = document.getElementById('max')
sett.addEventListener('change', (event) => {
    console.log(event.target.value)
    MAX = event.target.value
    division.max = MAX
})


