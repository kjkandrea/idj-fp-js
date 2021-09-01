import addMaker from './01_addMaker.js'
// import './02_filterOldWay.js'
import filterFpWay from './02_filterFpWay.js'

const entries = [
  addMaker,
  filterFpWay
]

const run = chapter => entries[chapter]()

function main() {
  run(1)
}

export default main;