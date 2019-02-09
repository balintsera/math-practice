class Division {
    constructor(max) {
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

    check(solution) {
        console.log("checking", this.current, solution, this._max)
        const result = this.current + solution === this._max
        return result
    }
}

export default Division