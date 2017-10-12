export interface StartingPlacement {
  id: number
  degrees: number
}

export interface Tile {
  id: number
  gem?: number
  paths: Array<number>
}

export interface Placement {
  id: number
  x: number
  y: number
}

export interface Adventurers {
  id: number
  gems: Array<number>
  reward: 0;
  adventurerPosition: Placement;
}

export interface Player {
  id: number
  adventurers: Array<Adventurers>
  tilePlacements: Array<TilePlacement>
}

export interface TilePlacement {
  tile: Tile
  x: number
  y: number
}