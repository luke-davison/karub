"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTileById(id) {
    switch (id) {
        case 1:
            return { id, paths: [1, 3] };
        case 2:
            return { id, paths: [1, 3] };
        case 3:
            return { id, gem: 1, paths: [1, 2] };
        case 4:
            return { id, gem: 1, paths: [2, 3] };
        case 5:
            return { id, paths: [1, 2, 3] };
        case 6:
            return { id, paths: [1, 2, 3] };
        case 7:
            return { id, paths: [0, 1, 2, 3] };
        case 8:
            return { id, paths: [0, 1, 2, 3] };
        case 9:
            return { id, gem: 1, paths: [0, 1] };
        case 10:
            return { id, gem: 1, paths: [0, 3] };
        case 11:
            return { id, gem: 1, paths: [0, 1, 3] };
        case 12:
            return { id, paths: [0, 1, 3] };
        case 13:
            return { id, gem: 1, paths: [1, 3] };
        case 14:
            return { id, gem: 2, paths: [1, 3] };
        case 15:
            return { id, gem: 1, paths: [1, 3] };
        case 16:
            return { id, gem: 2, paths: [1, 3] };
        case 17:
            return { id, paths: [0, 2] };
        case 18:
            return { id, paths: [0, 2] };
        case 19:
            return { id, paths: [1, 3] };
        case 20:
            return { id, paths: [1, 3] };
        case 21:
            return { id, paths: [1, 2] };
        case 22:
            return { id, paths: [2, 3] };
        case 23:
            return { id, paths: [0, 1, 2] };
        case 24:
            return { id, paths: [0, 2, 3] };
        case 25:
            return { id, paths: [0, 1, 2, 3] };
        case 26:
            return { id, paths: [0, 1, 2, 3] };
        case 27:
            return { id, paths: [0, 1] };
        case 28:
            return { id, paths: [0, 3] };
        case 29:
            return { id, paths: [0, 1, 2] };
        case 30:
            return { id, paths: [0, 2, 3] };
        case 31:
            return { id, gem: 1, paths: [0, 2] };
        case 32:
            return { id, gem: 2, paths: [0, 2] };
        case 33:
            return { id, gem: 1, paths: [0, 2] };
        case 34:
            return { id, gem: 2, paths: [0, 2] };
        case 35:
            return { id, paths: [0, 2] };
        case 36:
            return { id, paths: [0, 2] };
        default:
            return undefined;
    }
}
exports.getTileById = getTileById;
