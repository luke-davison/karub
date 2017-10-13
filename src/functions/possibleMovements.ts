import {TilePlacement} from '../interfaces'

export function getPossibleMovements(startingPlacement: TilePlacement, maxDistance: number, tilesPlaced: Array<TilePlacement>, temple: TilePlacement, otherAdventurers: Array<TilePlacement>): Array<TilePlacement> {
  const possibleMovements: Array<TilePlacement> = [startingPlacement]
  let unexploredMovements: Array<TilePlacement> = [startingPlacement]

  for (let distance: number = 1; distance <= maxDistance; distance += 1 ) {
    const newPositions: Array<TilePlacement> = []
    unexploredMovements.forEach((currentPosition: TilePlacement) => {
      const nearbyPositions = getNearbyPositions(currentPosition)
      nearbyPositions.forEach((nearbyPosition: TilePlacement) => {
        if (pathsAreValid(currentPosition, nearbyPosition)) {
          possibleMovements.push(nearbyPosition)
          newPositions.push(nearbyPosition)
        }
      })
    })
    unexploredMovements = newPositions
  }
  
  return possibleMovements

  function getNearbyPositions(currentPosition: TilePlacement): Array<TilePlacement> {
    const positions: Array<TilePlacement> = []
    tilesPlaced.forEach(tile => {
      if (isNearby(tile)) {
        if (!otherAdventurers.find(adventurer => adventurer.x === tile.x && adventurer.y === tile.y)) {
          positions.push(tile)
        }
      }
    })
    if (isNearby(temple)) {
      positions.push(temple)
    }
    return positions

    function isNearby(tile: TilePlacement) {
      return ((tile.x === currentPosition.x && Math.abs(tile.y - currentPosition.y) === 1) || (tile.y === currentPosition.y && Math.abs(tile.x - currentPosition.x) === 1))
    }
  }
}

function pathsAreValid(currentPosition: TilePlacement, nearbyPosition: TilePlacement): boolean {
  if (currentPosition.x > nearbyPosition.x) {
    if ((currentPosition.tile.paths.find(path => path === 3) && nearbyPosition.x === 0) || (currentPosition.tile.paths.find(path => path === 3) && nearbyPosition.tile.paths.find(path => path === 1))) {
      return true
    }
  }
  if (currentPosition.x < nearbyPosition.x) {
    if ((currentPosition.tile.paths.find(path => path === 1) && nearbyPosition.x === 7) || (currentPosition.tile.paths.find(path => path === 1) && nearbyPosition.tile.paths.find(path => path === 3))) {
      return true
    }
  }
  if (currentPosition.y > nearbyPosition.y) {
    if ((currentPosition.tile.paths.find(path => path === 2) && nearbyPosition.y === 0) || (currentPosition.tile.paths.find(path => path === 2) && nearbyPosition.tile.paths.find(path => path === 0))) {
      return true
    }
  }
  if (currentPosition.y < nearbyPosition.y) {
    if ((currentPosition.tile.paths.find(path => path === 0) && nearbyPosition.y === 6) || (currentPosition.tile.paths.find(path => path === 0) && nearbyPosition.tile.paths.find(path => path === 2))) {
      return true
    }
  }
  return false
}