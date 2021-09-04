import intro from './01_intro/index.js'
import dojo from './02_dojo/index.js'

const entries = [
  intro,
  dojo
]

const run = chapter => entries[chapter]()

run(1)