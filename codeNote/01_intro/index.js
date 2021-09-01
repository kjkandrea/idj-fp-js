import addMaker from './01_addMaker.js'
import filterFpWay from './02_filterFpWay.js'
import higherOrderFunction from './02_1_higherOrderFunction.js'
import findIndex from './02_2_findIndex.js'

// import './02_filterOldWay.js'

const entries = [
  addMaker,
  filterFpWay,
  higherOrderFunction,
  findIndex
]

const run = chapter => entries[chapter]()

function main () {
  run(1)
}

export default main