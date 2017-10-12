import {observable} from 'mobx'

import {Player, Tile, TilePlacement} from './interfaces'
import {dummyPlayerData, dummyTemplePlacements, dummyRemainingTiles, dummyCurrentPlacement} from './dummyData'

class AppState {
  @observable players: Array<Player>
  @observable remainingTiles: Array<Tile>
  @observable templePositions: Array<TilePlacement>
  @observable currentPlacement: TilePlacement
  @observable player: Player
  @observable movementToggled: boolean

  constructor() {
    this.players = dummyPlayerData
    this.remainingTiles = dummyRemainingTiles
    this.templePositions = dummyTemplePlacements
    this.currentPlacement = dummyCurrentPlacement
    this.player = dummyPlayerData[0]
    this.movementToggled = false

    this.clickCell = this.clickCell.bind(this)
    this.hoverOverCell = this.hoverOverCell.bind(this)
    this.toggleMovement = this.toggleMovement.bind(this)
    this.confirmTurn = this.confirmTurn.bind(this)
  }

  clickCell(x: number, y: number) {
    if (!this.player.tilePlacements.find(tilePlacement => tilePlacement.x === x && tilePlacement.y === y)) {
      this.player.tilePlacements.push({tile: this.currentPlacement.tile, x, y})
      this.currentPlacement = {tile: this.remainingTiles.pop(), x, y}
    }
  }
  hoverOverCell(x: number, y: number) {
    if (!this.movementToggled) {
      this.currentPlacement.x = x
      this.currentPlacement.y = y
    }
  }
  toggleMovement() {
    this.movementToggled = !this.movementToggled 
  }
  confirmTurn() {

  }
}

export const appState = new AppState()