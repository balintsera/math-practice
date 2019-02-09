class Division {
    constructor(max) {
        this.max = max
        this.current = null
    }

    get next() {
        this.current = Math.floor(this.getRandomArbitrary())
        return this.current
    }

    getRandomArbitrary() {
        return Math.random() * (this.max - 0) + 0;
    }

    check(solution) {
        return this.current + solution === this.max
    }
}

export default Division