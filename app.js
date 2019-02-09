import Division from './src/Division.js'
import Display from './src/Display.js'

let MAX = 9

const display = new Display("root")
const division = new Division(MAX)

// first task
let currentTask
const next = () => {
    currentTask = division.next
    display.next(currentTask, MAX)
    display.updateButtons(MAX)
}

next();

display.onSolution((value) => {
    // check solution
    const isSuccess = division.check(parseInt(value, 10))
    if (isSuccess) {
        display.showSuccess()
    } else {
        display.showFail()
    }

    // next round
    next()
})

const setter = document.getElementById('max')
setter.addEventListener('change', (event) => {
    MAX = event.target.value
    division.max = MAX
    next()
})
