"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPossibleMovements(startingPlacement, maxDistance, tilesPlaced, temple, otherAdventurers) {
    const possibleMovements = [startingPlacement];
    let unexploredMovements = [startingPlacement];
    for (let distance = 1; distance <= maxDistance; distance += 1) {
        const newPositions = [];
        unexploredMovements.forEach((currentPosition) => {
            const nearbyPositions = getNearbyPositions(currentPosition);
            nearbyPositions.forEach((nearbyPosition) => {
                if (pathsAreValid(currentPosition, nearbyPosition)) {
                    possibleMovements.push(nearbyPosition);
                    newPositions.push(nearbyPosition);
                }
            });
        });
        unexploredMovements = newPositions;
    }
    return possibleMovements;
    function getNearbyPositions(currentPosition) {
        const positions = [];
        tilesPlaced.forEach(tile => {
            if (isNearby(tile)) {
                if (!otherAdventurers.find(adventurer => adventurer.x === tile.x && adventurer.y === tile.y)) {
                    positions.push(tile);
                }
            }
        });
        if (isNearby(temple)) {
            positions.push(temple);
        }
        return positions;
        function isNearby(tile) {
            return ((tile.x === currentPosition.x && Math.abs(tile.y - currentPosition.y) === 1) || (tile.y === currentPosition.y && Math.abs(tile.x - currentPosition.x) === 1));
        }
    }
}
exports.getPossibleMovements = getPossibleMovements;
function pathsAreValid(currentPosition, nearbyPosition) {
    if (currentPosition.x > nearbyPosition.x) {
        if ((currentPosition.tile.paths.find(path => path === 3) && nearbyPosition.x === 0) || (currentPosition.tile.paths.find(path => path === 3) && nearbyPosition.tile.paths.find(path => path === 1))) {
            return true;
        }
    }
    if (currentPosition.x < nearbyPosition.x) {
        if ((currentPosition.tile.paths.find(path => path === 1) && nearbyPosition.x === 7) || (currentPosition.tile.paths.find(path => path === 1) && nearbyPosition.tile.paths.find(path => path === 3))) {
            return true;
        }
    }
    if (currentPosition.y > nearbyPosition.y) {
        if ((currentPosition.tile.paths.find(path => path === 2) && nearbyPosition.y === 0) || (currentPosition.tile.paths.find(path => path === 2) && nearbyPosition.tile.paths.find(path => path === 0))) {
            return true;
        }
    }
    if (currentPosition.y < nearbyPosition.y) {
        if ((currentPosition.tile.paths.find(path => path === 0) && nearbyPosition.y === 6) || (currentPosition.tile.paths.find(path => path === 0) && nearbyPosition.tile.paths.find(path => path === 2))) {
            return true;
        }
    }
    return false;
}
