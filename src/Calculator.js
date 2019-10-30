export default class Calculator {
    constructor(operation) {
        this.operation = operation
        this._max = max
        this.current = null
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

    // Bridged
    check(value) {
        console.log("checking solution %d", value)
        return this.operation.check(value, this.current, this._max)
    }

    get operator() {
        return this.operation.operator
    }

}