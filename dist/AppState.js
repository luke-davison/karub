"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const dummyData_1 = require("./dummyData");
class AppState {
    constructor() {
        this.players = dummyData_1.dummyPlayerData;
        this.remainingTiles = dummyData_1.dummyRemainingTiles;
        this.templePositions = dummyData_1.dummyTemplePlacements;
        this.currentPlacement = dummyData_1.dummyCurrentPlacement;
        this.player = dummyData_1.dummyPlayerData[0];
        this.tilePlaced = false;
        this.movementToggled = false;
        this.clickCell = this.clickCell.bind(this);
        this.hoverOverCell = this.hoverOverCell.bind(this);
        this.leaveCell = this.leaveCell.bind(this);
        this.toggleMovement = this.toggleMovement.bind(this);
        this.confirmTurn = this.confirmTurn.bind(this);
    }
    clickCell(x, y) {
        if (this.tilePlaced && this.currentPlacement.x === x && this.currentPlacement.y === y) {
            this.tilePlaced = false;
        }
        else {
            if (!this.player.tilePlacements.find(tilePlacement => tilePlacement.x === x && tilePlacement.y === y)) {
                this.currentPlacement.x = x;
                this.currentPlacement.y = y;
                this.tilePlaced = true;
            }
        }
    }
    hoverOverCell(x, y) {
        if (!this.movementToggled && !this.tilePlaced) {
            this.currentPlacement.x = x;
            this.currentPlacement.y = y;
        }
    }
    leaveCell(x, y) {
        if (!this.tilePlaced && this.currentPlacement.x === x && this.currentPlacement.y === y) {
            this.currentPlacement.x = 0;
            this.currentPlacement.y = 0;
        }
    }
    toggleMovement() {
        this.movementToggled = !this.movementToggled;
    }
    confirmTurn() {
        if (this.tilePlaced) {
            this.player.tilePlacements.push({ tile: this.currentPlacement.tile, x: this.currentPlacement.x, y: this.currentPlacement.y });
            this.currentPlacement = { tile: this.remainingTiles.pop(), x: 0, y: 0 };
            this.tilePlaced = false;
        }
    }
}
__decorate([
    mobx_1.observable
], AppState.prototype, "players", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "remainingTiles", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "templePositions", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "currentPlacement", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "player", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "movementToggled", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "tilePlaced", void 0);
exports.appState = new AppState();
