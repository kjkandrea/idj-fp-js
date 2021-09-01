import addMaker from './01_addMaker.js'
// import './02_filterOldWay.js'
import filterFpWay from './02_filterFpWay.js'
import predicate from './02_1_predicate.js'

const entries = [
  addMaker,
  filterFpWay,
  predicate
]

const run = chapter => entries[chapter]()

function main() {
  run(2)
}

export default main;