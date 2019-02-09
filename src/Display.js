class Display {
    constructor(root) {
        this.root = document.getElementById(root)
    }

    formatNumber(number, max) {
        return `${number} + ▲ = ${max}?`
    }

    showText(text) {
        this.root.innerText = text
    }

    next(num, max) {
        this.showText(this.formatNumber(num, max))
    }

}
export default Display