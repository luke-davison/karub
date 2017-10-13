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
const OuterCell_1 = require("./OuterCell");
let PlayerBoard = class PlayerBoard extends React.Component {
    render() {
        const columns = [1, 2, 3, 4, 5, 6];
        const rows = [1, 2, 3, 4, 5];
        return (React.createElement("div", { key: this.props.player.id, className: 'player-grid' },
            React.createElement("div", { className: 'top-row' },
                React.createElement(OuterCell_1.OuterCell, { player: this.props.player, x: 0, y: 0 }),
                columns.map((column) => {
                    return React.createElement(OuterCell_1.OuterCell, { key: column, player: this.props.player, x: column, y: 0 });
                }),
                React.createElement(OuterCell_1.OuterCell, { player: this.props.player, x: 7, y: 0 })),
            React.createElement("div", { className: 'middle-rows' },
                React.createElement("div", { className: 'left-column' }, rows.map((row) => {
                    return React.createElement(OuterCell_1.OuterCell, { key: row, player: this.props.player, x: 0, y: row });
                })),
                React.createElement("div", { className: 'middle-columns' }, rows.map((row) => {
                    return (React.createElement("div", { key: row, className: 'middle-row' }, columns.map((column) => {
                        return React.createElement(Cell_1.Cell, { key: column, player: this.props.player, x: column, y: row });
                    })));
                })),
                React.createElement("div", { className: 'right-column' }, rows.map((row) => {
                    return React.createElement(OuterCell_1.OuterCell, { key: row, player: this.props.player, x: 7, y: row });
                }))),
            React.createElement("div", { className: 'bottom-row' },
                React.createElement(OuterCell_1.OuterCell, { player: this.props.player, x: 0, y: 6 }),
                columns.map((column) => {
                    return React.createElement(OuterCell_1.OuterCell, { key: column, player: this.props.player, x: column, y: 6 });
                }),
                React.createElement(OuterCell_1.OuterCell, { player: this.props.player, x: 7, y: 6 }))));
    }
};
PlayerBoard = __decorate([
    mobx_react_1.observer
], PlayerBoard);
exports.PlayerBoard = PlayerBoard;
