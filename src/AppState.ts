import {observable} from 'mobx'

import {Player, Tile, Placement, TilePlacement} from './interfaces'
import {dummyPlayerData, dummyAdventurerPositions, dummyTemplePlacements, dummyRemainingTiles, dummyCurrentPlacement} from './dummyData'

class AppState {
  @observable players: Array<Player>
  @observable remainingTiles: Array<Tile>
  @observable adventurerStartingPositions: Array<Placement>
  @observable templePositions: Array<Placement>
  @observable currentPlacement: TilePlacement

  constructor() {
    this.players = dummyPlayerData
    this.remainingTiles = dummyRemainingTiles
    this.adventurerStartingPositions = dummyAdventurerPositions
    this.templePositions = dummyTemplePlacements
    this.currentPlacement = dummyCurrentPlacement

    this.clickCell = this.clickCell.bind(this)
  }

  clickCell(x: number, y: number) {
    this.players[0].tilePlacements.push({tile: this.currentPlacement.tile, x, y})
  }
  hoverOverCell(x: number, y: number) {
    this.currentPlacement = {tile: this.currentPlacement.tile, x, y}
  }
}

export const appState = new AppState()