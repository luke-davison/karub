import {IGame} from '../interfaces'

import {randomiseStartingPlacements, randomiseTiles} from '../functions/randomise'

export function createNewGame(): IGame {
  const startingPlacements = randomiseStartingPlacements()
  const tiles = randomiseTiles()
  return {
    temples: startingPlacements.temples.join(','),
    adventurers: startingPlacements.explorers.join(','),
    tiles: tiles.join(',')
  }
}
