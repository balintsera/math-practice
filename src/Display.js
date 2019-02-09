class Display {
    constructor(root) {
        this.root = document.getElementById(root)
        this.buttonsId = 'buttons'
        this.buttonTemplate = '<button class="button is-primary is-large" data-value="%d">%d</button>&nbsp'
        this.eventName = 'solution'
        this.solutionCb = null
        this.resultID = 'result'
        this.result = document.getElementById(this.resultID)

        this.addButtonsParent()
        this.updateButtons()
        this.addEventListener()
    }

    onSolution(callback) {
        this.solutionCb = callback
    }
    addButtonsParent() {
        this.root.insertAdjacentHTML('afterend', '<div class="column" id="'+this.buttonsId+'"></div>')
        this.buttonsParent = document.getElementById(this.buttonsId)
    }

    addEventListener() {
        this.buttonsParent.addEventListener('click', (payload) => {
            const value = payload.target.getAttribute('data-value')
            this.solutionCb(value)
        })
    }

    showSuccess() {
        this.result.innerText += "🦄"
    }

    showFail() {
        this.result.innerText += "🍄"
    }

    updateButtons(max) {
        let buttons = ""
        for (let i=1; i<= max; i++) {
            buttons += this.buttonTemplate.replace(/%d/g, i)
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