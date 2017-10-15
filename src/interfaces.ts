export interface Tile {
  id: number
  gem?: number
  paths: Array<string>
}

export interface Adventurers {
  id: number
  gems: Array<number>
  reward: number
  position: TilePlacement
  startingPosition: number
}

export interface Player {
  id: number
  adventurers: Array<Adventurers>
  tilePlacements: Array<TilePlacement>
}

export interface TilePlacement {
  tile?: Tile
  x: number
  y: number
}