import {TilePlacement} from '../interfaces'

export function getPossibleMovements(startingPlacement: TilePlacement, maxDistance: number, tilesPlaced: Array<TilePlacement>, otherAdventurers: Array<TilePlacement>): Array<TilePlacement> {
  const possibleMovements: Array<TilePlacement> = [startingPlacement]
  
  return possibleMovements
}