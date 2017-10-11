import * as React from 'react'
import {observer} from 'mobx-react'

import {Tile} from '../interfaces'

@observer
export class RemainingTiles extends React.Component<{tiles: Array<Tile>}, {}> {
  
  render() {
    const rows: Array<number> = [1, 2, 3, 4, 5, 6]
    const columns: Array<number> = [1, 2, 3, 4, 5, 6]
    return (
      <div className='remaining-tile-grid'>
        {rows.map((row: number) => {
          return (
            <div className='remaining-tile-row'>
              {columns.map((column: number) => {
                return (
                  <div className='remaining-tile-cell'>
                    {this.props.tiles.find((tile: Tile) => tile.id === (row - 1) * columns.length + column) && (
                      <img src={`/static/image/tile${(row - 1) * columns.length + column}.jpeg`} className='remaining-tile-image' />
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}