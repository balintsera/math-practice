import Division from './src/Division.js'
import Display from './src/Display.js'

const MAX = 9

const display = new Display("root")
const div = new Division(MAX)

console.log(div.next)
for (let i = 0; i < 9; i++) {
    const next = div.next
    console.log(next)
    display.next(next, MAX)
}

