import {Tile} from '../interfaces'

export function getTileById(id: number): Tile {
  switch (id) {
    case 1:
      return {id, paths: ['E', 'W']}
    case 2:
      return {id, paths: ['E', 'W']}
    case 3:
      return {id, gem: 1, paths: ['E', 'S']}
    case 4:
      return {id, gem: 1, paths: ['S', 'W']}
    case 5:
      return {id, paths: ['E', 'S', 'W']}
    case 6:
      return {id, paths: ['E', 'S', 'W']}
    case 7:
      return {id, paths: ['N', 'E', 'S', 'W']}
    case 8:
      return {id, paths: ['N', 'E', 'S', 'W']}
    case 9:
      return {id, gem: 1, paths: ['N', 'E']}
    case 10:
      return {id, gem: 1, paths: ['N', 'W']}
    case 11:
      return {id, gem: 1, paths: ['N', 'E', 'W']}
    case 12:
      return {id, paths: ['N', 'E', 'W']}
    case 13:
      return {id, gem: 1, paths: ['E', 'W']}
    case 14:
      return {id, gem: 2, paths: ['E', 'W']}
    case 15:
      return {id, gem: 1, paths: ['E', 'W']}
    case 16:
      return {id, gem: 2, paths: ['E', 'W']}
    case 17:
      return {id, paths: ['N', 'S']}
    case 18:
      return {id, paths: ['N', 'S']}
    case 19:
      return {id, paths: ['E', 'W']}
    case 20:
      return {id, paths: ['E', 'W']}
    case 21:
      return {id, paths: ['E', 'S']}
    case 22:
      return {id, paths: ['S', 'W']}
    case 23:
      return {id, paths: ['N', 'E', 'S']}
    case 24:
      return {id, paths: ['N', 'S', 'W']}
    case 25:
      return {id, paths: ['N', 'E', 'S', 'W']}
    case 26:
      return {id, paths: ['N', 'E', 'S', 'W']}
    case 27:
      return {id, paths: ['N', 'E']}
    case 28:
      return {id, paths: ['N', 'W']}
    case 29:
      return {id, paths: ['N', 'E', 'S']}
    case 30:
      return {id, paths: ['N', 'S', 'W']}
    case 31:
      return {id, gem: 1, paths: ['N', 'S']}
    case 32:
      return {id, gem: 2, paths: ['N', 'S']}
    case 33:
      return {id, gem: 1, paths: ['N', 'S']}
    case 34:
      return {id, gem: 2, paths: ['N', 'S']}
    case 35:
      return {id, paths: ['N', 'S']}
    case 36:
      return {id, paths: ['N', 'S']}
    default:
      return undefined
  }
}