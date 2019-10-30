export default class Subtraction {
    constructor() {
        this.operator = '-'
    }
    
    check(solution, current, max) {
        return max - current === solution
    }

}