import util from './util.js'
import partial from './partial.js'
import compose from './compose.js'
import yPartial from './y-partial.js'

const entries = [util, partial, compose, yPartial]

const run = chapter => () => { entries[chapter]() }

export default run(3)