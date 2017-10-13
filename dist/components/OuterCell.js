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
let OuterCell = class OuterCell extends React.Component {
    render() {
        let classNames = '';
        if (this.props.x === 0 || this.props.x === 7) {
            classNames += ' vertical';
        }
        if (this.props.y === 0 || this.props.y === 6) {
            classNames += ' horizontal';
        }
        const adventurer = this.props.player.adventurers.find(adventurer => adventurer.position.x === this.props.x && adventurer.position.y === this.props.y);
        const temple = AppState_1.appState.templePositions.find(temple => temple.x === this.props.x && temple.y === this.props.y);
        return (React.createElement("div", { className: 'player-outer-cell' + classNames },
            adventurer && React.createElement("img", { src: `/static/image/templeorange.png`, className: 'adventurer-image' }),
            temple && React.createElement("img", { src: `/static/image/templeorange.png`, className: 'temple-image' })));
    }
};
OuterCell = __decorate([
    mobx_react_1.observer
], OuterCell);
exports.OuterCell = OuterCell;
