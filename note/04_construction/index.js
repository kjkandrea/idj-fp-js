import util from './util.js'

const entries = [util]

const run = chapter => () => { entries[chapter]() }

export default run(0)