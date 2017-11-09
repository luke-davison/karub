import * as React from 'react'
import {observer} from 'mobx-react'

import {ITile} from '../interfaces'
import {getTileAsset} from '../functions/assets'

@observer
export class RemainingTiles extends React.Component<{tiles: Array<ITile>}, {}> {
  
  render() {
    const rows: Array<number> = [1, 2, 3, 4, 5, 6]
    const columns: Array<number> = [1, 2, 3, 4, 5, 6]
    return (
      <div className='remaining-tile-grid'>
        {rows.map((row: number) => {
          return (
            <div key={row} className='remaining-tile-row'>
              {columns.map((column: number) => {
                return (
                  <div key={column} className='remaining-tile-cell'>
                    {this.props.tiles.find((tile: ITile) => tile.id === (row - 1) * columns.length + column) && (
                      <img src={getTileAsset((row - 1) * columns.length + column)} className='remaining-tile-image' />
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