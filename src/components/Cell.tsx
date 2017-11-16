import * as React from 'react'
import {observer} from 'mobx-react'

import {ITile} from '../interfaces'
import {PlacedTile} from './PlacedTile'

import {appState} from '../AppState'

@observer
export class Cell extends React.Component<{tile?: ITile, x: number, y: number}, {}> {
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
    const proposedPlacement = !this.props.tile && appState.currentTile.position.x === this.props.x && appState.currentTile.position.y === this.props.y
    let proposedClassName = ''
    if (proposedPlacement) {
      proposedClassName += ' darken'
    }
    return (
      <div className={'player-cell' + proposedClassName}>
        <button className='cell-button' onClick={this.clickCell} onMouseEnter={this.hoverOverCell} onMouseLeave={this.leaveCell}/>
        {this.props.tile && <PlacedTile tile={this.props.tile}/>}
        {proposedPlacement && <img src={`/static/image/tile${appState.currentTile.id}.jpeg`} className='proposed-tile' />}
      </div>
    )
  }
}

