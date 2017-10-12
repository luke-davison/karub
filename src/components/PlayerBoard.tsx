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
      <div key={this.props.player.id} className='player-grid'>
        <div className='top-row'>
          <OuterCell player={this.props.player} x={0} y={0} />
          {columns.map((column: number) => {
            return <OuterCell key={column} player={this.props.player} x={column} y={0} />
          })}
          <OuterCell player={this.props.player} x={7} y={0} />
        </div>
        <div className='middle-rows'>
          <div className='left-column'>
            {rows.map((row: number) => {
              return <OuterCell key={row} player={this.props.player} x={0} y={row} />
            })}
          </div>
          <div className='middle-columns'>
            {rows.map((row: number) => {
              return (
                <div key={row} className='middle-row'>  
                  {columns.map((column: number) => {
                    return <Cell key={column} player={this.props.player} x={column} y={row} />
                  })}
                </div>
              )
            })}
          </div>
          <div className='right-column'>
            {rows.map((row: number) => {
              return <OuterCell key={row} player={this.props.player} x={7} y={row} />
            })}
          </div>
        </div>
        <div className='bottom-row'>
          <OuterCell player={this.props.player} x={0} y={6} />
          {columns.map((column: number) => {
            return <OuterCell key={column} player={this.props.player} x={column} y={6} />
          })}
          <OuterCell player={this.props.player} x={7} y={6} />
        </div>
      </div>
    )
  }
}