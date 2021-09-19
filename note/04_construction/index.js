import util from './util.js'
import partial from './partial.js'
import compose from './compose.js'

const entries = [util, partial, compose]

const run = chapter => () => { entries[chapter]() }

export default run(2)