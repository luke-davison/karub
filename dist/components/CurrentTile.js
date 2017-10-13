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
let CurrentTile = class CurrentTile extends React.Component {
    render() {
        return (React.createElement("div", { className: 'current-tile' },
            React.createElement("img", { src: `/static/image/tile${AppState_1.appState.currentPlacement.tile.id}.jpeg`, className: 'tile-image' })));
    }
};
CurrentTile = __decorate([
    mobx_react_1.observer
], CurrentTile);
exports.CurrentTile = CurrentTile;
