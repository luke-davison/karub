import {Game} from '../interfaces'

import {randomiseStartingPlacements, randomiseTiles} from '../functions/randomise'

export function createNewGame(): Game {
  const startingPlacements = randomiseStartingPlacements()
  const tiles = randomiseTiles()
  return {
    temples: startingPlacements.temples.join(','),
    adventurers: startingPlacements.explorers.join(','),
    tiles: tiles.join(',')
  }
}
