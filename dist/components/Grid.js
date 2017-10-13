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
const Cell_1 = require("./Cell");
let Grid = class Grid extends React.Component {
    render() {
        const columns = [1, 2, 3, 4, 5, 6];
        const rows = [1, 2, 3, 4, 5];
        return (React.createElement("table", { className: 'player-grid' },
            React.createElement("tbody", null, rows.map((row) => {
                return (React.createElement("tr", { className: `player-row row-${row}` }, columns.map((column) => {
                    return (React.createElement("td", { className: `player-row row-${row} column-${column}` },
                        React.createElement(Cell_1.Cell, { player: this.props.player, x: column, y: row })));
                })));
            }))));
    }
};
Grid = __decorate([
    mobx_react_1.observer
], Grid);
exports.Grid = Grid;