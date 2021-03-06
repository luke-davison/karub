import {IPosition} from '../interfaces'

export function getPossibleMovements(startingPlacement: IPosition, maxDistance: number, tilesPlaced: Array<IPosition>, temple: IPosition, otherAdventurers: Array<IPosition>): Array<IPosition> {
  const possibleMovements: Array<IPosition> = [startingPlacement]
  // let unexploredMovements: Array<IPosition> = [startingPlacement]

  // for (let distance: number = 1; distance <= maxDistance; distance += 1 ) {
  //   const newPositions: Array<IPosition> = []
  //   unexploredMovements.forEach((currentPosition: IPosition) => {
  //     const nearbyPositions = getNearbyPositions(currentPosition)
  //     nearbyPositions.forEach((nearbyPosition: IPosition) => {
  //       if (pathsAreValid(currentPosition, nearbyPosition)) {
  //         possibleMovements.push(nearbyPosition)
  //         newPositions.push(nearbyPosition)
  //       }
  //     })
  //   })
  //   unexploredMovements = newPositions
  // }
  
  return possibleMovements

  // function getNearbyPositions(currentPosition: IPosition): Array<IPosition> {
  //   const positions: Array<IPosition> = []
  //   tilesPlaced.forEach(tile => {
  //     if (isNearby(tile)) {
  //       if (!otherAdventurers.find(adventurer => adventurer.x === tile.x && adventurer.y === tile.y)) {
  //         positions.push(tile)
  //       }
  //     }
  //   })
  //   if (isNearby(temple)) {
  //     positions.push(temple)
  //   }
  //   return positions.filter(position => !possibleMovements.find(possibleMovement => position.x === possibleMovement.x && position.y === possibleMovement.y))

  //   function isNearby(tile: IPosition) {
  //     return ((tile.x === currentPosition.x && Math.abs(tile.y - currentPosition.y) === 1) || (tile.y === currentPosition.y && Math.abs(tile.x - currentPosition.x) === 1))
  //   }
  // }
}

function pathsAreValid(currentPosition: IPosition, nearbyPosition: IPosition): boolean {
//   if (currentPosition.x > nearbyPosition.x) {
//     if ((currentPosition.tile.paths.find(path => path === 'W') && nearbyPosition.x === 0) || (currentPosition.tile.paths.find(path => path === 'W') && nearbyPosition.tile.paths.find(path => path === 'E'))) {
//       return true
//     }
//   }
//   if (currentPosition.x < nearbyPosition.x) {
//     if ((currentPosition.tile.paths.find(path => path === 'E') && nearbyPosition.x === 7) || (currentPosition.tile.paths.find(path => path === 'E') && nearbyPosition.tile.paths.find(path => path === 'W'))) {
//       return true
//     }
//   }
//   if (currentPosition.y > nearbyPosition.y) {
//     if ((currentPosition.tile.paths.find(path => path === 'N') && nearbyPosition.y === 0) || (currentPosition.tile.paths.find(path => path === 'N') && nearbyPosition.tile.paths.find(path => path === 'S'))) {
//       return true
//     }
//   }
//   if (currentPosition.y < nearbyPosition.y) {
//     if ((currentPosition.tile.paths.find(path => path === 'S') && nearbyPosition.y === 6) || (currentPosition.tile.paths.find(path => path === 'S') && nearbyPosition.tile.paths.find(path => path === 'N'))) {
//       return true
//     }
//   }
  return false
}