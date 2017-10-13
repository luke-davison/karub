"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const mobx_react_1 = require("mobx-react");
const CurrentTile_1 = require("./components/CurrentTile");
const PlayerBoard_1 = require("./components/PlayerBoard");
const RemainingTiles_1 = require("./components/RemainingTiles");
const MovementToggle_1 = require("./components/MovementToggle");
const ConfirmButton_1 = require("./components/ConfirmButton");
const AppState_1 = require("./AppState");
let App = class App extends React.Component {
    render() {
        return (React.createElement("div", { id: 'app' },
            React.createElement(CurrentTile_1.CurrentTile, null),
            React.createElement(MovementToggle_1.MovementToggle, null),
            React.createElement(ConfirmButton_1.ConfirmButton, null),
            React.createElement(PlayerBoard_1.PlayerBoard, { player: AppState_1.appState.player }),
            React.createElement(RemainingTiles_1.RemainingTiles, { tiles: AppState_1.appState.remainingTiles })));
    }
};
App = __decorate([
    mobx_react_1.observer
], App);
;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
