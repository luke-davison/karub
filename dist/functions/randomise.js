"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberOfTiles = 36;
const numberOfExplorers = 4;
const numberOfStartingPlaces = 12;
const minDistanceBetweenStartingPlaces = 30;
function randomiseTiles() {
    const sorted = [];
    for (let i = 1; i <= numberOfTiles; i++) {
        sorted.push(i);
    }
    const randomised = [];
    while (sorted.length > 0) {
        const r = Math.floor(Math.random() * sorted.length);
        randomised.push(sorted.splice(r, 1)[0]);
    }
    return randomised;
}
exports.randomiseTiles = randomiseTiles;
function randomiseStartingPlacements() {
    const temples = [];
    for (let id = 1; id <= numberOfExplorers; id++) {
        let position = newRandomInt();
        while (notAlreadyTaken(temples, position)) {
            position = newRandomInt();
        }
        temples.push(position);
    }
    const explorers = [];
    for (let id = 1; id <= numberOfExplorers; id++) {
        let position = newRandomInt();
        while (notAlreadyTaken(explorers, position) && notTooCloseToTemple(id, position)) {
            position = newRandomInt();
        }
        explorers.push(position);
    }
    return { temples, explorers };
    function notAlreadyTaken(arr, position) {
        return !!arr.find(placement => placement === position);
    }
    function notTooCloseToTemple(id, position) {
        const temple = temples[id];
        return position + temple < minDistanceBetweenStartingPlaces || numberOfStartingPlaces * 2 - position - temple < minDistanceBetweenStartingPlaces;
    }
    function newRandomInt() {
        return Math.floor(Math.random() * numberOfStartingPlaces * 10);
    }
}
exports.randomiseStartingPlacements = randomiseStartingPlacements;
