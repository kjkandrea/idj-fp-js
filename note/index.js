import intro from './01_intro/index.js'
import dojo from './02_dojo/index.js'
import underscore from './03_underscore/index.js'
import construction from './04_construction/index.js'

const entries = [
  intro,
  dojo,
  underscore,
  construction
]

const run = chapter => entries[chapter]()

run(3)