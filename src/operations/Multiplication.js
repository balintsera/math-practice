export default class Multiplication {
    constructor(base = false) {
        this.operator = '*'
        this.base = base | 2
    }
    
    check(solution, current, max) {
        return max * current ===  solution
    }

    next(max) {
        return Math.floor(this.getRandomArbitrary(10))
    }

    getRandomArbitrary(max) {
        return Math.random() * (max - 0) + 0;
    }

    solutions(max) {
        this.base = max
        const solutions = []
        for (let i = 0; i <= this.base * 10; i += this.base) {
            solutions.push(i)
        }
        return solutions
    }
}   