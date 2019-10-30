export default class Addition {
    constructor() {
        this.operator = '+'
    }
    
    check(solution, current, max) {
        return current + solution === max
    }

    next(max) {
        return Math.floor(this.getRandomArbitrary(max))
    }

    getRandomArbitrary(max) {
        return Math.random() * (max - 0) + 0;
    }
}