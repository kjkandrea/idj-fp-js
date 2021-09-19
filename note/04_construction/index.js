import util from './util.js'
import partial from './partial.js'

const entries = [util, partial]

const run = chapter => () => { entries[chapter]() }

export default run(1)