class Display {
    constructor(root) {
        this.root = document.getElementById(root)
        this.buttonsId = 'buttons'
        this.addButtonsParent()
        this.updateButtons()
        this.buttonTemplate = '<button class="button is-primary is-large">%d</button>&nbsp'
    }

    addButtonsParent() {
        this.root.insertAdjacentHTML('afterend', '<div class="column" id="'+this.buttonsId+'"></div>')
        this.buttonsParent = document.getElementById(this.buttonsId)
    }

    updateButtons(max) {
        let buttons
        for (let i=1; i<= max; i++) {
            buttons += this.buttonTemplate.replace(/%d/, i)
        }
        this.buttonsParent.innerHTML = buttons
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