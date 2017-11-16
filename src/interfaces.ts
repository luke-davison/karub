export interface ITile {
  id: number
  gem?: number
  paths: Array<string>
  position?: IPosition
}

export interface IAdventurer {
  id: number
  gems: Array<number>
  reward: number
  position: IPosition
  startingPosition: number
}

export interface ITemple {
  id: number
  position: IPosition
}

export interface IPlayer {
  id: number
  adventurers: Array<IAdventurer>
  tiles: Array<ITile>
  temples: Array<ITemple>
}

export interface IPosition {
  x: number
  y: number
}

export interface IGame {
  temples: string
  adventurers: string
  tiles: string
}