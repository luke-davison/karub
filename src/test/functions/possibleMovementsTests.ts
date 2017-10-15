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
  it('...containing adjacent tile that is connected by a path to west', () => {
    const startingTile = {x: 2, y: 1, tile: getTileById(2)}
    const neighbouringTile = {x: 1, y: 1, tile: getTileById(1)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
  })
  it('...containing adjacent tile that is connected by a path to north', () => {
    const startingTile = {x: 1, y: 2, tile: getTileById(18)}
    const neighbouringTile = {x: 1, y: 1, tile: getTileById(5)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
  })
  it('...containing adjacent tiles that are connected in all directions', () => {
    const startingTile = {x: 2, y: 2, tile: getTileById(8)}
    const neighbouringTileNorth = {x: 2, y: 1, tile: getTileById(5)}
    const neighbouringTileWest = {x: 3, y: 2, tile: getTileById(24)}
    const neighbouringTileSouth = {x: 2, y: 3, tile: getTileById(34)}
    const neighbouringTileEast = {x: 1, y: 2, tile: getTileById(16)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTileNorth, neighbouringTileWest, neighbouringTileSouth, neighbouringTileEast], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTileNorth)
    expect(result).to.include(neighbouringTileWest)
    expect(result).to.include(neighbouringTileSouth)
    expect(result).to.include(neighbouringTileEast)
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
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway1 = {x: 3, y: 1, tile: getTileById(2)}
    const tileTwoStepsAway2 = {x: 2, y: 2, tile: getTileById(9)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile, tileTwoStepsAway1, tileTwoStepsAway2], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway1)
    expect(result).to.include(tileTwoStepsAway2)
  })
  it('...not contain tiles two steps away where tile inbetween is missing', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(2)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, tileTwoStepsAway], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.not.include(tileTwoStepsAway)
  })
  it('...contain tiles three steps away connected by path when movement is three', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(2)}
    const tileThreeStepsAway = {x: 4, y: 1, tile: getTileById(10)}
    const result = getPossibleMovements(startingTile, 3, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway)
    expect(result).to.include(tileThreeStepsAway)
  })
  it('...not contain tiles three steps away connected by path when movement is two', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(2)}
    const tileThreeStepsAway = {x: 4, y: 1, tile: getTileById(10)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway)
    expect(result).to.not.include(tileThreeStepsAway)
  })
  it('...contain tiles four steps away connected by path when movement is four', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(25)}
    const tileThreeStepsAway = {x: 3, y: 2, tile: getTileById(23)}
    const tileFourStepsAway = {x: 3, y: 3, tile: getTileById(24)}
    const result = getPossibleMovements(startingTile, 4, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway, tileFourStepsAway], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway)
    expect(result).to.include(tileThreeStepsAway)
    expect(result).to.include(tileFourStepsAway)
  })
  it('...not contain tiles four steps away connected by path when movement is three', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(25)}
    const tileThreeStepsAway = {x: 3, y: 2, tile: getTileById(23)}
    const tileFourStepsAway = {x: 3, y: 3, tile: getTileById(24)}
    const result = getPossibleMovements(startingTile, 3, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway, tileFourStepsAway], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway)
    expect(result).to.include(tileThreeStepsAway)
    expect(result).to.not.include(tileFourStepsAway)
  })
  it('...not containing adjacent tile that contains another adventurer', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(2)}
    const result = getPossibleMovements(startingTile, 2, [startingTile, neighbouringTile], {x: 0, y: 0}, [{x: 2, y: 1}])
    expect(result).to.include(startingTile)
    expect(result).to.not.include(neighbouringTile)
  })
  it('...not contain tiles four steps away that are blocked by an adventurer three steps away', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(25)}
    const tileThreeStepsAway = {x: 3, y: 2, tile: getTileById(23)}
    const tileFourStepsAway = {x: 3, y: 3, tile: getTileById(24)}
    const result = getPossibleMovements(startingTile, 4, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway, tileFourStepsAway], {x: 0, y: 0}, [{x: 3, y: 2}])
    expect(result).to.include(startingTile)
    expect(result).to.include(neighbouringTile)
    expect(result).to.include(tileTwoStepsAway)
    expect(result).to.not.include(tileThreeStepsAway)
    expect(result).to.not.include(tileFourStepsAway)
  })
  it('...containing temple space tile that is connected by a path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(7)}
    const temple = {x: 1, y: 0}
    const result = getPossibleMovements(startingTile, 2, [startingTile], temple, [])
    expect(result).to.include(startingTile)
    expect(result).to.include(temple)
  })
  it('...not containing temple space tile that is not connected by a path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(7)}
    const temple = {x: 2, y: 0}
    const result = getPossibleMovements(startingTile, 2, [startingTile], temple, [])
    expect(result).to.include(startingTile)
    expect(result).to.not.include(temple)
  })
  it('...not containing empty space tile that is connected by a path', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(7)}
    const emptySpace = {x: 1, y: 0}
    const result = getPossibleMovements(startingTile, 2, [startingTile], {x: 0, y: 0}, [])
    expect(result).to.include(startingTile)
    expect(result).to.not.include(emptySpace)
    expect(result.length).to.eql(1)
  })
  it('...contain correct number of tiles in the array', () => {
    // the setup is identical to test tiltled "...not contain tiles four steps away that are blocked by an adventurer three steps away"
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const neighbouringTile = {x: 2, y: 1, tile: getTileById(8)}
    const tileTwoStepsAway = {x: 3, y: 1, tile: getTileById(25)}
    const tileThreeStepsAway = {x: 3, y: 2, tile: getTileById(23)}
    const tileFourStepsAway = {x: 3, y: 3, tile: getTileById(24)}
    const result = getPossibleMovements(startingTile, 4, [startingTile, neighbouringTile, tileTwoStepsAway, tileThreeStepsAway, tileFourStepsAway], {x: 0, y: 0}, [{x: 3, y: 2}])
    expect(result.length).to.eql(3)
  })
})