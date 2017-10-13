"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const possibleMovements_1 = require("../../functions/possibleMovements");
const tiles_1 = require("../../functions/tiles");
describe('getPossibleMovements', () => {
    it('returns an array', () => {
        const startingTile = { x: 1, y: 1, tile: tiles_1.getTileById(1) };
        const result = possibleMovements_1.getPossibleMovements(startingTile, 2, [], { x: 0, y: 0 }, []);
        chai_1.expect(result).to.eql([startingTile]);
    });
});
