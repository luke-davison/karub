import 'mocha'
import {expect} from 'chai'

import {randomiseTiles} from '../../functions/randomise'

describe('randomiseTiles', () => {
  it('returns an array', () => {
    expect(randomiseTiles()).to.be.an('array')
  })
  it('returns an array of numbers', () => {
    randomiseTiles().forEach(tile => {
      expect(tile).to.be.a('number')
    })
  })
  it('returns an array with 36 itmes', () => {
    expect(randomiseTiles().length).to.eql(36)
  })
  const allNumbers: Array<number> = []
  for (let i = 1; i <= 36; i++) {
    allNumbers.push(i)
  }
  it('returns an array with all numbers from 1 to 36', () => {
    const tiles = randomiseTiles()
    allNumbers.forEach(num => {
      
    })
  })
})