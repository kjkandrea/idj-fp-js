import firstClassFunction from './01_fisrtClassFunction.js';

const entries = [
  firstClassFunction
]

const run = chapter => entries[chapter]()

function main () {
  run(0)
}

export default main