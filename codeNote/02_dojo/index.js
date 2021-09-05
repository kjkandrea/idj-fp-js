import firstClassFunction from './01_fisrtClassFunction.js'
import closure from './02_00_closure.js'
import usefulClosure from './02_01_usefulClosure.js'
import highOrderFunction from './03_highOrderFunction.js'

const entries = [
  firstClassFunction,
  closure,
  usefulClosure,
  highOrderFunction
]

const run = chapter => entries[chapter]()

function main () {
  run(3)
}

export default main