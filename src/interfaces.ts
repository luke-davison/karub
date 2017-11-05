export interface ITile {
  id: number
  gem?: number
  paths: Array<string>
}

export interface IAdventurer {
  id: number
  gems: Array<number>
  reward: number
  position: ITilePlacement
  startingPosition: number
}

export interface ITemple {
  id: number
  x: number
  y: number
}

export interface IPlayer {
  id: number
  adventurers: Array<IAdventurer>
  tilePlacements: Array<ITilePlacement>
}

export interface ITilePlacement {
  tile?: ITile
  x: number
  y: number
}

export interface IGame {
  temples: string
  adventurers: string
  tiles: string
}