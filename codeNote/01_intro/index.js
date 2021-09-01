import addMaker from './01_addMaker.js'

const entries = [
  addMaker
]

const run = chapter => entries[chapter]()

function main() {
  run(0)
}

export default main;