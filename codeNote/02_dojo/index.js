import firstClassFunction from './01_fisrtClassFunction.js'
import closure from './02_00_closure.js'
import usefulClosure from './02_01_usefulClosure.js'
import highOrderFunction from './03_highOrderFunction.js'
import partialApplication from './03_01_partialApplication.js'
import ninjaCode from './04_ninjaCode.js'

const entries = [
  firstClassFunction,
  closure,
  usefulClosure,
  highOrderFunction,
  partialApplication,
  ninjaCode
]

const run = chapter => entries[chapter]()

function main () {
  run(5)
}

export default main