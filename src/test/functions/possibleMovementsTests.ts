import 'mocha'
import {expect} from 'chai'

import {getPossibleMovements} from '../../functions/possibleMovements'
import {getTileById} from '../../functions/tiles'

describe('getPossibleMovements', () => {
  it('returns an array', () => {
    const startingTile = {x: 1, y: 1, tile: getTileById(1)}
    const result = getPossibleMovements(startingTile, 2, [], {x: 0, y: 0}, [])
    expect(result).to.eql([startingTile])
  })
})