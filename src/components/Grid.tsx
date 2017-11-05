import * as React from 'react'
import {observer} from 'mobx-react'

import {Cell} from './Cell'
import {IPlayer} from '../interfaces'

@observer
export class Grid extends React.Component<{player: IPlayer}, {}> {
  
  render() {
    const columns: Array<number> = [1, 2, 3, 4, 5, 6]
    const rows: Array<number> = [1, 2, 3, 4, 5]
    return (
      <table className='player-grid'>
        <tbody>
          {rows.map((row: number) => {
            return (
              <tr className={`player-row row-${row}`}>
                {columns.map((column: number) => {
                  return (
                    <td className={`player-row row-${row} column-${column}`}>
                      <Cell player={this.props.player} x={column} y={row} />
                    </td>
                    )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}