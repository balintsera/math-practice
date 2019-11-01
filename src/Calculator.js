export default class Calculator {
    constructor(operation, max) {
        this.operation = operation
        this._max = max
        this.current = null
    }

    get next() {
        this.current = this.operation.next(this._max)
        return this.current
    }

    set max(max) {
        this._max = parseInt(max, 10)
    }


    // Bridged
    check(value) {
        return this.operation.check(value, this.current, this._max)
    }

    get operator() {
        return this.operation.operator
    }

    get availableSolutions() { 
        return this.operation.solutions(this._max);
    }

}