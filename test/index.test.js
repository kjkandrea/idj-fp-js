import assert from 'assert'
import _ from '../note/03_underscore/underscore.js'

describe('homemade underscore...', () => {
  describe('_.map', () => {
    it('_.map([1, 2, 3], v => v * 2) === [2, 4, 6]', () => {
      assert.deepEqual(
        _.map([1, 2, 3], v => v * 2),
        [2, 4, 6],
      )
    })
  })
  describe('_.filter', () => {
    it('_.filter([1, 2, 3], v => v % 2) === [1, 3]', () => {
      assert.deepEqual(
        _.filter([1, 2, 3], v => v % 2),
        [1, 3],
      )
    })
    it('_.filter([null, undefined, NaN, \'🐕\'] === [\'🐕\']', () => {
      assert.deepEqual(
        _.filter([null, undefined, NaN, '🐕']),
        ['🐕'],
      )
    })
    it('_.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], v => v % 2, 3) === [1, 3, 5]', () => {
      assert.deepEqual(
        _.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], v => v % 2, 3),
        [1, 3, 5],
      )
    })
  })
})