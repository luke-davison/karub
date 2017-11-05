import * as React from 'react'
import {observer} from 'mobx-react'

import {IPlayer} from '../interfaces'

import {appState} from '../AppState'

@observer
export class Cell extends React.Component<{player: IPlayer, x: number, y: number}, {}> {
  constructor() {
    super()
    this.clickCell = this.clickCell.bind(this)
    this.hoverOverCell = this.hoverOverCell.bind(this)
    this.leaveCell = this.leaveCell.bind(this)
  }
  clickCell(e: any) {
    appState.clickCell(this.props.x, this.props.y)
  }
  hoverOverCell(e: any) {
    appState.hoverOverCell(this.props.x, this.props.y)
  }
  leaveCell(e: any) {
    appState.leaveCell(this.props.x, this.props.y)
  }

  render() {
    const placement = this.props.player.tilePlacements.find((tile) => tile.x === this.props.x && tile.y === this.props.y)
    const proposedPlacement = !placement && appState.currentPlacement.x === this.props.x && appState.currentPlacement.y === this.props.y
    let proposedClassName = ''
    if (proposedPlacement) {
      proposedClassName += ' darken'
    }
    return (
      <div className={'player-cell' + proposedClassName}>
        {this.props.player.id === 1 && (
          <button className='cell-button' onClick={this.clickCell} onMouseEnter={this.hoverOverCell} onMouseLeave={this.leaveCell}/>
        )}
        {placement && <img src={`/static/image/tile${placement.tile.id}.jpeg`} className='tile-image' />}
        {proposedPlacement && <img src={`/static/image/tile${appState.currentPlacement.tile.id}.jpeg`} className='proposed-tile' />}
      </div>
    )
  }
}

