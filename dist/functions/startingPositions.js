"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStartingAdventurerPlacementByDegrees(degrees) {
    switch (degrees) {
        case 10: return { x: 0, y: 1 };
        case 20: return { x: 0, y: 2 };
        case 30: return { x: 0, y: 3 };
        case 40: return { x: 0, y: 4 };
        case 50: return { x: 0, y: 5 };
        case 60: return { x: 1, y: 6 };
        case 70: return { x: 2, y: 6 };
        case 80: return { x: 3, y: 6 };
        case 90: return { x: 4, y: 6 };
        case 100: return { x: 5, y: 6 };
        case 110: return { x: 6, y: 6 };
        default: return undefined;
    }
}
exports.getStartingAdventurerPlacementByDegrees = getStartingAdventurerPlacementByDegrees;
function getTemplePlacementByDegrees(degrees) {
    switch (degrees) {
        case 10: return { x: 1, y: 0 };
        case 20: return { x: 2, y: 0 };
        case 30: return { x: 3, y: 0 };
        case 40: return { x: 4, y: 0 };
        case 50: return { x: 5, y: 0 };
        case 60: return { x: 6, y: 0 };
        case 70: return { x: 7, y: 0 };
        case 80: return { x: 7, y: 1 };
        case 90: return { x: 7, y: 2 };
        case 100: return { x: 7, y: 3 };
        case 110: return { x: 7, y: 4 };
        default: return undefined;
    }
}
exports.getTemplePlacementByDegrees = getTemplePlacementByDegrees;
