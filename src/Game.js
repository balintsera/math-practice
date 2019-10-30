import Calculator from './Calculator'
import Subtraction from './operations/Subtraction'
import Multiplication from './operations/Multiplication'
import Display from './Display.js'

class Game {
    constructor(root, setter) {
        this.max = 2
        this.display = new Display(root)
        const operation = new Multiplication(this.max)
        this.calculator = new Calculator(operation, this.max)
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
        this.display.updateButtons(this.calculator.availableSolutions)
    }

    start() {
        this.next()
    }
}

export default Game