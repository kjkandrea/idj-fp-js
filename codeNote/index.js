import intro from './01_intro/index.js'

const entries = [
  intro
]

const run = chapter => entries[chapter]()

// run(0)