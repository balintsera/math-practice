import Calculator from './Calculator'
import Subtraction from './operations/Subtraction'
import Display from './Display.js'

class Game {
    constructor(root, setter) {
        this.max = 9
        this.display = new Display(root)
        const subtraction = new Subtraction()
        this.calculator = new Calculator(subtraction)
        this.currentTask = null
        this.display.onSolution((value) => {
            const isSuccess = this.calculator.check(parseInt(value, 10))
            if (isSuccess) {
                this.display.showSuccess()
                this.next()
            } else {
                this.display.showFail()
            }
        })
        
        this.setter = document.getElementById(setter)
        this.setter.addEventListener('change', (event) => {
            this.max = event.target.value
            this.calculator.max = this.max
            this.next()
        })
    }

    next() {
        this.currentTask = this.calculator.next
        this.display.next(this.currentTask, this.max, this.calculator.operator)
        this.display.updateButtons(this.max)
    }

    start() {
        this.next()
    }
}

export default Game