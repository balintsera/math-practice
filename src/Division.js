class Division {
    constructor(max) {
        this._max = max
        this.current = null
        this.operation = '-'
    }

    get next() {
        this.current = Math.floor(this.getRandomArbitrary())
        return this.current
    }

    set max(max) {
        this._max = parseInt(max, 10)
    }

    getRandomArbitrary() {
        return Math.random() * (this._max - 0) + 0;
    }

    check(solution, operand) {
        switch(operand) {
            case '+':
                return this.checkAddition(solution)
            
            case '-':
                return this.checkSubtraction(solution)
        }

    }

    checkAddition(solution) {
        return this.current + solution === this._max
    }

    checkSubtraction(solution) {
      return this._max - this.current === solution
    }
}

export default Division