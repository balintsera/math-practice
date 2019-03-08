import Division from './Division.js'
import Display from './Display.js'

class Game {
    constructor(root, setter) {
        this.max = 9
        this.display = new Display(root)
        this.division = new Division(this.max)
        this.currentTask = null
        this.operand = '-'
        this.display.onSolution((value) => {
            const isSuccess = this.division.check(parseInt(value, 10), this.operand)
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
            this.division.max = this.max
            this.next()
        })
    }

    next() {
        this.currentTask = this.division.next
        this.display.next(this.currentTask, this.max, this.operand)
        this.display.updateButtons(this.max)
    }

    start() {
        this.next()
    }
}

export default Game