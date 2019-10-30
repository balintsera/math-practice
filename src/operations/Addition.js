export default class Addition {
    constructor() {
        this.operator = '+'
    }
    
    check(solution, current, max) {
        return current + solution === max
    }

}