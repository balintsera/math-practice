class Division {
    constructor(max) {
        this.max = max
    }

    get next() {
        return Math.floor(this.getRandomArbitrary())
    }

    getRandomArbitrary() {
        return Math.random() * (this.max - 0) + 0;
    }
}

export default Division