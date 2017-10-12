import {Player, TilePlacement, Tile, Adventurers} from './interfaces'
import {getTileById} from './functions/tiles'
import {getStartingAdventurerPlacementByDegrees, getTemplePlacementByDegrees} from './functions/startingPositions'

const adventurerPositions = [50, 20, 30, 90]
const templePositions = [80, 110, 10, 20]

export const dummyPlayerData: Array<Player> = [
  {
    id: 1,
    adventurers: [
      {
        id: 1,
        gems: [],
        reward: 0,
        position: getStartingAdventurerPlacementByDegrees(adventurerPositions[0]),
        startingPosition: adventurerPositions[0]
      },
      {
        id: 2,
        gems: [],
        reward: 0,
        position: getStartingAdventurerPlacementByDegrees(adventurerPositions[1]),
        startingPosition: adventurerPositions[1]
      },
      {
        id: 3,
        gems: [],
        reward: 0,
        position: getStartingAdventurerPlacementByDegrees(adventurerPositions[2]),
        startingPosition: adventurerPositions[2]
      },
      {
        id: 4,
        gems: [],
        reward: 0,
        position: getStartingAdventurerPlacementByDegrees(adventurerPositions[3]),
        startingPosition: adventurerPositions[3]
      }
    ],
    tilePlacements: [{tile: getTileById(1), x: 3, y: 4}, {tile: getTileById(2), x: 1, y: 4}, {tile: getTileById(3), x: 1, y: 1}]
  },
]

export const dummyTemplePlacements: Array<TilePlacement> = [
  getTemplePlacementByDegrees(adventurerPositions[0]),
  getTemplePlacementByDegrees(adventurerPositions[1]),
  getTemplePlacementByDegrees(adventurerPositions[2]),
  getTemplePlacementByDegrees(adventurerPositions[3]),
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