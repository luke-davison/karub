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
const AppState_1 = require("../AppState");
let Cell = class Cell extends React.Component {
    constructor() {
        super();
        this.clickCell = this.clickCell.bind(this);
        this.hoverOverCell = this.hoverOverCell.bind(this);
        this.leaveCell = this.leaveCell.bind(this);
    }
    clickCell(e) {
        AppState_1.appState.clickCell(this.props.x, this.props.y);
    }
    hoverOverCell(e) {
        AppState_1.appState.hoverOverCell(this.props.x, this.props.y);
    }
    leaveCell(e) {
        AppState_1.appState.leaveCell(this.props.x, this.props.y);
    }
    render() {
        const placement = this.props.player.tilePlacements.find((tile) => tile.x === this.props.x && tile.y === this.props.y);
        const proposedPlacement = !placement && AppState_1.appState.currentPlacement.x === this.props.x && AppState_1.appState.currentPlacement.y === this.props.y;
        let proposedClassName = '';
        if (proposedPlacement) {
            proposedClassName += ' darken';
        }
        return (React.createElement("div", { className: 'player-cell' + proposedClassName },
            this.props.player.id === 1 && (React.createElement("button", { className: 'cell-button', onClick: this.clickCell, onMouseEnter: this.hoverOverCell, onMouseLeave: this.leaveCell })),
            placement && React.createElement("img", { src: `/static/image/tile${placement.tile.id}.jpeg`, className: 'tile-image' }),
            proposedPlacement && React.createElement("img", { src: `/static/image/tile${AppState_1.appState.currentPlacement.tile.id}.jpeg`, className: 'proposed-tile' })));
    }
};
Cell = __decorate([
    mobx_react_1.observer
], Cell);
exports.Cell = Cell;
