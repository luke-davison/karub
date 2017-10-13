"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiles_1 = require("./functions/tiles");
const startingPositions_1 = require("./functions/startingPositions");
const adventurerPositions = [50, 20, 30, 90];
const templePositions = [80, 110, 10, 20];
exports.dummyPlayerData = [
    {
        id: 1,
        adventurers: [
            {
                id: 1,
                gems: [],
                reward: 0,
                position: startingPositions_1.getStartingAdventurerPlacementByDegrees(adventurerPositions[0]),
                startingPosition: adventurerPositions[0]
            },
            {
                id: 2,
                gems: [],
                reward: 0,
                position: startingPositions_1.getStartingAdventurerPlacementByDegrees(adventurerPositions[1]),
                startingPosition: adventurerPositions[1]
            },
            {
                id: 3,
                gems: [],
                reward: 0,
                position: startingPositions_1.getStartingAdventurerPlacementByDegrees(adventurerPositions[2]),
                startingPosition: adventurerPositions[2]
            },
            {
                id: 4,
                gems: [],
                reward: 0,
                position: startingPositions_1.getStartingAdventurerPlacementByDegrees(adventurerPositions[3]),
                startingPosition: adventurerPositions[3]
            }
        ],
        tilePlacements: [{ tile: tiles_1.getTileById(1), x: 3, y: 4 }, { tile: tiles_1.getTileById(2), x: 1, y: 4 }, { tile: tiles_1.getTileById(3), x: 1, y: 1 }]
    },
];
exports.dummyTemplePlacements = [
    startingPositions_1.getTemplePlacementByDegrees(adventurerPositions[0]),
    startingPositions_1.getTemplePlacementByDegrees(adventurerPositions[1]),
    startingPositions_1.getTemplePlacementByDegrees(adventurerPositions[2]),
    startingPositions_1.getTemplePlacementByDegrees(adventurerPositions[3]),
];
exports.dummyRemainingTiles = [
    tiles_1.getTileById(4),
    tiles_1.getTileById(5),
    tiles_1.getTileById(6),
    tiles_1.getTileById(7),
    tiles_1.getTileById(8),
    tiles_1.getTileById(9),
    tiles_1.getTileById(10),
    tiles_1.getTileById(11),
    tiles_1.getTileById(12),
    tiles_1.getTileById(13),
    tiles_1.getTileById(14),
    tiles_1.getTileById(15),
    tiles_1.getTileById(16),
    tiles_1.getTileById(18),
    tiles_1.getTileById(19),
    tiles_1.getTileById(20),
    tiles_1.getTileById(21),
    tiles_1.getTileById(22),
    tiles_1.getTileById(23),
    tiles_1.getTileById(24),
    tiles_1.getTileById(25),
    tiles_1.getTileById(26),
    tiles_1.getTileById(27),
    tiles_1.getTileById(28),
    tiles_1.getTileById(29),
    tiles_1.getTileById(30),
    tiles_1.getTileById(31),
    tiles_1.getTileById(32),
    tiles_1.getTileById(33),
    tiles_1.getTileById(34),
    tiles_1.getTileById(35),
    tiles_1.getTileById(36)
];
exports.dummyCurrentPlacement = { tile: tiles_1.getTileById(17), x: 0, y: 0 };
