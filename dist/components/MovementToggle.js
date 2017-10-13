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
let MovementToggle = class MovementToggle extends React.Component {
    constructor() {
        super();
    }
    render() {
        let className = '';
        if (AppState_1.appState.movementToggled) {
            className += ' toggled';
        }
        return (React.createElement("div", { className: 'movement-toggle' },
            React.createElement("button", { className: 'movement-toggle-button' + className, onClick: AppState_1.appState.toggleMovement },
                AppState_1.appState.movementToggled && 'Place a Tile Instead',
                !AppState_1.appState.movementToggled && 'Move an Adventurer Instead')));
    }
};
MovementToggle = __decorate([
    mobx_react_1.observer
], MovementToggle);
exports.MovementToggle = MovementToggle;
