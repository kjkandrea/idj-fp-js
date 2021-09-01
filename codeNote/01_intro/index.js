import addMaker from './01_addMaker.js'
import filterFpWay from './02_filterFpWay.js'
import predicate from './02_1_predicate.js'

// import './02_filterOldWay.js'

const entries = [
  addMaker,
  filterFpWay,
  predicate
]

const run = chapter => entries[chapter]()

function main() {
  run(1)
}

export default main;