import * as React from 'react'
import {observer} from 'mobx-react'

import {Cell} from './Cell'
import {OuterCell} from './OuterCell'
import {Player} from '../interfaces'

@observer
export class PlayerBoard extends React.Component<{player: Player}, {}> {
  
  render() {
    const columns: Array<number> = [1, 2, 3, 4, 5, 6]
    const rows: Array<number> = [1, 2, 3, 4, 5]

    return (
      <div className='player-grid'>
        <div className='top-row'>
          <OuterCell player={this.props.player} x={0} y={0} />
          {columns.map((column: number) => {
            return <OuterCell player={this.props.player} x={column} y={0} />
          })}
          <OuterCell player={this.props.player} x={7} y={0} />
        </div>
        <div className='middle-rows'>
          <div className='left-column'>
          </div>
          <div className='middle-columns'>
            {rows.map((row: number) => {
              return (
                <div className='middle-row'>
                  <OuterCell player={this.props.player} x={0} y={row} />
                  {columns.map((column: number) => {
                    return <Cell player={this.props.player} x={column} y={row} />
                  })}
                  <OuterCell player={this.props.player} x={7} y={row} />
                </div>
              )
            })}
          </div>
          <div className='right-column'>
          </div>
        </div>
        <div className='bottom-row'>
          <OuterCell player={this.props.player} x={0} y={6} />
          {columns.map((column: number) => {
            return <OuterCell player={this.props.player} x={column} y={6} />
          })}
          <OuterCell player={this.props.player} x={7} y={6} />
        </div>
      </div>
    )
  }
}