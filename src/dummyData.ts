import {Player, Placement, Tile} from './interfaces'
import {getTileById} from './functions/tiles'

export const dummyAdventurerPositions: Array<Placement> = [
  {id: 0, x: 0, y: 1},
  {id: 1, x: 0, y: 2},
  {id: 2, x: 0, y: 3},
  {id: 3, x: 0, y: 4},
]

export const dummyPlayerData: Array<Player> = [
  {
    id: 1,
    adventurers: [
      {
        id: 0,
        gems: [],
        reward: 0,
        adventurerPosition: dummyAdventurerPositions[0]
      },
      {
        id: 1,
        gems: [],
        reward: 0,
        adventurerPosition: dummyAdventurerPositions[1]
      },
      {
        id: 2,
        gems: [],
        reward: 0,
        adventurerPosition: dummyAdventurerPositions[2]
      },
      {
        id: 3,
        gems: [],
        reward: 0,
        adventurerPosition: dummyAdventurerPositions[3]
      }
    ],
    tilePlacements: [{tile: getTileById(1), x: 3, y: 4}, {tile: getTileById(2), x: 1, y: 4}, {tile: getTileById(3), x: 1, y: 1}]
  },
]

export const dummyTemplePlacements: Array<Placement> = [
  {id: 0, x: 1, y: 0},
  {id: 1, x: 2, y: 0},
  {id: 2, x: 3, y: 0},
  {id: 3, x: 4, y: 0},
]

export const dummyRemainingTiles: Array<Tile> = [
  getTileById(4),
  getTileById(5),
  getTileById(6),
  getTileById(7),
  getTileById(8),
  getTileById(9),
  getTileById(10),
  getTileById(11),
  getTileById(12),
  getTileById(13),
  getTileById(14),
  getTileById(15),
  getTileById(16),
  getTileById(18),
  getTileById(19),
  getTileById(20),
  getTileById(21),
  getTileById(22),
  getTileById(23),
  getTileById(24),
  getTileById(25),
  getTileById(26),
  getTileById(27),
  getTileById(28),
  getTileById(29),
  getTileById(30),
  getTileById(31),
  getTileById(32),
  getTileById(33),
  getTileById(34),
  getTileById(35),
  getTileById(36)
]

export const dummyCurrentPlacement = {tile: getTileById(17), x: 0, y: 0}