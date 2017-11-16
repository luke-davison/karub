import {observable} from 'mobx'

import {IPlayer, ITile, IPosition} from './interfaces'
import {dummyPlayerData, dummyTemplePlacements, dummyRemainingTiles, dummyCurrentTile} from './dummyData'

class AppState {
  @observable players: Array<IPlayer>
  @observable remainingTiles: Array<ITile>
  @observable currentTile: ITile
  @observable player: IPlayer
  @observable movementToggled: boolean
  @observable tilePlaced: boolean

  constructor() {
    this.players = dummyPlayerData
    this.remainingTiles = dummyRemainingTiles
    this.currentTile = dummyCurrentTile
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
    if (this.tilePlaced && this.currentTile.position.x === x && this.currentTile.position.y === y) {
      this.tilePlaced = false
    } else {
      if (!this.player.tiles.find(tile => tile.position.x === x && tile.position.y === y)) {
        this.currentTile.position.x = x
        this.currentTile.position.y = y
        this.tilePlaced = true
      }
    }
  }
  hoverOverCell(x: number, y: number) {
    if (!this.movementToggled && !this.tilePlaced) {
      this.currentTile.position.x = x
      this.currentTile.position.y = y
    }
  }
  leaveCell(x: number, y: number) {
    if (!this.tilePlaced && this.currentTile.position.x === x && this.currentTile.position.y === y) {
      this.currentTile.position.x = 0
      this.currentTile.position.y = 0
    }
  }
  toggleMovement() {
    this.movementToggled = !this.movementToggled 
  }
  confirmTurn() {
    if (this.tilePlaced) {
      this.tilePlaced = false
    }
  }
}

export const appState = new AppState()