import * as React from 'react'
import {observer} from 'mobx-react'

import {Cell} from './Cell'

@observer
export class PlayerBoard extends React.Component<{player: number}, {}> {
  
  render() {
    const columns: Array<number> = [1, 2, 3, 4, 5, 6]
    const rows: Array<number> = [1, 2, 3, 4, 5]

    return (
      <table className='player-grid'>
        <tbody>
          {/* Top row */}
          <tr className={`row-0`}>
            <td className={`outer-cell row-0 column-0`}/>
            {columns.map((column: number) => {
              return (
                <td className={`outer-cell row-0 column-${column}`}/>
              )
            })}
            <td className={`outer-cell row-0 column-${columns.length + 1}`}/>
          </tr>

          {/* Middle rows */}
          {rows.map((row: number) => {
            return (
              <tr className={`row-${row}`}>
                <td className={`outer-cell row-${row} column-0`}/>
                {columns.map((column: number) => {
                  return (
                    <td className={`player-cell row-${row} column-${column}`}>
                      <Cell player={this.props.player} x={column} y={row} />
                    </td>
                    )
                })}
                <td className={`outer-cell row-${row} column-${columns.length + 1}`}/>
              </tr>
            )
          })}

          {/* Bottom row */}
          <tr className={`row-${rows.length + 1}`}>
            <td className={`outer-cell row-${rows.length + 1} column-0`}/>
            {columns.map((column: number) => {
              return (
                <td className={`outer-cell row-${rows.length + 1} column-${column}`}/>
              )
            })}
            <td className={`outer-cell row-${rows.length + 1} column-${columns.length + 1}`}/>
          </tr>
        </tbody>
      </table>
    )
  }
}