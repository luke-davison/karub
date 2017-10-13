"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
let RemainingTiles = class RemainingTiles extends React.Component {
    render() {
        const rows = [1, 2, 3, 4, 5, 6];
        const columns = [1, 2, 3, 4, 5, 6];
        return (React.createElement("div", { className: 'remaining-tile-grid' }, rows.map((row) => {
            return (React.createElement("div", { key: row, className: 'remaining-tile-row' }, columns.map((column) => {
                return (React.createElement("div", { key: column, className: 'remaining-tile-cell' }, this.props.tiles.find((tile) => tile.id === (row - 1) * columns.length + column) && (React.createElement("img", { src: `/static/image/tile${(row - 1) * columns.length + column}.jpeg`, className: 'remaining-tile-image' }))));
            })));
        })));
    }
};
RemainingTiles = __decorate([
    mobx_react_1.observer
], RemainingTiles);
exports.RemainingTiles = RemainingTiles;
