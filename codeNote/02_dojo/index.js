import firstClassFunction from './01_fisrtClassFunction.js'
import closure from './02_00_closure.js'
import usefulClosure from './02_01_usefulClosure.js'

const entries = [
  firstClassFunction,
  closure,
  usefulClosure
]

const run = chapter => entries[chapter]()

function main () {
  run(2)
}

export default main