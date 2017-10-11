import {observable} from 'mobx'

import {Player, Tile, Placement} from './interfaces'
import {dummyPlayerData, dummyAdventurerPositions, dummyTemplePlacements, dummyRemainingTiles} from './dummyData'

class AppState {
  @observable players: Array<Player>
  @observable remainingTiles: Array<Tile>
  @observable adventurerStartingPositions: Array<Placement>
  @observable templePositions: Array<Placement>

  constructor() {
    this.players = dummyPlayerData
    this.remainingTiles = dummyRemainingTiles
    this.adventurerStartingPositions = dummyAdventurerPositions
    this.templePositions = dummyTemplePlacements
  }
}

export const appState = new AppState()