import {Placement} from '../interfaces'

export function getStartingAdventurerPlacementByDegrees(degrees: number): Placement {
  switch (degrees) {
    case 10: return {id: 1, x: 0, y: 1}
    case 20: return {id: 2, x: 0, y: 2}
    case 30: return {id: 3, x: 0, y: 3}
    case 40: return {id: 4, x: 0, y: 4}
    case 50: return {id: 5, x: 0, y: 5}
    case 60: return {id: 6, x: 1, y: 6}
    case 70: return {id: 7, x: 2, y: 6}
    case 80: return {id: 8, x: 3, y: 6}
    case 90: return {id: 9, x: 4, y: 6}
    case 100: return {id: 10, x: 5, y: 6}
    case 110: return {id: 11, x: 6, y: 6}
    default: return undefined
  }
}

export function getTemplePlacementByDegrees(degrees: number): Placement {
  switch (degrees) {
    case 10: return {id: 1, x: 1, y: 0}
    case 20: return {id: 2, x: 2, y: 0}
    case 30: return {id: 3, x: 3, y: 0}
    case 40: return {id: 4, x: 4, y: 0}
    case 50: return {id: 5, x: 5, y: 0}
    case 60: return {id: 6, x: 6, y: 0}
    case 70: return {id: 7, x: 7, y: 0}
    case 80: return {id: 8, x: 7, y: 1}
    case 90: return {id: 9, x: 7, y: 2}
    case 100: return {id: 10, x: 7, y: 3}
    case 110: return {id: 11, x: 7, y: 4}
    default: return undefined
  }
}
