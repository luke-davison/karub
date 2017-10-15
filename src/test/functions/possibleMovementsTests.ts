import 'mocha'
import {expect} from 'chai'

import {getPossibleMovements} from '../../functions/possibleMovements'
import {getTileById} from '../../functions/tiles'

describe('getPossibleMovements', () => {
  it('returns an array...', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const result = getPossibleMovements(startingTile, 2, [], {x: 0, y: 0}, [])
    expect(result).to.be.an('array')
  })
  it('...containing the starting Tile', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const result = getPossibleMovements(startingTile, 2, [startingTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
  })
  it('...containing adjacent tile that is connected by a path to east', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(2)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
  })
  it('...containing adjacent tile that is connected by a path to south', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(5)}
    const neighbouringTile = {x: 1, y: 2, tile: getTileById(18)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
  })
  it('...containing adjacent tiles that are both connected by a path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(3)}
    const neighbouringTile1 = {x: 2, y: 1, tile: getTileById(2)}
    const neighbouringTile2 = {x: 1, y: 2, tile: getTileById(9)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile1, neighbouringTile2], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile1)
    expect(result).to.include(neighbouringTile2)
  })
  it('...not contain adjacent tiles that are not connected by a path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(4)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(2)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.not.include(neighbouringTile)
  })
  it('...contain tiles two steps away connected by path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(4)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway1 = {x: 3, y: 1, tile: getTileById(2)}
    const tileTwoStepsAway2 = {x: 2, y: 2, tile: getTileById(9)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile, tileTwoStepsAway1, tileTwoStepsAway2], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway1)
    expect(result).to.include(tileTwoStepsAway2)
  })
})