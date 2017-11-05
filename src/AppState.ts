import {observable} from 'mobx'

import {IPlayer, ITile, ITilePlacement} from './interfaces'
import {dummyPlayerData, dummyTemplePlacements, dummyRemainingTiles, dummyCurrentPlacement} from './dummyData'

class AppState {
  @observable players: Array<IPlayer>
  @observable remainingTiles: Array<ITile>
  @observable templePositions: Array<ITilePlacement>
  @observable currentPlacement: ITilePlacement
  @observable player: IPlayer
  @observable movementToggled: boolean
  @observable tilePlaced: boolean

  constructor() {
    this.players = dummyPlayerData
    this.remainingTiles = dummyRemainingTiles
    this.templePositions = dummyTemplePlacements
    this.currentPlacement = dummyCurrentPlacement
    this.player = dummyPlayerData[0]

    this.tilePlaced = false
    this.movementToggled = false

    this.clickCell = this.clickCell.bind(this)
    this.hoverOverCell = this.hoverOverCell.bind(this)
    this.leaveCell = this.leaveCell.bind(this)
    this.toggleMovement = this.toggleMovement.bind(this)
    this.confirmTurn = this.confirmTurn.bind(this)
  }

  clickCell(x: number, y: number) {
    if (this.tilePlaced && this.currentPlacement.x === x && this.currentPlacement.y === y) {
      this.tilePlaced = false
    } else {
      if (!this.player.tilePlacements.find(tilePlacement => tilePlacement.x === x && tilePlacement.y === y)) {
        this.currentPlacement.x = x
        this.currentPlacement.y = y
        this.tilePlaced = true
      }
    }
  }
  hoverOverCell(x: number, y: number) {
    if (!this.movementToggled && !this.tilePlaced) {
      this.currentPlacement.x = x
      this.currentPlacement.y = y
    }
  }
  leaveCell(x: number, y: number) {
    if (!this.tilePlaced && this.currentPlacement.x === x && this.currentPlacement.y === y) {
      this.currentPlacement.x = 0
      this.currentPlacement.y = 0
    }
  }
  toggleMovement() {
    this.movementToggled = !this.movementToggled 
  }
  confirmTurn() {
    if (this.tilePlaced) {
      this.player.tilePlacements.push({tile: this.currentPlacement.tile, x: this.currentPlacement.x, y: this.currentPlacement.y})
      this.currentPlacement = {tile: this.remainingTiles.pop(), x: 0, y: 0}
      this.tilePlaced = false
    }
  }
}

export const appState = new AppState()