export default class Subtraction {
    constructor() {
        this.operator = '-'
    }
    
    check(solution, current, max) {
        return max - current === solution
    }
    
    next(max) {
        this.current = Math.floor(this.getRandomArbitrary(max))
        return this.current
    }

    getRandomArbitrary(max) {
        return Math.random() * (max - 0) + 0;
    }
}