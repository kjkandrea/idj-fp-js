import firstClassFunction from './01_fisrtClassFunction.js';
import closure from './02_closure.js'

const entries = [
  firstClassFunction,
  closure
]

const run = chapter => entries[chapter]()

function main () {
  run(1)
}

export default main